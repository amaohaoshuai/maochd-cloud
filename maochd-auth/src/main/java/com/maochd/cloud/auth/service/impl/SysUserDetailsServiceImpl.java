package com.maochd.cloud.auth.service.impl;

import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.maochd.cloud.auth.entity.SysUserDetails;
import com.maochd.cloud.auth.entity.User;
import com.maochd.cloud.auth.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AccountExpiredException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * 系统用户体系业务类
 */
@Service("sysUserDetailsService")
@Slf4j
@RequiredArgsConstructor
public class SysUserDetailsServiceImpl implements UserDetailsService {

    @Resource
    private UserService userService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        SysUserDetails userDetails = null;
        User user = userService.getOne(Wrappers.<User>lambdaQuery().eq(User::getUsername, username));
        if (null != user) {
            userDetails = new SysUserDetails(user, userService.getUserRoles(username));
        }
        if (userDetails == null) {
            throw new UsernameNotFoundException("用户不匹配");
        }
        if (!userDetails.isEnabled()) {
            throw new DisabledException("该账户已被禁用!");
        }
        if (!userDetails.isAccountNonLocked()) {
            throw new LockedException("该账号已被锁定!");
        }
        if (!userDetails.isAccountNonExpired()) {
            throw new AccountExpiredException("该账号已过期!");
        }
        return userDetails;
    }

}
