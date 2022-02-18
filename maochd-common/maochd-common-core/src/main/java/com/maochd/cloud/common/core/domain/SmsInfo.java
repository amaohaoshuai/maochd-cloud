package com.maochd.cloud.common.core.domain;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import java.io.Serializable;

@Data
@Builder
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@ApiModel(value = "短信队列公共对象", description = "用于微服务之间的短信推送")
public class SmsInfo implements Serializable {

    @ApiModelProperty("短信模板号")
    private String templateId;

    @ApiModelProperty("短信内容")
    private String content;

    @ApiModelProperty("手机号")
    private String phone;
}