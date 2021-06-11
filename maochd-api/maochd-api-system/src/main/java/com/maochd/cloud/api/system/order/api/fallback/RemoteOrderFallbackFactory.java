package com.maochd.cloud.api.system.order.api.fallback;

import com.maochd.cloud.api.system.order.api.domain.OrderInfo;
import com.maochd.cloud.api.system.order.api.service.RemoteOrderService;
import com.maochd.cloud.common.core.constant.CommonConstant;
import com.maochd.cloud.common.core.domain.R;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cloud.openfeign.FallbackFactory;
import org.springframework.stereotype.Component;

import java.util.List;

@Slf4j
@Component
public class RemoteOrderFallbackFactory implements FallbackFactory<RemoteOrderService> {
    @Override
    public RemoteOrderService create(Throwable cause) {
        log.error("订单服务调用失败:{}", cause.getMessage());

        return new RemoteOrderService() {
            @Override
            public R<List<OrderInfo>> list() {
                return R.fail(CommonConstant.EXCEPTION);
            }
        };
    }
}