package com.maochd.cloud.websocket.controller;

import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.common.core.domain.WsMessage;
import com.maochd.cloud.websocket.server.WebsocketServer;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@RequestMapping("/message")
@Api(value = "消息Controller", tags = "消息Controller")
public class MessageController {

    @Resource
    private WebsocketServer websocketServer;

    @PostMapping("/send/one")
    @ApiOperation(value = "单发消息", notes = "单发消息")
    public R<?> sendMessageToOne(@RequestBody WsMessage<?> wsMessage) {
        websocketServer.sendMessageToOne(wsMessage);
        return R.ok();
    }

    @PostMapping("/send/all")
    @ApiOperation(value = "群发消息", notes = "群发消息")
    public R<?> sendMessageToAll(@RequestBody WsMessage<?> wsMessage) {
        websocketServer.sendMessageToAll(wsMessage);
        return R.ok();
    }
}
