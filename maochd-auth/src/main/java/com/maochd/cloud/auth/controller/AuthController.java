package com.maochd.cloud.auth.controller;

import com.maochd.cloud.auth.entity.Oauth2TokenDto;
import com.maochd.cloud.common.core.domain.R;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.provider.endpoint.TokenEndpoint;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.security.Principal;
import java.util.Map;

@RestController
@RequestMapping("/oauth")
@Api(value = "原生token接口包装Controller", tags = "原生token接口包装Controller")
public class AuthController {

    @Resource
    private TokenEndpoint tokenEndpoint;

    @PostMapping(value = "/token")
    @ApiOperation(value = "获取token", notes = "获取token（包装原生token接口）")
    public R<Oauth2TokenDto> postAccessToken(Principal principal, @RequestParam Map<String, String> parameters)
            throws HttpRequestMethodNotSupportedException {
        OAuth2AccessToken oAuth2AccessToken = tokenEndpoint.postAccessToken(principal, parameters).getBody();
        assert oAuth2AccessToken != null;
        return R.ok(Oauth2TokenDto.builder()
                .token(oAuth2AccessToken.getValue())
                .refreshToken(oAuth2AccessToken.getRefreshToken().getValue())
                .expiresIn(oAuth2AccessToken.getExpiresIn())
                .tokenHead("Bearer").build());
    }
}
