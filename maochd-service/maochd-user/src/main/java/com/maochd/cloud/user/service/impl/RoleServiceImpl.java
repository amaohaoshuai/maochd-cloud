package com.maochd.cloud.user.service.impl;

import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.maochd.cloud.common.redis.annotation.RedisSave;
import com.maochd.cloud.user.condition.RoleQueryCondition;
import com.maochd.cloud.user.constant.RedisConstant;
import com.maochd.cloud.user.entity.Role;
import com.maochd.cloud.user.entity.User;
import com.maochd.cloud.user.mapper.RoleMapper;
import com.maochd.cloud.user.service.RoleService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleServiceImpl extends ServiceImpl<RoleMapper, Role> implements RoleService {

    @Override
    @RedisSave(key = RedisConstant.KEY_ROLE_LIST, clazz = User.class)
    public List<Role> list(RoleQueryCondition condition) {
        return this.list(Wrappers.<Role>lambdaQuery()
                .like(StrUtil.isNotBlank(condition.getRoleName()), Role::getRoleName, condition.getRoleName())
                .like(StrUtil.isNotBlank(condition.getRoleMark()), Role::getRoleMark, condition.getRoleMark()));
    }

    @Override
    public Page<Role> page(RoleQueryCondition condition) {
        return this.page(new Page<>(condition.current(), condition.size()), Wrappers.<Role>lambdaQuery()
                .like(StrUtil.isNotBlank(condition.getRoleName()), Role::getRoleName, condition.getRoleName())
                .like(StrUtil.isNotBlank(condition.getRoleMark()), Role::getRoleMark, condition.getRoleMark()));
    }
}
