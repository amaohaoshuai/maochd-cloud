package com.maochd.cloud.inventory.service.impl;

import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.system.api.inventory.domain.InventoryStockVo;
import com.maochd.cloud.inventory.entity.GoodsInventory;
import com.maochd.cloud.inventory.mapper.GoodsInventoryMapper;
import com.maochd.cloud.inventory.service.GoodsInventoryService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import io.seata.core.context.RootContext;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * <p>
 * 库存 服务实现类
 * </p>
 *
 * @author maochd
 * @since 2021-06-16
 */
@Service
public class GoodsInventoryServiceImpl extends ServiceImpl<GoodsInventoryMapper, GoodsInventory> implements GoodsInventoryService {

    @Override
    public R<GoodsInventory> getByGoodsId(String goodsId) {
        return R.ok(this.getOne(Wrappers.<GoodsInventory>lambdaQuery().eq(GoodsInventory::getGoodsId, goodsId)));
    }

    @Override
    @Transactional(propagation= Propagation.REQUIRES_NEW)
    public R<Boolean> subtractInventory(InventoryStockVo inventoryStockVo) {
        System.out.println("XID:" + RootContext.getXID());
        // 查询当前库存数量
        GoodsInventory goodsInventory = this.getOne(Wrappers.<GoodsInventory>lambdaQuery()
                .eq(GoodsInventory::getGoodsId, inventoryStockVo.getGoodsId()));
        if (goodsInventory.getGoodsInventory() < inventoryStockVo.getChangeNum()) {
            return R.fail("商品库存不足");
        }
        int inventory = goodsInventory.getGoodsInventory() - inventoryStockVo.getChangeNum();
        if (!this.update(Wrappers.<GoodsInventory>lambdaUpdate()
                .set(GoodsInventory::getGoodsInventory, inventory)
                .eq(GoodsInventory::getGoodsId, inventoryStockVo.getGoodsId()))) {
            return R.fail("删减库存失败");
        }
        return R.ok();
    }
}
