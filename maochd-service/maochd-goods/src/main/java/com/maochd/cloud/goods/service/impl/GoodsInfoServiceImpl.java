package com.maochd.cloud.goods.service.impl;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.util.StrUtil;
import com.alibaba.fastjson.JSONArray;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.maochd.cloud.common.core.exception.BaseException;
import com.maochd.cloud.common.redis.annotation.RedisLock;
import com.maochd.cloud.common.redis.service.RedisService;
import com.maochd.cloud.system.api.goods.domain.condition.GoodsQueryCondition;
import com.maochd.cloud.goods.constant.RedisConstant;
import com.maochd.cloud.system.api.goods.domain.entity.GoodsInfo;
import com.maochd.cloud.goods.mapper.GoodsInfoMapper;
import com.maochd.cloud.goods.service.GoodsInfoService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import io.seata.core.context.RootContext;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;


@Slf4j
@Service
public class GoodsInfoServiceImpl extends ServiceImpl<GoodsInfoMapper, GoodsInfo> implements GoodsInfoService {

    @Resource
    private RedisService redisService;

    @Override
    public List<GoodsInfo> list(GoodsQueryCondition cond) {
        List<GoodsInfo> goods = JSONArray.parseArray(redisService.get(RedisConstant.KEY_GOODS_LIST), GoodsInfo.class);
        if (CollUtil.isEmpty(goods)) {
            goods = this.list(Wrappers.<GoodsInfo>lambdaQuery()
                    .eq(StrUtil.isNotBlank(cond.getGoodsCode()), GoodsInfo::getGoodsCode, cond.getGoodsCode())
                    .like(StrUtil.isNotBlank(cond.getGoodsName()), GoodsInfo::getGoodsName, cond.getGoodsName()));
            redisService.set(RedisConstant.KEY_GOODS_LIST, goods);
        }
        return goods;
    }

    @Override
    public Page<GoodsInfo> page(GoodsQueryCondition cond) {
        return this.page(new Page<>(cond.current(), cond.size()), Wrappers.<GoodsInfo>lambdaQuery()
                .eq(StrUtil.isNotBlank(cond.getGoodsCode()), GoodsInfo::getGoodsCode, cond.getGoodsCode())
                .like(StrUtil.isNotBlank(cond.getGoodsName()), GoodsInfo::getGoodsName, cond.getGoodsName()));
    }

    @Override
    public boolean insert(GoodsInfo goodsInfo) {
        boolean result = this.save(goodsInfo);
        String goods = redisService.get(RedisConstant.KEY_GOODS_LIST);
        if (StrUtil.isNotBlank(goods)) {
            redisService.del(RedisConstant.KEY_GOODS_LIST);
        }
        return result;
    }

    @Override
    public boolean modify(GoodsInfo goodsInfo) {
        if (goodsInfo.getId() == null) {
            throw new BaseException("ID不能为空");
        }
        boolean result = this.updateById(goodsInfo);
        String goods = redisService.get(RedisConstant.KEY_GOODS_LIST);
        if (StrUtil.isNotBlank(goods)) {
            redisService.del(RedisConstant.KEY_GOODS_LIST);
        }
        return result;
    }

    @Override
    public boolean remove(Long id) {
        boolean result = this.removeById(id);
        String goods = redisService.get(RedisConstant.KEY_GOODS_LIST);
        if (StrUtil.isNotBlank(goods)) {
            redisService.del(RedisConstant.KEY_GOODS_LIST);
        }
        return result;
    }

    @Override
    @RedisLock(value = "id", asObject = false)
    @Transactional
    public boolean reduceInventory(Long id, Integer count) {
        GoodsInfo goodsInfo = this.getById(id);
        if (goodsInfo.getGoodsInventory() < count) {
            throw new BaseException("库存不足");
        }
        boolean result = this.update(Wrappers.<GoodsInfo>lambdaUpdate()
                .set(GoodsInfo::getGoodsInventory, goodsInfo.getGoodsInventory() - count));
        String goods = redisService.get(RedisConstant.KEY_GOODS_LIST);
        if (StrUtil.isNotBlank(goods)) {
            redisService.del(RedisConstant.KEY_GOODS_LIST);
        }
        return result;
    }
}
