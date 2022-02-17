package com.maochd.cloud.auth.service;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.maochd.cloud.auth.condition.UserQueryCondition;
import com.maochd.cloud.auth.entity.User;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;


public interface UserService extends IService<User> {

    /**
     * 根据条件查询用户列表
     *
     * @param cond 查询条件
     * @return list
     */
    List<User> list(UserQueryCondition cond);

    /**
     * 根据条件分页查询用户列表
     *
     * @param cond 查询条件
     * @return page
     */
    Page<User> page(UserQueryCondition cond);

    /**
     * 新增用户
     *
     * @param user 用户实体
     * @return boolean
     */
    boolean add(User user);

    /**
     * 修改用户
     *
     * @param user 用户实体
     * @return boolean
     */
    boolean modify(User user);

    /**
     * 删除指定用户
     *
     * @param id 用户主键ID
     * @return boolean
     */
    boolean remove(Long id);
}
