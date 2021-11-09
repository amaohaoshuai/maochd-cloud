package com.maochd.cloud.system.api.inventory.fallback;


import com.maochd.cloud.system.api.inventory.domain.InventoryStockVo;
import com.maochd.cloud.system.api.inventory.service.RemoteInventoryService;
import com.maochd.cloud.common.core.constant.CommonConstant;
import com.maochd.cloud.common.core.domain.R;

import feign.hystrix.FallbackFactory;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class RemoteInventoryFallbackFactory implements FallbackFactory<RemoteInventoryService> {
    @Override
    public RemoteInventoryService create(Throwable cause) {
        log.error("订单服务调用失败:{}", cause.getMessage());

        return new RemoteInventoryService() {
            @Override
            public R<Boolean> subtractInventory(InventoryStockVo inventoryStockVo) {
                return R.fail(CommonConstant.EXCEPTION);
            }
        };
    }
}
