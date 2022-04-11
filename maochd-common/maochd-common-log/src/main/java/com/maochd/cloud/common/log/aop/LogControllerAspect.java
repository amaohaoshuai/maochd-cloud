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
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.core.LocalVariableTableParameterNameDiscoverer;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.lang.reflect.Method;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Slf4j
@Aspect
@ConditionalOnProperty(name = "global.log.enabled", havingValue = "true", matchIfMissing = true)
public class LogControllerAspect {

    @Pointcut(value = "execution(* com.maochd.cloud..*Controller.*(..))")
    public void servicePointCut() {
    }

    @SneakyThrows
    @Around(value = "servicePointCut()")
    public Object interceptor(ProceedingJoinPoint joinPoint) {
        HttpServletRequest request = ((ServletRequestAttributes)
                RequestContextHolder.currentRequestAttributes()).getRequest();
        // 从切面织入点处通过反射机制获取织入点处的方法
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();
        // 获取切入点所在的方法
        Method method = signature.getMethod();
        // 读取Deprecated注解，如果存在则打印warn日志，后续需要抛出异常（因为无法确定线上是否使用废弃接口，先观察一段时间）
        Deprecated deprecatedAnnotation = method.getAnnotation(Deprecated.class);
        if (deprecatedAnnotation != null) {
            log.warn(LogConst.LOG_DEPRECATED_MSG, method.getName(), request.getRequestURI());
        }
        // 获取参数名称
        LocalVariableTableParameterNameDiscoverer paramNames = new LocalVariableTableParameterNameDiscoverer();
        String[] params = paramNames.getParameterNames(method);
        // 获取参数
        List<Object> args = Arrays.asList(joinPoint.getArgs());
        // 拼接参数
        Map<String, Object> reqParams = IntStream.range(0, args.size())
                .boxed()
                .collect(Collectors.toMap(k -> Objects.requireNonNull(params)[k], args::get));
        // 打印方法开始日志
        log.info(LogConst.LOG_START_MSG, method.getName(), request.getRequestURI(), request.getMethod(),
                JSONObject.toJSONString(reqParams, SerializerFeature.DisableCircularReferenceDetect));
        // 获取开始时间
        LocalDateTime startTime = LocalDateTime.now();
        Object result;
        try {
            result = joinPoint.proceed();
        } catch (Throwable e) {
            // 打印方法异常日志
            log.error(LogConst.LOG_ERROR_MSG, method.getName(), request.getRequestURI(), request.getMethod(),
                    JSONObject.toJSONString(reqParams, SerializerFeature.DisableCircularReferenceDetect));
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
            log.warn(LogConst.LOG_SLOW_METHOD_MSG, method.getName(), request.getRequestURI(), diffTime);
        }
        return result;
    }
}