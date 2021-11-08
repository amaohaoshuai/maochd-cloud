package com.maochd.cloud.common.redis.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface RedisSave {

    /**
     * 键值
     *
     * @return
     */
    String key() default "";

    /**
     * 过期时间，默认永久
     *
     * @return
     */
    long expireTime() default -1L;
}
