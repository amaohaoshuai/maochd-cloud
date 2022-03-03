package com.maochd.cloud.auth.properties;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.context.annotation.Configuration;

@Data
@Configuration
@RefreshScope
@ConfigurationProperties(prefix = "key-pair")
@ApiModel(value = "秘钥对信息", description = "秘钥对信息")
public class KeyPairProperties {

    @ApiModelProperty(value = "文件类型")
    private String type;

    @ApiModelProperty(value = "文件名")
    private String filename;

    @ApiModelProperty(value = "秘钥对值")
    private String value;

}
