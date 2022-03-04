package com.maochd.cloud.user.mapper;

import com.maochd.cloud.user.entity.Role;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface RoleMapper extends BaseMapper<Role> {

    List<Role> getRolesByUser(@Param("userId") Long userId);
}
