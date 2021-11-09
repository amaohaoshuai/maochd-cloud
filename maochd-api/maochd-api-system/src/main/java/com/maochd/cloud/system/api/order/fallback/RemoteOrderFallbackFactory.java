package com.maochd.cloud.system.api.order.fallback;


import com.maochd.cloud.system.api.order.domain.GoodsOrder;
import com.maochd.cloud.system.api.order.domain.cond.OrderCondition;
import com.maochd.cloud.system.api.order.service.RemoteOrderService;
import com.maochd.cloud.common.core.constant.CommonConstant;
import com.maochd.cloud.common.core.domain.R;
import feign.hystrix.FallbackFactory;
import lombok.extern.slf4j.Slf4j;
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
            public R<List<GoodsOrder>> list(OrderCondition condition) {
                return R.fail(CommonConstant.EXCEPTION);
            }
        };
    }
}
