package com.maochd.cloud.user.service.impl;

import com.maochd.cloud.user.entity.Role;
import com.maochd.cloud.user.entity.UserRoleMapping;
import com.maochd.cloud.user.mapper.RoleMapper;
import com.maochd.cloud.user.mapper.UserRoleMappingMapper;
import com.maochd.cloud.user.service.UserRoleMappingService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Arrays;
import java.util.List;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author maochd
 * @since 2022-03-03
 */
@Service
public class UserRoleMappingServiceImpl extends ServiceImpl<UserRoleMappingMapper, UserRoleMapping> implements UserRoleMappingService {

    @Resource
    private RoleMapper roleMapper;

    @Override
    public List<Role> getRolesByUser(Long userId) {
        return roleMapper.getRolesByUser(userId);
    }
}
