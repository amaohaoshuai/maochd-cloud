package com.maochd.cloud.common.redis.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import java.util.concurrent.TimeUnit;

@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface RedisLock {

    /**
     * redis 锁key的前缀
     *
     * @return redis 锁key的前缀
     */
    String prefix() default "";

    /**
     * 过期秒数,默认为10秒
     *
     * @return 轮询锁的时间
     */
    int expire() default 10;

    /**
     * 超时时间单位
     *
     * @return 秒
     */
    TimeUnit timeUnit() default TimeUnit.SECONDS;

    /**
     * Key的分隔符（默认 :）
     * 生成的Key：N:SO1008:500
     *
     * @return String
     */
    String delimiter() default ":";

    /**
     * key值名称
     *
     * @return String
     */
    String KeyName() default "";

}
