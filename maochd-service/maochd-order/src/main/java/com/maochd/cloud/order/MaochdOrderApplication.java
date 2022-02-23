package com.maochd.cloud.order;

import com.maochd.cloud.common.datasource.annotation.EnableMybatisConfig;
import com.maochd.cloud.common.feign.annotation.EnableFeignConfig;
import com.maochd.cloud.common.swagger.annotation.EnableSwagger2Config;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableMybatisConfig
@EnableFeignConfig
@EnableDiscoveryClient
@SpringBootApplication
@EnableSwagger2Config
public class MaochdOrderApplication {

    public static void main(String[] args) {
        SpringApplication.run(MaochdOrderApplication.class, args);
    }

}
