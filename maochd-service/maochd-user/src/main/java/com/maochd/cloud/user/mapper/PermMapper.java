package com.maochd.cloud.user.mapper;

import com.maochd.cloud.user.entity.Perm;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * <p>
 * 权限 Mapper 接口
 * </p>
 *
 * @author maochd
 * @since 2022-03-03
 */
public interface PermMapper extends BaseMapper<Perm> {

    List<Perm> getPermsByRole(@Param("roleId") Long roleId);
}
