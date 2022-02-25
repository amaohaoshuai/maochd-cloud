package com.maochd.cloud.common.core.domain;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ApiModel(value = "Websocket消息实体", description = "Websocket消息实体")
public class WsMessage<T> implements Serializable {

    @ApiModelProperty(value = "消息类型")
    private String type;

    @ApiModelProperty(value = "消息发送人")
    private String from;

    @ApiModelProperty(value = "消息接收人")
    private String to;

    @ApiModelProperty(value = "消息内容实体")
    private T message;
}
