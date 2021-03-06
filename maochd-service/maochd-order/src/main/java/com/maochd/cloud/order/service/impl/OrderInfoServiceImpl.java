package com.maochd.cloud.order.service.impl;

import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.maochd.cloud.api.account.service.RemoteAccountService;
import com.maochd.cloud.api.goods.service.RemoteGoodsService;
import com.maochd.cloud.api.order.domain.condition.OrderQueryCondition;
import com.maochd.cloud.api.order.domain.entity.OrderInfo;
import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.common.core.exception.BaseException;
import com.maochd.cloud.common.redis.annotation.RedisLock;
import com.maochd.cloud.common.redis.annotation.RedisRemove;
import com.maochd.cloud.common.redis.annotation.RedisSave;
import com.maochd.cloud.order.constant.RedisConstant;
import com.maochd.cloud.order.mapper.OrderInfoMapper;
import com.maochd.cloud.order.service.OrderInfoService;
import io.seata.spring.annotation.GlobalTransactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.UUID;


@Slf4j
@Service
public class OrderInfoServiceImpl extends ServiceImpl<OrderInfoMapper, OrderInfo> implements OrderInfoService {

    @Resource
    private RemoteGoodsService remoteGoodsService;

    @Resource
    private RemoteAccountService remoteAccountService;

    @Override
    @RedisSave(key = RedisConstant.KEY_ORDER_LIST, clazz = OrderInfo.class)
    public List<OrderInfo> list(OrderQueryCondition cond) {
        return this.list(Wrappers.<OrderInfo>lambdaQuery()
                .eq(StrUtil.isNotBlank(cond.getOrderId()), OrderInfo::getOrderId, cond.getOrderId())
                .eq(StrUtil.isNotBlank(cond.getAccountCode()), OrderInfo::getAccountCode, cond.getAccountCode())
                .eq(cond.getUserId() != null, OrderInfo::getUserId, cond.getUserId()));
    }

    @Override
    public Page<OrderInfo> page(OrderQueryCondition cond) {
        return this.page(cond.orderWithPage(), Wrappers.<OrderInfo>lambdaQuery()
                .eq(StrUtil.isNotBlank(cond.getOrderId()), OrderInfo::getOrderId, cond.getOrderId())
                .eq(StrUtil.isNotBlank(cond.getAccountCode()), OrderInfo::getAccountCode, cond.getAccountCode())
                .eq(cond.getUserId() != null, OrderInfo::getUserId, cond.getUserId()));
    }

    @Override
    @RedisLock
    @RedisRemove(key = RedisConstant.KEY_ORDER_LIST)
    @GlobalTransactional
    public boolean add(OrderInfo orderInfo) {
        // ????????????
        orderInfo.setOrderId(UUID.randomUUID().toString());
        boolean result = this.save(orderInfo);
        // ????????????
        R<Boolean> reduceResp = remoteGoodsService.reduceInventory(orderInfo.getGoodsId(), orderInfo.getNum());
        if (R.isNotOk(reduceResp)) {
            log.error("????????????????????????????????????{}??????????????????{}", reduceResp.getMsg(), orderInfo);
            throw new BaseException("??????????????????");
        }
        // ????????????
        R<Boolean> deductResp = remoteAccountService.deduct(orderInfo.getAccountCode(), orderInfo.getTotalAmount());
        if (R.isNotOk(deductResp)) {
            log.error("????????????????????????????????????{}??????????????????{}", deductResp.getMsg(), orderInfo);
            throw new BaseException("??????????????????");
        }
        return result;
    }
}
