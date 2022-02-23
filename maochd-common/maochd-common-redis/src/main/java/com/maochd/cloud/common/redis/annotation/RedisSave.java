package com.maochd.cloud.common.redis.annotation;

import java.lang.annotation.*;

@Documented
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface RedisSave {

    /**
     * 键值
     *
     * @return string
     */
    String key() default "";

    /**
     * 过期时间，默认永久
     *
     * @return long
     */
    long expireTime() default -1L;
}
