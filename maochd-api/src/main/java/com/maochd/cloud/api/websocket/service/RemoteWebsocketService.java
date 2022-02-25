package com.maochd.cloud.api.websocket.service;

import com.maochd.cloud.api.websocket.fallback.RemoteWebsocketFallbackFactory;
import com.maochd.cloud.common.core.constant.ServiceContextConstant;
import com.maochd.cloud.common.core.constant.ServiceNameConstant;
import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.common.core.domain.WsMessage;
import io.swagger.annotations.ApiOperation;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(contextId = ServiceContextConstant.WEBSOCKET_CONTEXT_ID,
        value = ServiceNameConstant.WEBSOCKET_SERVER,
        fallbackFactory = RemoteWebsocketFallbackFactory.class)
public interface RemoteWebsocketService {

    @PostMapping("/message/send/one")
    @ApiOperation(value = "单发消息", notes = "单发消息")
    R<?> sendMessageToOne(@RequestBody WsMessage<?> wsMessage);

    @PostMapping("/message/send/all")
    @ApiOperation(value = "群发消息", notes = "群发消息")
    R<?> sendMessageToAll(@RequestBody WsMessage<?> wsMessage);

}
