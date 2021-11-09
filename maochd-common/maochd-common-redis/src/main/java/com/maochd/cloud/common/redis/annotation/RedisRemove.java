package com.maochd.cloud.common.redis.annotation;

import java.lang.annotation.*;

@Documented
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface RedisRemove {

    /**
     * 键值
     *
     * @return
     */
    String key() default "";
}
