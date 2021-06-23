package com.maochd.cloud.order.service;

import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.order.entity.GoodsOrder;
import com.baomidou.mybatisplus.extension.service.IService;
import com.maochd.cloud.order.entity.TestVo;

import java.util.List;

/**
 * <p>
 * 订单 服务类
 * </p>
 *
 * @author maochd
 * @since 2021-06-16
 */
public interface GoodsOrderService extends IService<GoodsOrder> {

    R<List<GoodsOrder>> listByAccountId(String accountId);

    R<Boolean> generateOrder(TestVo testVo);
}
