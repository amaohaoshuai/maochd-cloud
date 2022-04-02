package com.maochd.cloud.user.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.maochd.cloud.user.entity.Role;
import com.maochd.cloud.user.entity.UserRoleMapping;
import com.maochd.cloud.user.mapper.RoleMapper;
import com.maochd.cloud.user.mapper.UserRoleMappingMapper;
import com.maochd.cloud.user.service.UserRoleMappingService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;


@Service
public class UserRoleMappingServiceImpl extends ServiceImpl<UserRoleMappingMapper, UserRoleMapping> implements UserRoleMappingService {

    @Resource
    private RoleMapper roleMapper;

    @Override
    public List<Role> getRolesByUser(Long userId) {
        return roleMapper.getRolesByUser(userId);
    }
}
