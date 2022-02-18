package com.maochd.cloud.inventory;

import com.maochd.cloud.common.datasource.annotation.EnableMybatisConfig;
import com.maochd.cloud.common.feign.annotation.EnableFeignConfig;
import com.maochd.cloud.common.swagger.annotation.EnableSwagger2Config;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@EnableFeignConfig
@SpringBootApplication
@EnableSwagger2Config
@EnableMybatisConfig
public class MaochdInventoryApplication {

    public static void main(String[] args) {
        SpringApplication.run(MaochdInventoryApplication.class, args);
    }

}
