package com.maochd.cloud.inventory.service;

import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.system.api.inventory.domain.InventoryStockVo;
import com.maochd.cloud.inventory.entity.GoodsInventory;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 * 库存 服务类
 * </p>
 *
 * @author maochd
 * @since 2021-06-16
 */
public interface GoodsInventoryService extends IService<GoodsInventory> {

    R<GoodsInventory> getByGoodsId(String goodsId);

    R<Boolean> subtractInventory(InventoryStockVo inventoryStockVo);
}
