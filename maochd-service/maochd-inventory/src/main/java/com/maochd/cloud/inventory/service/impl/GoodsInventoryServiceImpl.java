package com.maochd.cloud.inventory.service.impl;

import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.inventory.condition.InventoryQueryCondition;
import com.maochd.cloud.inventory.entity.GoodsInventory;
import com.maochd.cloud.inventory.mapper.GoodsInventoryMapper;
import com.maochd.cloud.inventory.service.GoodsInventoryService;
import com.maochd.cloud.system.api.inventory.domain.InventoryStockVo;
import io.seata.core.context.RootContext;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
public class GoodsInventoryServiceImpl extends ServiceImpl<GoodsInventoryMapper, GoodsInventory> implements GoodsInventoryService {

    @Override
    public List<GoodsInventory> list(InventoryQueryCondition cond) {
        return this.list(Wrappers.<GoodsInventory>lambdaQuery()
                .eq(StrUtil.isNotBlank(cond.getGoodsName()), GoodsInventory::getGoodsName, cond.getGoodsName()));
    }

    @Override
    public Page<GoodsInventory> page(InventoryQueryCondition cond) {
        return this.page(new Page<>(cond.current(), cond.size()), Wrappers.<GoodsInventory>lambdaQuery()
                .eq(StrUtil.isNotBlank(cond.getGoodsName()), GoodsInventory::getGoodsName, cond.getGoodsName()));
    }

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
