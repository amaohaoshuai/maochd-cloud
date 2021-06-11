package com.maochd.cloud.api.system.order.api.service;

import com.maochd.cloud.api.system.order.api.domain.OrderInfo;
import com.maochd.cloud.api.system.order.api.fallback.RemoteOrderFallbackFactory;
import com.maochd.cloud.common.core.constant.ServiceNameConstant;
import com.maochd.cloud.common.core.domain.R;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@FeignClient(contextId = "remoteOrderService",
        value = ServiceNameConstant.ORDER_SERVER,
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
