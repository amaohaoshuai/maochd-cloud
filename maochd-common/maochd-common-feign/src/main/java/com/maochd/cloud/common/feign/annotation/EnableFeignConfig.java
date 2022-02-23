package com.maochd.cloud.common.feign.annotation;

import com.maochd.cloud.common.feign.config.FeignAutoConfiguration;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Import;

import java.lang.annotation.*;

@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@EnableFeignClients
@Import({FeignAutoConfiguration.class})
public @interface EnableFeignConfig {
    String[] value() default {};

    String[] basePackages() default {"com.maochd.cloud"};

    Class<?>[] basePackageClasses() default {};

    Class<?>[] defaultConfiguration() default {};

    Class<?>[] clients() default {};
}
