package com.maochd.cloud.mq;

import com.maochd.cloud.common.feign.annotation.EnableFeignConfig;
import com.maochd.cloud.common.swagger.annotation.EnableSwagger2Config;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@EnableFeignConfig
@EnableSwagger2Config
@SpringBootApplication
public class MaochdMqApplication {
    public static void main(String[] args) {
        SpringApplication.run(MaochdMqApplication.class, args);
        System.out.println("(♥◠‿◠)ﾉﾞ  消息队列启动成功   ლ(´ڡ`ლ)ﾞ");
    }

}
