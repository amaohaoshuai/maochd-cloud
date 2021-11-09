package com.maochd.cloud.common.log.annotation;

import java.lang.annotation.*;

@Documented
@Target({ElementType.PARAMETER, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
public @interface CustomLog {

    String value() default "";
}
