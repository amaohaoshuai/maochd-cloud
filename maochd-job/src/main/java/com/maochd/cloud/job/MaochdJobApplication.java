package com.maochd.cloud.job;

import com.maochd.cloud.common.core.annotation.EnableFeignConfig;
import com.maochd.cloud.common.swagger.annotation.EnableSwagger2Config;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@EnableFeignConfig
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
@EnableSwagger2Config
public class MaochdJobApplication {

    public static void main(String[] args) {
        SpringApplication.run(MaochdJobApplication.class, args);
    }

}
