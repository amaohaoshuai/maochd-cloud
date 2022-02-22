package com.maochd.cloud.common.redis.annotation;

import java.lang.annotation.*;

@Documented
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface RedisLock {

    /**
     * 锁名
     *
     * @return string
     */
    String value() default "";

    /**
     * 是否为Object对象
     *
     * @return boolean
     */
    boolean asObject() default true;

    /**
     * 锁名所在参数的索引
     *
     * @return int
     */
    int index() default 0;

    /**
     * 锁释放时间
     *
     * @return long
     */
    long leaseTime() default -1;

    /**
     * 锁等待时间
     *
     * @return long
     */
    long waitTime() default 1;

}
