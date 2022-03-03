package com.maochd.cloud.auth.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

@Data
@EqualsAndHashCode(callSuper = false)
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(value = "token封装DTO", description = "对原生oauth token的封装，符合驼峰命名")
public class Oauth2TokenDto {

    @ApiModelProperty(value = "访问令牌")
    private String token;

    @ApiModelProperty(value = "刷新令牌")
    private String refreshToken;

    @ApiModelProperty(value = "访问令牌头前缀")
    private String tokenHead;

    @ApiModelProperty(value = "有效时间（秒）")
    private int expiresIn;

}