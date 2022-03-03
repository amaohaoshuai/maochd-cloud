package com.maochd.cloud.gateway.filter;

import cn.hutool.core.util.StrUtil;
import com.maochd.cloud.common.core.constant.ResultCode;
import com.maochd.cloud.common.core.constant.SecurityConstants;
import com.maochd.cloud.common.redis.service.RedisService;
import com.maochd.cloud.gateway.config.properties.IgnoreWhiteProperties;
import com.maochd.cloud.gateway.util.ResponseUtils;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.core.Ordered;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.stereotype.Component;
import org.springframework.util.AntPathMatcher;
import org.springframework.util.PathMatcher;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import javax.annotation.Resource;


/**
 * 安全拦截全局过滤器
 *
 * @author <a href="mailto:xianrui0365@163.com">haoxr</a>
 */
@Component
@Slf4j
public class SecurityGlobalFilter implements GlobalFilter, Ordered {

    @Resource
    private RedisService redisService;

    @Resource
    private IgnoreWhiteProperties ignoreUrls;


    @SneakyThrows
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        ServerHttpRequest request = exchange.getRequest();
        ServerHttpResponse response = exchange.getResponse();

        PathMatcher pathMatcher = new AntPathMatcher();
        String method = request.getMethodValue();
        String path = request.getURI().getPath();
        for (String url : ignoreUrls.getWhites()) {
            if (pathMatcher.match(url, path)) {
                return chain.filter(exchange);
            }
        }

        String token = request.getHeaders().getFirst(SecurityConstants.AUTHORIZATION_KEY);
        String redisToken = redisService.get("authToken:" + token);
        if (StrUtil.isNotBlank(redisToken)) {
            return chain.filter(exchange);
        }
        return ResponseUtils.writeErrorInfo(response, ResultCode.ACCESS_UNAUTHORIZED);
//
//
//
//        // 不是正确的的JWT不做解析处理
//        String token = request.getHeaders().getFirst(SecurityConstants.AUTHORIZATION_KEY);
//        if (StrUtil.isBlank(token) || !StrUtil.startWithIgnoreCase(token, SecurityConstants.JWT_PREFIX)) {
//            return chain.filter(exchange);
//        }
//
//        // 解析JWT获取jti，以jti为key判断redis的黑名单列表是否存在，存在则拦截访问
//        token = StrUtil.replaceIgnoreCase(token, SecurityConstants.JWT_PREFIX, Strings.EMPTY);
//        String payload = StrUtil.toString(JWSObject.parse(token).getPayload());
//        JSONObject jsonObject = JSONUtil.parseObj(payload);
//        String jti = jsonObject.getStr(SecurityConstants.JWT_JTI);
//        Boolean isBlack = redisTemplate.hasKey(SecurityConstants.TOKEN_BLACKLIST_PREFIX + jti);
//        if (isBlack) {
//            return ResponseUtils.writeErrorInfo(response, ResultCode.TOKEN_ACCESS_FORBIDDEN);
//        }
//
//        // 存在token且不是黑名单，request写入JWT的载体信息
//        request = exchange.getRequest().mutate()
//                .header(SecurityConstants.JWT_PAYLOAD_KEY, URLEncoder.encode(payload, "UTF-8"))
//                .build();
//        exchange = exchange.mutate().request(request).build();
//        return chain.filter(exchange);
    }

    @Override
    public int getOrder() {
        return 0;
    }
}
