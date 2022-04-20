package com.maochd.cloud.gateway.handler;

import com.maochd.cloud.common.core.domain.BizResultCode;
import com.maochd.cloud.gateway.util.ResponseUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.web.reactive.error.ErrorWebExceptionHandler;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

/**
 * 网关统一异常处理
 *
 * @author maochd
 */
@Slf4j
@Order(-1)
@Configuration
public class GatewayExceptionHandler implements ErrorWebExceptionHandler {

    @Override
    public Mono<Void> handle(ServerWebExchange exchange, Throwable ex) {
        if (exchange.getResponse().isCommitted()) {
            return Mono.error(ex);
        }
        String path = exchange.getRequest().getURI().getPath();
        log.error("Path:{} Gateway exception:{}", path, ex.getMessage());
        return ResponseUtils.writeErrorInfo(exchange.getResponse(), BizResultCode.ERROR);
    }
}