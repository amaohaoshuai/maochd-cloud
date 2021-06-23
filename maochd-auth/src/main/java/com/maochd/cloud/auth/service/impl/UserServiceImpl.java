package com.maochd.cloud.auth.service.impl;

import com.maochd.cloud.auth.entity.User;
import com.maochd.cloud.auth.mapper.UserMapper;
import com.maochd.cloud.auth.service.UserService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author maochd
 * @since 2021-06-16
 */
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {

}
