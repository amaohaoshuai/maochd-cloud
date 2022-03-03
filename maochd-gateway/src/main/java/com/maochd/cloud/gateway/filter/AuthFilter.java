//package com.maochd.cloud.gateway.filter;
//
//import com.maochd.cloud.gateway.config.properties.IgnoreWhiteProperties;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.cloud.gateway.filter.GatewayFilterChain;
//import org.springframework.cloud.gateway.filter.GlobalFilter;
//import org.springframework.core.Ordered;
//import org.springframework.stereotype.Component;
//import org.springframework.web.server.ServerWebExchange;
//import reactor.core.publisher.Mono;
//
//import javax.annotation.Resource;
//
//@Slf4j
//@Component
//public class AuthFilter implements GlobalFilter, Ordered {
//
//    @Resource
//    private IgnoreWhiteProperties ignoreWhite;
//
//    @Override
//    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
//        log.info("前置拦截");
//        log.info(ignoreWhite.getWhites().toString());
//        log.info(exchange.getRequest().getURI().toString());
//
//        return chain.filter(exchange).then(Mono.fromRunnable(() -> {
//            log.info("后置逻辑");
//        }));
//    }
//
//    @Override
//    public int getOrder() {
//        return -200;
//    }
//}
