package com.maochd.cloud.common.redis.aop;

import cn.hutool.core.util.CharsetUtil;
import cn.hutool.core.util.HexUtil;
import com.alibaba.fastjson.JSONObject;
import com.maochd.cloud.common.core.exception.BaseException;
import com.maochd.cloud.common.redis.annotation.LockParam;
import com.maochd.cloud.common.redis.annotation.RedisLock;
import com.maochd.cloud.common.redis.util.RedisUtil;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.util.ReflectionUtils;

import javax.annotation.Resource;
import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Parameter;

@Slf4j
@Aspect
public class RedisLockAspect {

    @Resource
    private RedisUtil redisUtil;

    @Pointcut(value = "@annotation(com.maochd.cloud.common.redis.annotation.RedisLock)")
    public void servicePointCut() {
    }


    @Around(value = "servicePointCut()")
    public Object interceptor(ProceedingJoinPoint joinPoint) {
        log.info("分布式锁开始");
        // 得到签名
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();
        // 得到方法
        Method method = signature.getMethod();
        // 得到注解
        RedisLock redisLock = method.getAnnotation(RedisLock.class);
        // 生成key
        String lockKey = getLockKey(joinPoint);

        // 如果缓存中有这个key视为重复提交
        if (redisUtil.setNX(lockKey, Thread.currentThread().getName())) {
            // 设置过期时间
            redisUtil.expire(lockKey, redisLock.expire(), redisLock.timeUnit());
            try {
                Object proceed = joinPoint.proceed();
                redisUtil.del(lockKey);
                return proceed;
            } catch (Throwable e) {
                log.warn("Cache Lock Around Exception:{}", e.getMessage());
                redisUtil.del(lockKey);
                throw new RuntimeException(e);
            }
        } else {
            throw new BaseException("处理中，请勿重复提交!");
        }
    }

    /**
     * 得到key
     */
    public String getLockKey(ProceedingJoinPoint joinPoint) {
        // 得到签名
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();
        // 得到方法
        Method method = signature.getMethod();
        // 得到lock注解
        RedisLock redisLock = method.getAnnotation(RedisLock.class);
        // 得到参数
        final Object[] args = joinPoint.getArgs();
        // 得到参数
        final Parameter[] parameters = method.getParameters();
        StringBuilder builder = new StringBuilder();
        // 把方法名作为key的一部分
        builder.append(redisLock.prefix()).append(redisLock.delimiter()).append(method.getName());
        // 解析方法里面带 LockParam 注解的属性
        for (int i = 0; i < parameters.length; i++) {
            // 得到param注解（从参数）
            final LockParam annotation = parameters[i].getAnnotation(LockParam.class);
            if (annotation == null) {
                continue;
            }
            String encodeHexStr = HexUtil.encodeHexStr(JSONObject.toJSONString(args[i]), CharsetUtil.CHARSET_UTF_8);
            // 生成key
            builder.append(redisLock.delimiter()).append(encodeHexStr);
        }
        // 解析实体对象里面带 LockParam 注解的属性
        // 得到参数注解
        final Annotation[][] parameterAnnotations = method.getParameterAnnotations();
        for (int i = 0; i < parameterAnnotations.length; i++) {
            // 实体参数/参数
            final Object object = args[i];
            if (object == null) {
                continue;
            }
            // 实体对象字段
            final Field[] fields = object.getClass().getDeclaredFields();
            for (Field field : fields) {
                // 得到param注解（从字段）
                final LockParam annotation = field.getAnnotation(LockParam.class);
                if (annotation == null) {
                    continue;
                }
                field.setAccessible(true);
                builder.append(redisLock.delimiter()).append(ReflectionUtils.getField(field, object));
            }
        }
        return builder.toString();
    }
}
