package com.maochd.cloud.auth.config;

import cn.hutool.core.collection.CollectionUtil;
import cn.hutool.http.HttpStatus;
import cn.hutool.json.JSONUtil;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.maochd.cloud.auth.entity.SysUserDetails;
import com.maochd.cloud.auth.entity.User;
import com.maochd.cloud.auth.properties.ClientProperties;
import com.maochd.cloud.auth.properties.KeyPairProperties;
import com.maochd.cloud.auth.service.UserService;
import com.maochd.cloud.common.core.constant.SecurityConstants;
import com.maochd.cloud.common.core.domain.BizResultCode;
import com.maochd.cloud.common.core.domain.R;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.common.DefaultOAuth2AccessToken;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.TokenEnhancer;
import org.springframework.security.oauth2.provider.token.TokenEnhancerChain;
import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;
import org.springframework.security.oauth2.provider.token.store.KeyStoreKeyFactory;
import org.springframework.security.web.AuthenticationEntryPoint;

import java.security.KeyPair;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * ??????????????????
 */
@Configuration
@EnableAuthorizationServer
@RequiredArgsConstructor
public class AuthorizationServerConfig extends AuthorizationServerConfigurerAdapter {

    private final AuthenticationManager authenticationManager;

    private final UserDetailsService userDetailsService;

    private final PasswordEncoder passwordEncoder;

    private final ClientProperties clientProperties;

    private final KeyPairProperties keyPairProperties;

    private final UserService userService;

    @Override
    public void configure(AuthorizationServerSecurityConfigurer oauthServer) {
        // ??????????????????
        oauthServer.allowFormAuthenticationForClients();
    }

    /**
     * ?????????????????????
     */
    @Override
    @SneakyThrows
    public void configure(ClientDetailsServiceConfigurer clients) {
        clients.inMemory()
                .withClient(clientProperties.getClientId())
                .secret(passwordEncoder.encode(clientProperties.getSecret()))
                .scopes(clientProperties.getScopes())
                .authorizedGrantTypes(clientProperties.getAuthorizedGrantTypesArray())
                .accessTokenValiditySeconds(SecurityConstants.TOKEN_EXPIRE_TIME)
                .refreshTokenValiditySeconds(SecurityConstants.TOKEN_REFRESH_TIME);
    }

    /**
     * ???????????????authorization??????????????????token?????????????????????????????????(token services)
     */
    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) {
        // Token??????
        TokenEnhancerChain tokenEnhancerChain = new TokenEnhancerChain();
        List<TokenEnhancer> tokenEnhancers = new ArrayList<>();
        tokenEnhancers.add(tokenEnhancer());
        tokenEnhancers.add(jwtAccessTokenConverter());
        tokenEnhancerChain.setTokenEnhancers(tokenEnhancers);
        endpoints.authenticationManager(authenticationManager)
                .userDetailsService(userDetailsService)
                .accessTokenConverter(jwtAccessTokenConverter())
                .tokenEnhancer(tokenEnhancerChain);
    }

    /**
     * ??????????????????????????????token??????
     */
    @Bean
    public JwtAccessTokenConverter jwtAccessTokenConverter() {
        JwtAccessTokenConverter converter = new JwtAccessTokenConverter();
        converter.setKeyPair(keyPair());
        return converter;
    }

    /**
     * ???????????????????????????(??????+??????)
     */
    @Bean
    public KeyPair keyPair() {
        KeyStoreKeyFactory factory = new KeyStoreKeyFactory(new ClassPathResource(
                keyPairProperties.getFilename()), keyPairProperties.getValue().toCharArray());
        return factory.getKeyPair(keyPairProperties.getType(), keyPairProperties.getValue().toCharArray());
    }

    /**
     * JWT????????????
     */
    @Bean
    public TokenEnhancer tokenEnhancer() {
        return (accessToken, authentication) -> {
            Map<String, Object> additionalInfo = CollectionUtil.newHashMap();
            Object principal = authentication.getUserAuthentication().getPrincipal();
            if (principal instanceof SysUserDetails) {
                SysUserDetails sysUserDetails = (SysUserDetails) principal;
                additionalInfo.put(SecurityConstants.USER_INFO, userService.getOne(Wrappers.<User>lambdaQuery()
                        .eq(User::getUsername, sysUserDetails.getUsername())));
                additionalInfo.put(SecurityConstants.ROLE_PERM_MAP, userService.getUserPerm(sysUserDetails.getUsername()));
            }
            ((DefaultOAuth2AccessToken) accessToken).setAdditionalInformation(additionalInfo);
            return accessToken;
        };
    }

    /**
     * ?????????????????????????????????
     */
    @Bean
    public AuthenticationEntryPoint authenticationEntryPoint() {
        return (request, response, e) -> {
            response.setStatus(HttpStatus.HTTP_OK);
            response.setHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE);
            response.setHeader("Access-Control-Allow-Origin", "*");
            response.setHeader("Cache-Control", "no-cache");
            response.getWriter().print(JSONUtil.toJsonStr(
                    R.fail(HttpStatus.HTTP_UNAUTHORIZED, BizResultCode.CLIENT_AUTHENTICATION_FAILED)));
            response.getWriter().flush();
        };
    }
}
