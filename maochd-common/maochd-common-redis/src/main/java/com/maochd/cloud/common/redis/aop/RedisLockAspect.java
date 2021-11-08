package com.maochd.cloud.common.redis.aop;

import com.alibaba.fastjson.JSON;
import com.maochd.cloud.common.redis.annotation.RedisLock;
import com.maochd.cloud.common.redis.constants.LockMsgConst;
import com.maochd.cloud.common.redis.service.RedissonService;
import lombok.extern.slf4j.Slf4j;
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

    @Around(value = "servicePointCut()")
    public Object interceptor(ProceedingJoinPoint joinPoint) {
        String threadName = Thread.currentThread().getName();
        //从切面织入点处通过反射机制获取织入点处的方法
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();
        //获取切入点所在的方法
        Method method = signature.getMethod();
        // 拿到注解
        RedisLock redisLock = method.getAnnotation(RedisLock.class);
        // 获取锁释放时间
        long leaseTime = redisLock.leaseTime();
        // 获取参数列表, 拼接成字符串
        Object[] args = joinPoint.getArgs();
        String lockName = JSON.toJSONString(args);
        RLock lock = redissonService.getLock(lockName);
        try {
            // 判断是否启用watchDog
            boolean lockFlag = leaseTime < 0 ? lock.tryLock(redisLock.waitTime(), TimeUnit.SECONDS)
                    : lock.tryLock(redisLock.waitTime(), redisLock.leaseTime(), TimeUnit.SECONDS);
            if (lockFlag) {
                log.info(LockMsgConst.LOCK_COMPLETED, threadName);
                return joinPoint.proceed();
            } else {
                log.error(LockMsgConst.GET_LOCK_FAIL, threadName);
                throw new RuntimeException(LockMsgConst.TIME_OUT);
            }
        } catch (Throwable throwable) {
            log.error(LockMsgConst.LOCK_FAIL, threadName, throwable.getMessage());
            throw new RuntimeException(LockMsgConst.TIME_OUT);
        } finally {
            //如果该线程还持有该锁，那么释放该锁。如果该线程不持有该锁，说明该线程的锁已到过期时间，自动释放锁
            if (redissonService.isHeldByCurrentThread(lockName)) {
                redissonService.unlock(lockName);
                log.info(LockMsgConst.UNLOCK_COMPLETE, threadName);
            }
        }
    }
}
