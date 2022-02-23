package com.maochd.cloud.order.service.impl;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.util.StrUtil;
import com.alibaba.fastjson.JSONArray;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.common.core.exception.BaseException;
import com.maochd.cloud.common.redis.annotation.RedisLock;
import com.maochd.cloud.common.redis.service.RedisService;
import com.maochd.cloud.order.constant.RedisConstant;
import com.maochd.cloud.api.account.service.RemoteAccountService;
import com.maochd.cloud.api.goods.service.RemoteGoodsService;
import com.maochd.cloud.api.order.domain.condition.OrderQueryCondition;
import com.maochd.cloud.api.order.domain.entity.OrderInfo;
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
    private RedisService redisService;

    @Resource
    private RemoteGoodsService remoteGoodsService;

    @Resource
    private RemoteAccountService remoteAccountService;

    @Override
    public List<OrderInfo> list(OrderQueryCondition cond) {
        List<OrderInfo> orders = JSONArray.parseArray(redisService.get(RedisConstant.KEY_ORDER_LIST), OrderInfo.class);
        if (CollUtil.isEmpty(orders)) {
            orders = this.list(Wrappers.<OrderInfo>lambdaQuery()
                    .eq(StrUtil.isNotBlank(cond.getOrderId()), OrderInfo::getOrderId, cond.getOrderId())
                    .eq(StrUtil.isNotBlank(cond.getAccountCode()), OrderInfo::getAccountCode, cond.getAccountCode())
                    .eq(cond.getUserId() != null, OrderInfo::getUserId, cond.getUserId()));
            redisService.set(RedisConstant.KEY_ORDER_LIST, orders);
        }
        return orders;
    }

    @Override
    public Page<OrderInfo> page(OrderQueryCondition cond) {
        return this.page(new Page<>(cond.current(), cond.size()), Wrappers.<OrderInfo>lambdaQuery()
                .eq(StrUtil.isNotBlank(cond.getOrderId()), OrderInfo::getOrderId, cond.getOrderId())
                .eq(StrUtil.isNotBlank(cond.getAccountCode()), OrderInfo::getAccountCode, cond.getAccountCode())
                .eq(cond.getUserId() != null, OrderInfo::getUserId, cond.getUserId()));
    }

    @Override
    @RedisLock
    @GlobalTransactional
    public boolean add(OrderInfo orderInfo) {
        // 生成订单
        orderInfo.setOrderId(UUID.randomUUID().toString());
        boolean result = this.save(orderInfo);
        String goods = redisService.get(RedisConstant.KEY_ORDER_LIST);
        if (StrUtil.isNotBlank(goods)) {
            redisService.del(RedisConstant.KEY_ORDER_LIST);
        }
        // 减少库存
        R<Boolean> reduceResp = remoteGoodsService.reduceInventory(orderInfo.getGoodsId(), orderInfo.getNum());
        if(R.isNotOk(reduceResp)) {
            log.error("减少库存失败，失败原因：{}，数据详情：{}", reduceResp.getMsg(), orderInfo);
            throw new BaseException("扣除库存失败");
        }
        // 账户扣费
        R<Boolean> deductResp = remoteAccountService.deduct(orderInfo.getAccountCode(), orderInfo.getTotalAmount());
        if(R.isNotOk(deductResp)) {
            log.error("账户扣费失败，失败原因：{}，数据详情：{}", deductResp.getMsg(), orderInfo);
            throw new BaseException("账户扣费失败");
        }
        return result;
    }
}
