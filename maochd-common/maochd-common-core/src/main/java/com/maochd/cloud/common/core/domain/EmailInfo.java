package com.maochd.cloud.common.core.domain;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import java.io.File;
import java.io.Serializable;
import java.util.List;

@Data
@Builder
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@ApiModel(value = "邮箱队列公共对象", description = "用于微服务之间的邮箱推送")
public class EmailInfo implements Serializable {

    @ApiModelProperty(value = "邮箱发送目的地数组")
    private String[] to;

    @ApiModelProperty(value = "邮箱主题")
    private String subject;

    @ApiModelProperty(value = "邮箱内容")
    private String content;

    @ApiModelProperty(value = "附件集合")
    private List<File> attachment;
}
