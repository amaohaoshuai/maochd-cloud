package com.maochd.cloud.maochd.auth;

import com.maochd.cloud.maochd.common.annotation.EnableFeignConfig;
import com.maochd.cloud.maochd.common.annotation.EnableSwagger2Config;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.ComponentScan;

@EnableFeignConfig
@EnableDiscoveryClient
@SpringBootApplication
@EnableSwagger2Config
public class MaochdAuthApplication {

    public static void main(String[] args) {
        SpringApplication.run(MaochdAuthApplication.class, args);
    }

}
