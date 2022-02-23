package com.maochd.cloud.common.redis.aop;

import com.maochd.cloud.common.redis.annotation.RedisSave;
import com.maochd.cloud.common.redis.service.RedisService;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
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
    @Around(value = "servicePointCut()")
    public Object interceptor(ProceedingJoinPoint joinPoint) {
        //从切面织入点处通过反射机制获取织入点处的方法
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();
        //获取切入点所在的方法
        Method method = signature.getMethod();
        // 拿到注解
        RedisSave redisSave = method.getAnnotation(RedisSave.class);
        Object obj;
        // 读取缓存
        if (redisSave.asList()) {
            obj = redisService.getList(redisSave.key(), redisSave.clazz());
        } else {
            obj = redisService.get(redisSave.key(), redisSave.clazz());
        }
        // 如果缓存中有值，则返回缓存数据
        if (obj != null) {
            return obj;
        }
        // 执行方法
        obj = joinPoint.proceed();
        // 保存方法返回值
        redisService.set(redisSave.key(), obj, redisSave.expireTime());
        return obj;
    }
}
