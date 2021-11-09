package com.maochd.cloud.common.core.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class BaseException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    /**
     * 错误消息
     */
    private  String message;

    @Override
    public String getMessage() {
        return message;
    }
}
