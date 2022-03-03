package com.maochd.cloud.gateway.config;

import cn.hutool.core.util.StrUtil;
import com.alibaba.fastjson.JSONObject;
import com.maochd.cloud.common.redis.service.RedisService;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import reactor.core.publisher.Mono;

import javax.annotation.Resource;
import java.awt.*;

@Configuration
public class RouterConfig {

    @Resource
    private RedisService redisService;

    @Bean
    public RouteLocator routes(RouteLocatorBuilder builder) {
        return builder.routes().route("test", r -> r.path("/auth/oauth/**")
                .filters(f -> f.modifyResponseBody(String.class, String.class,
                        (exchange, s) -> {
                            System.out.println(s);
//                            String path = exchange.getRequest().getPath().value();
//                            if (path.equalsIgnoreCase("/auth/oauth/token")) {
//                                if (StrUtil.isNotBlank(s)) {
//                                    JSONObject jsonObject = JSONObject.parseObject(s);
//                                    String accessToken = jsonObject.getString("access_token");
//                                    System.out.println("进来了");
//                                    if (StrUtil.isNotBlank(accessToken)) {
//                                        redisService.set("authToken:" + accessToken, accessToken);
//                                    }
//                                }
//                            }
                            return Mono.just(s);
                        })).uri("lb://maochd-auth")).build();
    }
}
