package com.maochd.cloud.auth.mapper;

import com.maochd.cloud.auth.entity.User;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface UserMapper extends BaseMapper<User> {

    List<String> getUserRoles(@Param("username") String username);
}
