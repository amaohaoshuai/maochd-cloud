package com.maochd.cloud.order.service;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.maochd.cloud.api.order.domain.condition.OrderQueryCondition;
import com.maochd.cloud.api.order.domain.entity.OrderInfo;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;


public interface OrderInfoService extends IService<OrderInfo> {

    /**
     * 根据条件查询订单
     *
     * @param cond 查询条件
     * @return list
     */
    List<OrderInfo> list(OrderQueryCondition cond);

    /**
     * 根据条件分页查询订单
     *
     * @param cond 查询条件
     * @return page
     */
    Page<OrderInfo> page(OrderQueryCondition cond);

    /**
     * 添加订单
     *
     * @param orderInfo 订单信息
     * @return boolean
     */
    boolean add(OrderInfo orderInfo);
}
