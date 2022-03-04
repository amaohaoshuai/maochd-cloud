package com.maochd.cloud.gateway.properties;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Data
@Configuration
@RefreshScope
@ConfigurationProperties(prefix = "jwt")
@ApiModel(value = "JWT配置")
public class JwtProperties {

    @ApiModelProperty(value = "加密方式")
    private String keyFactory;

    @ApiModelProperty(value = "公钥")
    private String publicKey;
}
