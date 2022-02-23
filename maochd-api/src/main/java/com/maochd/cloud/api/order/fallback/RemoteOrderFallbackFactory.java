package com.maochd.cloud.api.order.fallback;


import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.maochd.cloud.common.core.constant.CommonConstant;
import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.api.order.domain.condition.OrderQueryCondition;
import com.maochd.cloud.api.order.domain.entity.OrderInfo;
import com.maochd.cloud.api.order.service.RemoteOrderService;
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
            public R<List<OrderInfo>> list(OrderQueryCondition cond) {
                return R.fail(CommonConstant.EXCEPTION);
            }

            @Override
            public R<Page<OrderInfo>> page(OrderQueryCondition cond) {
                return R.fail(CommonConstant.EXCEPTION);
            }

            @Override
            public R<OrderInfo> getById(Long id) {
                return R.fail(CommonConstant.EXCEPTION);
            }

            @Override
            public R<Boolean> add(OrderInfo orderInfo) {
                return R.fail(CommonConstant.EXCEPTION);
            }
        };
    }
}
