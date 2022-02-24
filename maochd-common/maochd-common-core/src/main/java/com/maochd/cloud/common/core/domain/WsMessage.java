package com.maochd.cloud.common.core.domain;

import lombok.Data;

/**
 * @author maochd
 */
@Data
public class WsMessage {
    private String fromId;
    private String toId;
    private String message;
}
