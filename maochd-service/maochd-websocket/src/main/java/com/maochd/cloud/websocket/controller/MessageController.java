package com.maochd.cloud.websocket.controller;

import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.common.core.domain.WsMessage;
import com.maochd.cloud.websocket.server.WebsocketServer;
import io.swagger.annotations.Api;
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

    @PostMapping("/send")
    public R<?> sendMessage(@RequestBody WsMessage wsMessage) {
        websocketServer.sendMessage(wsMessage.getMessage());
        return R.ok();
    }
}
