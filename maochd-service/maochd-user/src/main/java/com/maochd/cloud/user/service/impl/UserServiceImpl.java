package com.maochd.cloud.user.service.impl;

import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.maochd.cloud.common.core.exception.BaseException;
import com.maochd.cloud.common.redis.annotation.RedisLock;
import com.maochd.cloud.common.redis.annotation.RedisRemove;
import com.maochd.cloud.common.redis.annotation.RedisSave;
import com.maochd.cloud.common.redis.service.RedisService;
import com.maochd.cloud.user.condition.UserQueryCondition;
import com.maochd.cloud.user.constant.RedisConstant;
import com.maochd.cloud.user.entity.User;
import com.maochd.cloud.user.mapper.UserMapper;
import com.maochd.cloud.user.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {

    @Resource
    private RedisService redisService;

    @Override
    @RedisSave(key = RedisConstant.KEY_USER_LIST, clazz = User.class)
    public List<User> list(UserQueryCondition cond) {
        return this.list(Wrappers.<User>lambdaQuery()
                .like(StrUtil.isNotBlank(cond.getUsername()), User::getUsername, cond.getUsername())
                .eq(StrUtil.isNotBlank(cond.getPhone()), User::getPhone, cond.getPhone())
                .eq(cond.getStatus() != null, User::getStatus, cond.getStatus()));
    }

    @Override
    public Page<User> page(UserQueryCondition cond) {
        return this.page(new Page<>(cond.current(), cond.size()), Wrappers.<User>lambdaQuery()
                .like(StrUtil.isNotBlank(cond.getUsername()), User::getUsername, cond.getUsername())
                .eq(StrUtil.isNotBlank(cond.getPhone()), User::getPhone, cond.getPhone())
                .eq(cond.getStatus() != null, User::getStatus, cond.getStatus()));
    }

    @Override
    @RedisLock
    @RedisRemove(key = RedisConstant.KEY_USER_LIST)
    public boolean add(User user) {
        return this.save(user);
    }

    @Override
    @RedisLock
    @RedisRemove(key = RedisConstant.KEY_USER_LIST)
    public boolean modify(User user) {
        if (user.getId() == null) {
            throw new BaseException("用户ID不能为空");
        }
        return this.updateById(user);
    }

    @Override
    @RedisLock
    @RedisRemove(key = RedisConstant.KEY_USER_LIST)
    public boolean remove(Long id) {
        return this.removeById(id);
    }

}
