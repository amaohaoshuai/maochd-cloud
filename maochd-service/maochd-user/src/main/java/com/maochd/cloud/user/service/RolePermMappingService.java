package com.maochd.cloud.user.service;

import com.maochd.cloud.user.entity.Perm;
import com.maochd.cloud.user.entity.RolePermMapping;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

public interface RolePermMappingService extends IService<RolePermMapping> {

    /**
     * 获取当前角色的权限列表
     *
     * @param roleId 角色ID
     * @return list
     */
    List<Perm> getPermsByRole(Long roleId);
}
