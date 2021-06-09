package com.maochd.cloud.maochd.order;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableFeignClients(basePackages = "com.maochd.cloud")
@EnableDiscoveryClient
@SpringBootApplication
public class MaochdOrderApplication {

    public static void main(String[] args) {
        SpringApplication.run(MaochdOrderApplication.class, args);
    }

}
