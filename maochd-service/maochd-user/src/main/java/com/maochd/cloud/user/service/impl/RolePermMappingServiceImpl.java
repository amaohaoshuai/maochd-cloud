package com.maochd.cloud.user.service.impl;

import com.maochd.cloud.user.entity.Perm;
import com.maochd.cloud.user.entity.RolePermMapping;
import com.maochd.cloud.user.mapper.PermMapper;
import com.maochd.cloud.user.mapper.RolePermMappingMapper;
import com.maochd.cloud.user.service.RolePermMappingService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class RolePermMappingServiceImpl extends ServiceImpl<RolePermMappingMapper, RolePermMapping> implements RolePermMappingService {

    @Resource
    private PermMapper permMapper;

    @Override
    public List<Perm> getPermsByRole(Long roleId) {
        return permMapper.getPermsByRole(roleId);
    }
}
