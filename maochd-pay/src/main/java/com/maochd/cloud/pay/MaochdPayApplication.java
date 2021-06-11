package com.maochd.cloud.pay;

import com.maochd.cloud.common.core.annotation.EnableFeignConfig;
import com.maochd.cloud.common.swagger.annotation.EnableSwagger2Config;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@EnableFeignConfig
@SpringBootApplication
@EnableSwagger2Config
public class MaochdPayApplication {

    public static void main(String[] args) {
        SpringApplication.run(MaochdPayApplication.class, args);
    }

}