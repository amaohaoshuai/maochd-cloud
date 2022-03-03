package com.maochd.cloud.user.service.impl;

import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.maochd.cloud.common.redis.annotation.RedisSave;
import com.maochd.cloud.user.condition.PermQueryCondition;
import com.maochd.cloud.user.constant.RedisConstant;
import com.maochd.cloud.user.entity.Perm;
import com.maochd.cloud.user.entity.User;
import com.maochd.cloud.user.mapper.PermMapper;
import com.maochd.cloud.user.service.PermService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class PermServiceImpl extends ServiceImpl<PermMapper, Perm> implements PermService {

    @Override
    @RedisSave(key = RedisConstant.KEY_PERM_LIST, clazz = User.class)
    public List<Perm> list(PermQueryCondition condition) {
        return this.list(Wrappers.<Perm>lambdaQuery()
                .like(StrUtil.isNotBlank(condition.getInterfaceName()), Perm::getInterfaceName, condition.getInterfaceName())
                .eq(StrUtil.isNotBlank(condition.getRequestType()), Perm::getRequestType, condition.getRequestType()));
    }

    @Override
    public Page<Perm> page(PermQueryCondition condition) {
        return this.page(new Page<>(condition.current(), condition.size()), Wrappers.<Perm>lambdaQuery()
                .like(StrUtil.isNotBlank(condition.getInterfaceName()), Perm::getInterfaceName, condition.getInterfaceName())
                .eq(StrUtil.isNotBlank(condition.getRequestType()), Perm::getRequestType, condition.getRequestType()));
    }
}
