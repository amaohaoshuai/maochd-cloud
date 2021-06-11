package com.maochd.cloud.common.swagger.annotation;

import com.maochd.cloud.common.swagger.config.SwaggerConfig;
import org.springframework.context.annotation.Import;

import java.lang.annotation.*;

@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@Import({SwaggerConfig.class})
public @interface EnableSwagger2Config {
}
