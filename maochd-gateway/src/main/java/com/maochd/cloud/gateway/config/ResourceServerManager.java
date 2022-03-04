package com.maochd.cloud.gateway.config;

import cn.hutool.core.util.StrUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.maochd.cloud.common.core.constant.SecurityConstants;
import com.maochd.cloud.common.core.domain.PermRoleDto;
import com.maochd.cloud.common.redis.service.RedisService;
import com.maochd.cloud.gateway.properties.IgnoreWhiteProperties;
import com.nimbusds.jose.JWSObject;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
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
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import javax.annotation.Resource;
import java.util.List;
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
    private IgnoreWhiteProperties ignoreWhiteProperties;

    @SneakyThrows
    @Override
    public Mono<AuthorizationDecision> check(Mono<Authentication> mono, AuthorizationContext authorizationContext) {
        ServerWebExchange exchange = authorizationContext.getExchange();
        ServerHttpRequest request = exchange.getRequest();
        PathMatcher pathMatcher = new AntPathMatcher();
        // 预检请求放行
        if (request.getMethod() == HttpMethod.OPTIONS) {
            return Mono.just(new AuthorizationDecision(true));
        }
        // 白名单放行
        String path = request.getURI().getPath();
        for (String url : ignoreWhiteProperties.getWhites()) {
            if (pathMatcher.match(url, path)) {
                return Mono.just(new AuthorizationDecision(true));
            }
        }
        // 获取token
        HttpHeaders headers = request.getHeaders();
        String token = headers.getFirst(SecurityConstants.AUTHORIZATION_KEY);
        // 判断请求头中是否携带token
        if (StrUtil.isBlank(token)) {
            return Mono.just(new AuthorizationDecision(false));
        }
        // 判断token是否已经过期（用户退出登录后会删除缓存）
        token = StrUtil.replaceIgnoreCase(token, SecurityConstants.JWT_PREFIX, StrUtil.EMPTY);
        String redisToken = redisService.get(SecurityConstants.ACCESS_TOKEN + token);
        if (StrUtil.isBlank(redisToken)) {
            return Mono.just(new AuthorizationDecision(false));
        }
        // 解析载荷
        JSONObject payload = JSONObject.parseObject(StrUtil.toString(JWSObject.parse(token).getPayload()));
        // 把用户信息放入header
        request = exchange.getRequest().mutate()
                .header("userInfo", payload.getString("userInfo"))
                .build();
        exchange.mutate().request(request).build();
        // 获取角色权限映射数据
        List<PermRoleDto> rolePermMap = JSON.parseArray(JSON.toJSONString(payload
                .getJSONArray("rolePermMap")), PermRoleDto.class);
        // 拼接权限标识 -> 请求方式:路径
        String method = request.getMethodValue();
        String restfulPath = method + ":" + path;
        // 生成角色列表
        List<String> authorities = rolePermMap.stream().filter(f -> pathMatcher.match(f.getPath(), restfulPath))
                .map(m -> SecurityConstants.AUTHORITY_PREFIX + m.getRole().replaceAll("\"", StrUtil.EMPTY))
                .collect(Collectors.toList());
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
