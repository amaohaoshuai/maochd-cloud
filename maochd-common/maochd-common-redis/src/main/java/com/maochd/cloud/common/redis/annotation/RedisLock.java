package com.maochd.cloud.common.redis.annotation;

import java.lang.annotation.*;

@Documented
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface RedisLock {

    /**
     * 锁释放时间
     *
     * @return
     */
    long leaseTime() default -1;

    /**
     * 锁等待时间
     *
     * @return
     */
    long waitTime() default 1;

}
