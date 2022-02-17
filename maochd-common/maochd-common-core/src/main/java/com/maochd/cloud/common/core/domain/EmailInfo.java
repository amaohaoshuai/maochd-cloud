package com.maochd.cloud.common.core.domain;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

@Data
@Builder
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@ApiModel(value = "邮箱队列公共对象", description = "用于微服务之间的邮箱推送")
public class EmailInfo {

    @ApiModelProperty("邮箱发送目的地")
    private String targetEmail;

    @ApiModelProperty("邮箱主题")
    private String subject;

    @ApiModelProperty("邮箱内容")
    private String content;
}
