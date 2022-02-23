package com.maochd.cloud.common.core.exception;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
@ApiModel(value = "Redis异常对象", description = "Redis异常")
public class RedisBizException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    @ApiModelProperty("错误信息")
    private String message;

    @Override
    public String getMessage() {
        return message;
    }
}