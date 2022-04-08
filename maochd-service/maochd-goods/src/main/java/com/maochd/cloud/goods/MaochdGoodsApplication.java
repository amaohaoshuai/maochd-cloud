package com.maochd.cloud.goods;

import com.maochd.cloud.common.datasource.annotation.EnableMybatisConfig;
import com.maochd.cloud.common.feign.annotation.EnableFeignConfig;
import com.maochd.cloud.common.swagger.annotation.EnableSwagger2Config;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@EnableDiscoveryClient
@EnableFeignConfig
@SpringBootApplication
@EnableSwagger2Config
@EnableMybatisConfig
@EnableAspectJAutoProxy(exposeProxy = true)
public class MaochdGoodsApplication {

    public static void main(String[] args) {
        SpringApplication.run(MaochdGoodsApplication.class, args);
        System.out.println("(♥◠‿◠)ﾉﾞ  商品服务启动成功   ლ(´ڡ`ლ)ﾞ");
    }

}
