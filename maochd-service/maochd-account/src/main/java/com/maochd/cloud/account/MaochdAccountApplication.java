package com.maochd.cloud.account;

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
public class MaochdAccountApplication {

    public static void main(String[] args) {
        SpringApplication.run(MaochdAccountApplication.class, args);
        System.out.println("(♥◠‿◠)ﾉﾞ  帐号服务启动成功   ლ(´ڡ`ლ)ﾞ");
    }

}
