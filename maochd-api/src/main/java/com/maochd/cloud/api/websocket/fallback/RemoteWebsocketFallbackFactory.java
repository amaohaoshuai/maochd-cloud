package com.maochd.cloud.api.websocket.fallback;


import com.maochd.cloud.api.websocket.service.RemoteWebsocketService;
import com.maochd.cloud.common.core.constant.CommonConstant;
import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.common.core.domain.WsMessage;
import feign.hystrix.FallbackFactory;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class RemoteWebsocketFallbackFactory implements FallbackFactory<RemoteWebsocketService> {
    @Override
    public RemoteWebsocketService create(Throwable cause) {
        log.error("Websocket服务调用失败:{}", cause.getMessage());

        return new RemoteWebsocketService() {
            @Override
            public R<?> sendMessageToOne(WsMessage<?> wsMessage) {
                return R.fail(CommonConstant.EXCEPTION);
            }

            @Override
            public R<?> sendMessageToAll(WsMessage<?> wsMessage) {
                return R.fail(CommonConstant.EXCEPTION);
            }
        };
    }
}
