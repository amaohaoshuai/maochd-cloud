package com.maochd.cloud.thirdparty;

import com.maochd.cloud.common.feign.annotation.EnableFeignConfig;
import com.maochd.cloud.common.swagger.annotation.EnableSwagger2Config;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableFeignConfig
@EnableDiscoveryClient
@SpringBootApplication
@EnableSwagger2Config
public class MaochdThirdPartyApplication {

    public static void main(String[] args) {
        SpringApplication.run(MaochdThirdPartyApplication.class, args);
    }

}
