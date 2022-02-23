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
     * 类型
     *
     * @return class
     */
    Class<?> clazz() default Object.class;

    /**
     * 过期时间，默认永久
     *
     * @return long
     */
    long expireTime() default -1L;

    /**
     * 作为集合类型
     *
     * @return boolean
     */
    boolean asList() default true;
}
