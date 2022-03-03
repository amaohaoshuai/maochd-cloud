package com.maochd.cloud.user.service;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.maochd.cloud.user.condition.PermQueryCondition;
import com.maochd.cloud.user.entity.Perm;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;


public interface PermService extends IService<Perm> {

    /**
     * 根据条件查询权限列表
     *
     * @param condition 查询条件
     * @return list
     */
    List<Perm> list(PermQueryCondition condition);

    /**
     * 根据条件分页查询权限列表
     *
     * @param condition 查询条件
     * @return list
     */
    Page<Perm> page(PermQueryCondition condition);
}
