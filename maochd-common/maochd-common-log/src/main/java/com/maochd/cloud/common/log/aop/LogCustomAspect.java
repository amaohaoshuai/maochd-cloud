package com.maochd.cloud.common.log.aop;

import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.serializer.SerializerFeature;
import com.maochd.cloud.common.log.constant.LogConst;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;

import java.lang.reflect.Method;
import java.time.Duration;
import java.time.LocalDateTime;

@Slf4j
@Aspect
public class LogCustomAspect {

    @Pointcut(value = "@annotation(com.maochd.cloud.common.log.annotation.CustomLog)")
    public void servicePointCut() {
    }

    @SneakyThrows
    @Around(value = "servicePointCut()")
    public Object interceptor(ProceedingJoinPoint joinPoint) {
        // 从切面织入点处通过反射机制获取织入点处的方法
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();
        // 获取切入点所在的方法
        Method method = signature.getMethod();
        // 读取Deprecated注解，如果存在则打印warn日志，后续需要抛出异常（因为无法确定线上是否使用废弃接口，先观察一段时间）
        Deprecated deprecatedAnnotation = method.getAnnotation(Deprecated.class);
        if (deprecatedAnnotation != null) {
            log.warn(LogConst.LOG_DEPRECATED_MSG, method.getName(), null);
        }
        // 打印方法开始日志
        log.info(LogConst.LOG_START_MSG, method.getName(), null, null, joinPoint.getArgs());
        // 获取开始时间
        LocalDateTime startTime = LocalDateTime.now();
        Object result;
        try {
            result = joinPoint.proceed();
        } catch (Throwable e) {
            // 打印方法异常日志
            log.error(LogConst.LOG_ERROR_MSG, method.getName(), null, null, joinPoint.getArgs());
            throw e;
        }
        // 计算方法耗时
        long diffTime = Duration.between(startTime, LocalDateTime.now()).toMillis();
        // 打印方法结束日志
        log.info(LogConst.LOG_END_MSG, method.getName(), diffTime,
                JSONObject.toJSONString(result, SerializerFeature.DisableCircularReferenceDetect));
        // 打印慢方法日志
        long slowMethodTime = 2000L;
        if (diffTime > slowMethodTime) {
            log.warn(LogConst.LOG_SLOW_METHOD_MSG, method.getName(), null, diffTime);
        }
        return result;
    }
}