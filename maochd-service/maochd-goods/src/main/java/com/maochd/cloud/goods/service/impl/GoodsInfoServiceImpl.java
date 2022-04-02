package com.maochd.cloud.goods.service.impl;

import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.maochd.cloud.api.goods.domain.condition.GoodsQueryCondition;
import com.maochd.cloud.api.goods.domain.entity.GoodsInfo;
import com.maochd.cloud.common.core.exception.BaseException;
import com.maochd.cloud.common.redis.annotation.RedisLock;
import com.maochd.cloud.common.redis.annotation.RedisRemove;
import com.maochd.cloud.common.redis.annotation.RedisSave;
import com.maochd.cloud.goods.constant.RedisConstant;
import com.maochd.cloud.goods.mapper.GoodsInfoMapper;
import com.maochd.cloud.goods.service.GoodsInfoService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
public class GoodsInfoServiceImpl extends ServiceImpl<GoodsInfoMapper, GoodsInfo> implements GoodsInfoService {

    @Override
    @RedisSave(key = RedisConstant.KEY_GOODS_LIST, clazz = GoodsInfo.class)
    public List<GoodsInfo> list(GoodsQueryCondition cond) {
        return this.list(Wrappers.<GoodsInfo>lambdaQuery()
                .eq(StrUtil.isNotBlank(cond.getGoodsCode()), GoodsInfo::getGoodsCode, cond.getGoodsCode())
                .like(StrUtil.isNotBlank(cond.getGoodsName()), GoodsInfo::getGoodsName, cond.getGoodsName()));
    }

    @Override
    public Page<GoodsInfo> page(GoodsQueryCondition cond) {
        return this.page(new Page<>(cond.current(), cond.size()), Wrappers.<GoodsInfo>lambdaQuery()
                .eq(StrUtil.isNotBlank(cond.getGoodsCode()), GoodsInfo::getGoodsCode, cond.getGoodsCode())
                .like(StrUtil.isNotBlank(cond.getGoodsName()), GoodsInfo::getGoodsName, cond.getGoodsName()));
    }

    @Override
    @RedisLock
    @RedisRemove(key = RedisConstant.KEY_GOODS_LIST)
    public boolean insert(GoodsInfo goodsInfo) {
        return this.save(goodsInfo);
    }

    @Override
    @RedisLock
    @RedisRemove(key = RedisConstant.KEY_GOODS_LIST)
    public boolean modify(GoodsInfo goodsInfo) {
        if (goodsInfo.getId() == null) {
            throw new BaseException("ID不能为空");
        }
        return this.updateById(goodsInfo);
    }

    @Override
    @RedisLock
    @RedisRemove(key = RedisConstant.KEY_GOODS_LIST)
    public boolean remove(Long id) {
        return this.removeById(id);
    }

    @Override
    @RedisLock(value = "id", asObject = false)
    @Transactional(rollbackFor = Exception.class)
    @RedisRemove(key = RedisConstant.KEY_GOODS_LIST)
    public boolean reduceInventory(Long id, Integer count) {
        GoodsInfo goodsInfo = this.getById(id);
        if (goodsInfo.getGoodsInventory() < count) {
            throw new BaseException("库存不足");
        }
        return this.update(Wrappers.<GoodsInfo>lambdaUpdate()
                .set(GoodsInfo::getGoodsInventory, goodsInfo.getGoodsInventory() - count));
    }
}
