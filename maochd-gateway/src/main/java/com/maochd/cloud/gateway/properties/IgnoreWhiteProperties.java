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
@ConfigurationProperties(prefix = "ignore")
@ApiModel(value = "白名单配置", description = "白名单配置")
public class IgnoreWhiteProperties {

    @ApiModelProperty(value = "白名单列表")
    private List<String> whites = new ArrayList<>();
}
