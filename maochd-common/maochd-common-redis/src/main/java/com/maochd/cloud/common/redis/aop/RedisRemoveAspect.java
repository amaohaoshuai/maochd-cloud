package com.maochd.cloud.common.redis.aop;

import com.maochd.cloud.common.redis.annotation.RedisRemove;
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
public class RedisRemoveAspect {

    @Resource
    private RedisService redisService;

    @Pointcut(value = "@annotation(com.maochd.cloud.common.redis.annotation.RedisRemove)")
    public void servicePointCut() {
    }

    @SneakyThrows
    @AfterReturning(pointcut = "servicePointCut()")
    public void afterMethod(JoinPoint joinPoint) {
        //从切面织入点处通过反射机制获取织入点处的方法
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();
        //获取切入点所在的方法
        Method method = signature.getMethod();
        // 拿到注解
        RedisRemove redisRemove = method.getAnnotation(RedisRemove.class);
        redisService.del(redisRemove.key());
    }
}
