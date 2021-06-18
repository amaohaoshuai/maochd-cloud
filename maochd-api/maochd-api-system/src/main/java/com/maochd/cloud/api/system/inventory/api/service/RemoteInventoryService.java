package com.maochd.cloud.api.system.inventory.api.service;

import com.maochd.cloud.api.system.inventory.api.domain.InventoryStockVo;
import com.maochd.cloud.api.system.inventory.api.fallback.RemoteInventoryFallbackFactory;
import com.maochd.cloud.common.core.constant.ServiceNameConstant;
import com.maochd.cloud.common.core.domain.R;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(contextId = "remoteInventoryService",
        value = ServiceNameConstant.INVENTORY_SERVER,
        fallbackFactory = RemoteInventoryFallbackFactory.class)
public interface RemoteInventoryService {

    /**
     * 删减商品库存
     *
     * @param inventoryStockVo 库存信息
     * @return true or false
     */
    @PostMapping("/goodsInventory/subtractInventory")
    R<Boolean> subtractInventory(@RequestBody InventoryStockVo inventoryStockVo);

}
