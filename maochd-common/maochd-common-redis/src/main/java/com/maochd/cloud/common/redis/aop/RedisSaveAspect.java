package com.maochd.cloud.common.redis.aop;

import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.common.redis.annotation.RedisSave;
import com.maochd.cloud.common.redis.service.RedisService;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;

import javax.annotation.Resource;
import java.lang.reflect.Method;

@Slf4j
@Aspect
public class RedisSaveAspect {

    @Resource
    private RedisService redisService;

    @Pointcut(value = "@annotation(com.maochd.cloud.common.redis.annotation.RedisSave)")
    public void servicePointCut() {
    }

    @SneakyThrows
    @AfterReturning(pointcut = "servicePointCut()", returning = "result")
    public void afterMethod(JoinPoint joinPoint, Object result) {
        //从切面织入点处通过反射机制获取织入点处的方法
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();
        //获取切入点所在的方法
        Method method = signature.getMethod();
        // 拿到注解
        RedisSave redisSave = method.getAnnotation(RedisSave.class);
        if (redisService.hasKey(redisSave.key())) {
            return;
        }
        redisService.set(redisSave.key(), ((R<?>) result).getData(), redisSave.expireTime());
    }
}
