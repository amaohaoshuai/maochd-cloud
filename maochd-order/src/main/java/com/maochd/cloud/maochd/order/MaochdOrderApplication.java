package com.maochd.cloud.maochd.order;

import com.maochd.cloud.maochd.common.annotation.EnableCustomConfig;
import com.maochd.cloud.maochd.common.annotation.EnableFeignConfig;
import com.maochd.cloud.maochd.common.annotation.EnableSwagger2Config;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.ComponentScan;

@EnableCustomConfig
@EnableFeignConfig
@EnableDiscoveryClient
@SpringBootApplication
@EnableSwagger2Config
public class MaochdOrderApplication {

    public static void main(String[] args) {
        SpringApplication.run(MaochdOrderApplication.class, args);
    }

}
