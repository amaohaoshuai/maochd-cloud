package com.maochd.cloud.order.service;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.maochd.cloud.system.api.order.domain.condition.OrderQueryCondition;
import com.maochd.cloud.system.api.order.domain.entity.OrderInfo;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;


public interface OrderInfoService extends IService<OrderInfo> {

    List<OrderInfo> list(OrderQueryCondition cond);

    Page<OrderInfo> page(OrderQueryCondition cond);

    boolean add(OrderInfo orderInfo);
}
