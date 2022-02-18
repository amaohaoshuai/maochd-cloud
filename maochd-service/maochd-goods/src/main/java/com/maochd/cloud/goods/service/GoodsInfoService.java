package com.maochd.cloud.goods.service;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.maochd.cloud.system.api.goods.domain.condition.GoodsQueryCondition;
import com.maochd.cloud.system.api.goods.domain.entity.GoodsInfo;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;


public interface GoodsInfoService extends IService<GoodsInfo> {

    List<GoodsInfo> list(GoodsQueryCondition cond);

    Page<GoodsInfo> page(GoodsQueryCondition cond);

    boolean insert(GoodsInfo goodsInfo);

    boolean modify(GoodsInfo goodsInfo);

    boolean remove(Long id);

    boolean reduceInventory(Long id, Integer count);
}
