package com.maochd.cloud.maochd.pay;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableDiscoveryClient
@EnableFeignClients(basePackages = "com.maochd.cloud")
@SpringBootApplication
public class MaochdPayApplication {

    public static void main(String[] args) {
        SpringApplication.run(MaochdPayApplication.class, args);
    }

}
