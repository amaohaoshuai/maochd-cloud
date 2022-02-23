package com.maochd.cloud.auth.service.impl;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.lang.UUID;
import cn.hutool.core.util.StrUtil;
import com.alibaba.fastjson.JSONArray;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.maochd.cloud.auth.condition.UserQueryCondition;
import com.maochd.cloud.auth.constant.RedisConstant;
import com.maochd.cloud.auth.entity.User;
import com.maochd.cloud.auth.mapper.UserMapper;
import com.maochd.cloud.auth.service.UserService;
import com.maochd.cloud.common.core.exception.BaseException;
import com.maochd.cloud.common.redis.annotation.RedisLock;
import com.maochd.cloud.common.redis.annotation.RedisRemove;
import com.maochd.cloud.common.redis.annotation.RedisSave;
import com.maochd.cloud.common.redis.service.RedisService;
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
                .like(StrUtil.isNotBlank(cond.getUserName()), User::getUserName, cond.getUserName())
                .eq(StrUtil.isNotBlank(cond.getPhone()), User::getPhone, cond.getPhone()));
    }

    @Override
    public Page<User> page(UserQueryCondition cond) {
        return this.page(new Page<>(cond.current(), cond.size()), Wrappers.<User>lambdaQuery()
                .like(StrUtil.isNotBlank(cond.getUserName()), User::getUserName, cond.getUserName())
                .eq(StrUtil.isNotBlank(cond.getPhone()), User::getPhone, cond.getPhone()));
    }

    @Override
    @RedisLock
    @RedisRemove(key = RedisConstant.KEY_USER_LIST)
    public boolean add(User user) {
        user.setUserId(UUID.randomUUID().toString());
        boolean result = this.save(user);
        String userList = redisService.get(RedisConstant.KEY_USER_LIST);
        if (StrUtil.isNotBlank(userList)) {
            redisService.del(RedisConstant.KEY_USER_LIST);
        }
        return result;
    }

    @Override
    @RedisLock
    @RedisRemove(key = RedisConstant.KEY_USER_LIST)
    public boolean modify(User user) {
        if (user.getId() == null) {
            throw new BaseException("用户ID不能为空");
        }
        boolean result = this.updateById(user);
        String userList = redisService.get(RedisConstant.KEY_USER_LIST);
        if (StrUtil.isNotBlank(userList)) {
            redisService.del(RedisConstant.KEY_USER_LIST);
        }
        return result;
    }

    @Override
    @RedisLock
    @RedisRemove(key = RedisConstant.KEY_USER_LIST)
    public boolean remove(Long id) {
        boolean result = this.removeById(id);
        String userList = redisService.get(RedisConstant.KEY_USER_LIST);
        if (StrUtil.isNotBlank(userList)) {
            redisService.del(RedisConstant.KEY_USER_LIST);
        }
        return result;
    }
}
