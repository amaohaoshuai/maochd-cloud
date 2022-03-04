package com.maochd.cloud.auth.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.maochd.cloud.common.core.domain.PermRoleDto;
import com.maochd.cloud.auth.entity.User;

import java.util.List;


public interface UserService extends IService<User> {

    /**
     * 根据用户名获取用户角色
     *
     * @param username 用户名
     * @return
     */
    List<String> getUserRoles(String username);

    /**
     * 根据用户名获取用户权限
     *
     * @param username 用户名
     * @return
     */
    List<PermRoleDto> getUserPerm(String username);
}
