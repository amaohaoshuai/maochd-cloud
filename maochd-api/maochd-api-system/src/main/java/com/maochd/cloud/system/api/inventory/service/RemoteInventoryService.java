package com.maochd.cloud.system.api.inventory.service;

import com.maochd.cloud.system.api.inventory.domain.InventoryStockVo;
import com.maochd.cloud.system.api.inventory.fallback.RemoteInventoryFallbackFactory;
import com.maochd.cloud.common.core.constant.ServiceNameConstant;
import com.maochd.cloud.common.core.domain.R;
import io.swagger.annotations.ApiOperation;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(contextId = "remoteInventoryService",
        value = ServiceNameConstant.INVENTORY_SERVER,
        fallbackFactory = RemoteInventoryFallbackFactory.class)
public interface RemoteInventoryService {

    @PostMapping("/goodsInventory/subtractInventory")
    @ApiOperation(value = "删减商品库存", notes = "删减商品库存")
    R<Boolean> subtractInventory(@RequestBody InventoryStockVo inventoryStockVo);

}
