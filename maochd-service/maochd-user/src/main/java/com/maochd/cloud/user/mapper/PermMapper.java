package com.maochd.cloud.user.mapper;

import com.maochd.cloud.user.entity.Perm;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface PermMapper extends BaseMapper<Perm> {

    /**
     * 根据角色获取权限列表
     *
     * @param roleId 角色ID
     * @return perm list
     */
    List<Perm> getPermsByRole(@Param("roleId") Long roleId);
}
