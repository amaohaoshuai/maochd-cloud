package com.maochd.cloud.goods.service;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.maochd.cloud.api.goods.domain.condition.GoodsQueryCondition;
import com.maochd.cloud.api.goods.domain.entity.GoodsInfo;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;


public interface GoodsInfoService extends IService<GoodsInfo> {

    /**
     * 根据条件查询商品信息列表
     *
     * @param cond 查询条件
     * @return list
     */
    List<GoodsInfo> list(GoodsQueryCondition cond);

    /**
     * 根据条件分页查询商品信息列表
     *
     * @param cond 查询条件
     * @return page
     */
    Page<GoodsInfo> page(GoodsQueryCondition cond);

    /**
     * 新增商品信息
     *
     * @param goodsInfo 商品信息
     * @return boolean
     */
    boolean insert(GoodsInfo goodsInfo);

    /**
     * 修改商品信息
     *
     * @param goodsInfo 商品信息
     * @return boolean
     */
    boolean modify(GoodsInfo goodsInfo);

    /**
     * 删除商品信息
     *
     * @param id 主键ID
     * @return boolean
     */
    boolean remove(Long id);

    /**
     * 减少库存
     *
     * @param id    主键ID
     * @param count 数量
     * @return boolean
     */
    boolean reduceInventory(Long id, Integer count);
}
