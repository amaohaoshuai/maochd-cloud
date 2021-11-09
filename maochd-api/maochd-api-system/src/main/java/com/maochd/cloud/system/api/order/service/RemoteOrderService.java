package com.maochd.cloud.system.api.order.service;

import com.maochd.cloud.system.api.order.domain.GoodsOrder;
import com.maochd.cloud.system.api.order.domain.cond.OrderCondition;
import com.maochd.cloud.system.api.order.fallback.RemoteOrderFallbackFactory;
import com.maochd.cloud.common.core.constant.ServiceNameConstant;
import com.maochd.cloud.common.core.domain.R;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

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
    @PostMapping("/goodsOrder/list")
    R<List<GoodsOrder>> list(@RequestBody OrderCondition condition);
}
