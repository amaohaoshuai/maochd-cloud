package com.maochd.cloud.user.service;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.IService;
import com.maochd.cloud.user.condition.RoleQueryCondition;
import com.maochd.cloud.user.entity.Role;

import java.util.List;

public interface RoleService extends IService<Role> {

    /**
     * 根据条件查询角色列表
     *
     * @param condition 查询条件
     * @return list
     */
    List<Role> list(RoleQueryCondition condition);

    /**
     * 根据条件分页查询角色列表
     *
     * @param condition 查询条件
     * @return list
     */
    Page<Role> page(RoleQueryCondition condition);
}
