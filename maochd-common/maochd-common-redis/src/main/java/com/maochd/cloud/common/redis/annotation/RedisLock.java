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

    /**
     * 自定义错误提示
     *
     * @return string
     */
    String errMsg() default "当前接口正在被其他线程访问";

    /**
     * 前置Key
     *
     * @return string
     */
    String prefix() default "redisLock:";

}
