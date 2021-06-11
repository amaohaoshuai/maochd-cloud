package com.maochd.cloud.auth;

import com.maochd.cloud.common.core.annotation.EnableFeignConfig;
import com.maochd.cloud.common.swagger.annotation.EnableSwagger2Config;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableFeignConfig
@EnableDiscoveryClient
@SpringBootApplication
@EnableSwagger2Config
public class MaochdAuthApplication {

    public static void main(String[] args) {
        SpringApplication.run(MaochdAuthApplication.class, args);
    }

}
