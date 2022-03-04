package com.maochd.cloud.auth.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.maochd.cloud.common.core.domain.PermRoleDto;
import com.maochd.cloud.auth.entity.User;
import com.maochd.cloud.auth.mapper.UserMapper;
import com.maochd.cloud.auth.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;


@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {

    @Resource
    private UserMapper userMapper;

    @Override
    public List<String> getUserRoles(String username) {
        return userMapper.getUserRoles(username);
    }

    @Override
    public List<PermRoleDto> getUserPerm(String username) {
        return userMapper.getUserPerm(username);
    }
}
