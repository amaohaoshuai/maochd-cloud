package com.maochd.cloud.user;

import com.maochd.cloud.common.datasource.annotation.EnableMybatisConfig;
import com.maochd.cloud.common.feign.annotation.EnableFeignConfig;
import com.maochd.cloud.common.swagger.annotation.EnableSwagger2Config;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@EnableMybatisConfig
@EnableFeignConfig
@EnableDiscoveryClient
@SpringBootApplication
@EnableSwagger2Config
@EnableAspectJAutoProxy(exposeProxy = true)
public class MaochdUserApplication {

    public static void main(String[] args) {
        SpringApplication.run(MaochdUserApplication.class, args);
        System.out.println("(♥◠‿◠)ﾉﾞ  用户服务启动成功   ლ(´ڡ`ლ)ﾞ");
    }

}
