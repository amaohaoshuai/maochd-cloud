package com.maochd.cloud.maochd.api.system.order.api;

import com.maochd.cloud.maochd.api.system.order.api.domain.OrderInfo;
import com.maochd.cloud.maochd.common.domain.R;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@FeignClient(contextId = "remoteOrderService",
        value = "maochd-order",
        fallbackFactory = RemoteOrderFallbackFactory.class)
public interface RemoteOrderService {

    /**
     * 订单列表
     *
     * @return 订单列表
     */
    @GetMapping("/order/list")
    R<List<OrderInfo>> list();
}
