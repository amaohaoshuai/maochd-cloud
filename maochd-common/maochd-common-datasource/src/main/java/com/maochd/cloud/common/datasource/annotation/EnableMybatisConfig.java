package com.maochd.cloud.common.datasource.annotation;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

import java.lang.annotation.*;

@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
// 指定要扫描的Mapper类的包的路径
@MapperScan("com.maochd.cloud.**.mapper")
public @interface EnableMybatisConfig {

}
