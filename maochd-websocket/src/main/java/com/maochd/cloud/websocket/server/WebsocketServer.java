package com.maochd.cloud.websocket.server;

import com.alibaba.fastjson.JSONObject;
import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.common.core.domain.WsMessage;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import javax.websocket.*;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

@Slf4j
@Component
@ServerEndpoint("/websocket/{id}")
public class WebsocketServer {

    private static final AtomicInteger onlineCount = new AtomicInteger(0);

    private static final Map<String, Session> clients = new ConcurrentHashMap<>();

    @OnOpen
    public void onOpen(Session session, @PathParam("id") String userId) {
        // 在线数加1
        onlineCount.incrementAndGet();
        clients.put(userId, session);
        log.info("有新连接加入：{}，当前在线人数为：{}", userId, onlineCount.get());
    }

    @OnClose
    public void onClose(Session session, @PathParam("id") String userId) {
        // 在线数减1
        onlineCount.decrementAndGet();
        clients.remove(session.getId());
        log.info("有一连接关闭：{}，当前在线人数为：{}", userId, onlineCount.get());
    }

    @OnMessage
    public void onMessage(String message, Session session, @PathParam("id") String userId) {
        log.info("服务端收到客户端[{}]的消息:{}", userId, message);
        this.sendMessageToOne(WsMessage.builder()
                .from("服务端")
                .to(userId)
                .type("服务端接收消息响应")
                .message(R.ok(null, "success"))
                .build());
    }

    @OnError
    public void onError(Session session, Throwable error) {
        log.error("服务器发生错误：{}", error.getMessage());
    }

    /**
     * 单发消息
     *
     * @param wsMessage 消息实体
     */
    public void sendMessageToOne(WsMessage<?> wsMessage) {
        Session session = clients.get(wsMessage.getTo());
        if (session == null) {
            log.error("当前用户{}已掉线", wsMessage.getTo());
            return;
        }
        String message = (wsMessage.getMessage() instanceof String)
                ? (String) wsMessage.getMessage()
                : JSONObject.toJSONString(wsMessage.getMessage());
        session.getAsyncRemote().sendText(message);
        log.info("用户{}向用户{}发送{}消息，消息内容为：{}",
                wsMessage.getFrom(), wsMessage.getTo(), wsMessage.getType(), wsMessage.getMessage());
    }

    /**
     * 群发消息
     *
     * @param wsMessage 消息实体
     */
    public void sendMessageToAll(WsMessage<?> wsMessage) {
        for (Map.Entry<String, Session> entry : clients.entrySet()) {
            Session session = entry.getValue();
            String message = (wsMessage.getMessage() instanceof String)
                    ? (String) wsMessage.getMessage()
                    : JSONObject.toJSONString(wsMessage.getMessage());
            session.getAsyncRemote().sendText(message);
            log.info("用户{}群发消息，用户{}收到{}消息，消息内容为：{}",
                    wsMessage.getFrom(), wsMessage.getTo(), wsMessage.getType(), wsMessage.getMessage());
        }
    }
}
