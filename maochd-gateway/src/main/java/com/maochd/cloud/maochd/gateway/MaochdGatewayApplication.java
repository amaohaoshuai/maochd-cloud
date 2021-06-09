package com.maochd.cloud.maochd.gateway;

import com.maochd.cloud.maochd.gateway.config.properties.IgnoreWhiteProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

import javax.annotation.Resource;

@EnableDiscoveryClient
@SpringBootApplication
public class MaochdGatewayApplication {

    public static void main(String[] args) {
        SpringApplication.run(MaochdGatewayApplication.class, args);
        System.out.println("(♥◠‿◠)ﾉﾞ  网关启动成功   ლ(´ڡ`ლ)ﾞ");
    }

}
