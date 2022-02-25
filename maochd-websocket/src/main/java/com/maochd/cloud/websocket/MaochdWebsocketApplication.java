package com.maochd.cloud.websocket;

import com.maochd.cloud.common.feign.annotation.EnableFeignConfig;
import com.maochd.cloud.common.swagger.annotation.EnableSwagger2Config;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@EnableFeignConfig
@EnableSwagger2Config
@SpringBootApplication
public class MaochdWebsocketApplication {

    public static void main(String[] args) {
        SpringApplication.run(MaochdWebsocketApplication.class, args);
    }

}
