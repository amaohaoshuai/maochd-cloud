package com.maochd.cloud.gateway.config;

import cn.hutool.core.convert.Convert;
import cn.hutool.core.lang.Matcher;
import cn.hutool.core.util.StrUtil;
import com.maochd.cloud.common.redis.service.RedisService;
import com.maochd.cloud.gateway.config.properties.IgnoreWhiteProperties;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpMethod;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.security.authorization.AuthorizationDecision;
import org.springframework.security.authorization.ReactiveAuthorizationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.server.authorization.AuthorizationContext;
import org.springframework.stereotype.Component;
import org.springframework.util.AntPathMatcher;
import org.springframework.util.PathMatcher;
import reactor.core.publisher.Mono;

import javax.annotation.Resource;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * 网关自定义鉴权管理器
 *
 * @author <a href="mailto:xianrui0365@163.com">haoxr</a>
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class ResourceServerManager implements ReactiveAuthorizationManager<AuthorizationContext> {

    @Resource
    private RedisService redisService;

    @Resource
    private IgnoreWhiteProperties ignoreUrls;

    @Override
    public Mono<AuthorizationDecision> check(Mono<Authentication> mono, AuthorizationContext authorizationContext) {
        ServerHttpRequest request = authorizationContext.getExchange().getRequest();
        // 预检请求放行
        if (request.getMethod() == HttpMethod.OPTIONS) {
            return Mono.just(new AuthorizationDecision(true));
        }
        PathMatcher pathMatcher = new AntPathMatcher();
        String method = request.getMethodValue();
        String path = request.getURI().getPath();
        for (String url : ignoreUrls.getWhites()) {
            if(pathMatcher.match(url, path)) {
                return Mono.just(new AuthorizationDecision(true));
            }
        }
        String restfulPath = method + ":" + path;
        Map<String, Object> urlMap = redisService.hGetAll("AUTH:RESOURCE_ROLES_MAP");
        List<String> authorities = new ArrayList<>();
        for (Map.Entry<String, Object> entry : urlMap.entrySet()) {
            if (pathMatcher.match(entry.getKey(), restfulPath)) {
                authorities = Convert.toList(String.class, entry.getValue())
                        .stream().map(i -> i = "ROLE_" + i.replaceAll("\"", ""))
                        .collect(Collectors.toList());
            }
        }
        // 认证通过且角色匹配的用户可访问当前路径
        return mono
                .filter(Authentication::isAuthenticated)
                .flatMapIterable(Authentication::getAuthorities)
                .map(GrantedAuthority::getAuthority)
                .any(authorities::contains)
                .map(AuthorizationDecision::new)
                .defaultIfEmpty(new AuthorizationDecision(false));
    }
}
