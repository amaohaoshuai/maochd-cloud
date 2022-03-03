package com.maochd.cloud.user.service;

import com.maochd.cloud.user.entity.Role;
import com.maochd.cloud.user.entity.UserRoleMapping;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

public interface UserRoleMappingService extends IService<UserRoleMapping> {

    /**
     * 获取当前用户的角色列表
     *
     * @param userId 用户ID
     * @return list
     */
    List<Role> getRolesByUser(Long userId);

}
