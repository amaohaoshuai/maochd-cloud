package com.maochd.cloud.auth.properties;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Data
@Configuration
@RefreshScope
@ConfigurationProperties(prefix = "client")
@ApiModel(value = "客户端配置信息", description = "oauth客户端配置信息")
public class ClientProperties {

    @ApiModelProperty(value = "客户端标识")
    private String clientId;

    @ApiModelProperty(value = "秘钥")
    private String secret;

    @ApiModelProperty(value = "作用域")
    private String scopes;

    @ApiModelProperty(value = "授权类型")
    private List<String> authorizedGrantTypes;

    public String[] getAuthorizedGrantTypesArray() {
        String[] array = new String[this.authorizedGrantTypes.size()];
        return this.authorizedGrantTypes.toArray(array);
    }
}
