package com.maochd.cloud.inventory.service;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.inventory.condition.InventoryQueryCondition;
import com.maochd.cloud.system.api.inventory.domain.InventoryStockVo;
import com.maochd.cloud.inventory.entity.GoodsInventory;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 * 库存 服务类
 * </p>
 *
 * @author maochd
 * @since 2021-06-16
 */
public interface GoodsInventoryService extends IService<GoodsInventory> {

    List<GoodsInventory> list(InventoryQueryCondition cond);

    Page<GoodsInventory> page(InventoryQueryCondition cond);

    R<GoodsInventory> getByGoodsId(String goodsId);

    R<Boolean> subtractInventory(InventoryStockVo inventoryStockVo);
}
