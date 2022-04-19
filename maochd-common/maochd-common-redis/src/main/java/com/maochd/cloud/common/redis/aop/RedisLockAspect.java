package com.maochd.cloud.common.redis.aop;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.maochd.cloud.common.core.exception.RedisBizException;
import com.maochd.cloud.common.redis.annotation.RedisLock;
import com.maochd.cloud.common.redis.constants.LockConst;
import com.maochd.cloud.common.redis.service.RedissonService;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.redisson.api.RLock;

import javax.annotation.Resource;
import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

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
        StringBuffer lockNameBuff = new StringBuffer(redisLock.prefix());
        if (redisLock.asObject()) {
            lockNameBuff.append(JSON.toJSONString(args));
        } else {
            // 取出参数名称
            List<String> parameterNames = Arrays.asList(signature.getParameterNames());
            // 取出自定义key值名称
            List<String> keys = Arrays.stream(redisLock.value().split(","))
                    .map(String::trim).collect(Collectors.toList());
            parameterNames.forEach(f -> {
                if (keys.indexOf(f) > 0) {
                    int index = parameterNames.indexOf(f);
                    args[index] = new HashMap<String, String>(16) {{
                        put(parameterNames.get(index), (String) args[index]);
                    }};
                }
            });
            // 把参数合并到一个map中
            JSONObject argMap = new JSONObject();
            Arrays.stream(args).forEach(f -> argMap.putAll(JSONObject.parseObject(JSONObject.toJSONString(f))));
            keys.forEach(f -> lockNameBuff.append(argMap.getString(f.trim())));
        }
        String lockName = lockNameBuff.toString();
        RLock lock = redissonService.getLock(lockName);
        // 根据释放时间判断是否启用watchDog
        boolean lockFlag = leaseTime < 0 ? lock.tryLock(redisLock.waitTime(), TimeUnit.SECONDS)
                : lock.tryLock(redisLock.waitTime(), redisLock.leaseTime(), TimeUnit.SECONDS);
        if (!lockFlag) {
            log.error(LockConst.LOCK_FAIL_MSG, threadName);
            throw new RedisBizException(redisLock.errMsg());
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
