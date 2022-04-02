package com.maochd.cloud.common.redis.aop;

import cn.hutool.core.util.StrUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.maochd.cloud.common.core.exception.RedisBizException;
import com.maochd.cloud.common.redis.annotation.RedisLock;
import com.maochd.cloud.common.redis.constants.LockConst;
import com.maochd.cloud.common.redis.service.RedissonService;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang.ArrayUtils;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.redisson.api.RLock;

import javax.annotation.Resource;
import java.lang.reflect.Method;
import java.util.concurrent.TimeUnit;

@Slf4j
@Aspect
public class RedisLockAspect {

    @Resource
    private RedissonService redissonService;

    @Pointcut(value = "@annotation(com.maochd.cloud.common.redis.annotation.RedisLock)")
    public void servicePointCut() {
    }

    @SneakyThrows
    @Around(value = "servicePointCut()")
    public Object interceptor(ProceedingJoinPoint joinPoint) {
        String threadName = Thread.currentThread().getName();
        // 从切面织入点处通过反射机制获取织入点处的方法
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();
        // 获取切入点所在的方法
        Method method = signature.getMethod();
        // 拿到注解
        RedisLock redisLock = method.getAnnotation(RedisLock.class);
        // 获取锁释放时间
        long leaseTime = redisLock.leaseTime();
        // 获取参数值列表
        Object[] args = joinPoint.getArgs();
        // 获取参数列表拼接成字符串
        String lockName = JSON.toJSONString(args);
        // 获取自定义锁名
        String paramName = redisLock.value();
        boolean asObject = redisLock.asObject();
        // 如果注解中包含lockName值，则按lockName值加锁
        if (StrUtil.isNotBlank(paramName)) {
            String value;
            if (asObject) {
                JSONObject jsonObject = JSON.parseObject(JSON.toJSONString(args[redisLock.index()]));
                value = String.valueOf(jsonObject.get(paramName));
            } else {
                int index = ArrayUtils.indexOf(signature.getParameterNames(), paramName);
                if (index < 0) {
                    log.error(LockConst.NO_MATCH_LOCK_NAME_MSG, threadName);
                    throw new RedisBizException(LockConst.NO_MATCH_LOCK_NAME);
                }
                value = String.valueOf(args[index]);
            }
            lockName = String.format(LockConst.CUSTOM_LOCK_NAME, paramName, value);
        }
        RLock lock = redissonService.getLock(lockName);
        // 根据释放时间判断是否启用watchDog
        boolean lockFlag = leaseTime < 0 ? lock.tryLock(redisLock.waitTime(), TimeUnit.SECONDS)
                : lock.tryLock(redisLock.waitTime(), redisLock.leaseTime(), TimeUnit.SECONDS);
        if (!lockFlag) {
            log.error(LockConst.LOCK_FAIL_MSG, threadName);
            throw new RedisBizException(LockConst.TIME_OUT);
        }
        log.info(LockConst.LOCK_COMPLETED_MSG, threadName);
        try {
            return joinPoint.proceed();
        } catch (Throwable e) {
            log.error(LockConst.BUSINESS_ERROR_MSG, threadName, e);
            throw new RedisBizException(e.getMessage());
        } finally {
            // 如果该线程还持有该锁，那么释放该锁。如果该线程不持有该锁，说明该线程的锁已到过期时间，自动释放锁
            if (redissonService.isHeldByCurrentThread(lockName)) {
                redissonService.unlock(lockName);
                log.info(LockConst.UNLOCK_COMPLETE_MSG, threadName);
            }
        }
    }
}
