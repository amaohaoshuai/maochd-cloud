package com.maochd.cloud.maochd.pay;

import com.maochd.cloud.maochd.common.annotation.EnableFeignConfig;
import com.maochd.cloud.maochd.common.annotation.EnableSwagger2Config;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.ComponentScan;

@EnableDiscoveryClient
@EnableFeignConfig
@SpringBootApplication
@EnableSwagger2Config
public class MaochdPayApplication {

    public static void main(String[] args) {
        SpringApplication.run(MaochdPayApplication.class, args);
    }

}
