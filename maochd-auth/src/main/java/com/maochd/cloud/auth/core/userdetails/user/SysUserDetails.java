package com.maochd.cloud.auth.core.userdetails.user;

import cn.hutool.core.collection.CollectionUtil;
import com.maochd.cloud.common.core.constant.GlobalConstants;
import com.maochd.cloud.auth.entity.User;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;


/**
 * 系统管理用户认证信息
 *
 * @author <a href="mailto:xianrui0365@163.com">haoxianrui</a>
 * @date 2021/9/27
 */
@Data
public class SysUserDetails implements UserDetails {

    /**
     * 扩展字段
     */
    private String userId;
    private String authenticationMethod;

    /**
     * 默认字段
     */
    private String username;
    private String password;
    private Boolean enabled;
    private Collection<SimpleGrantedAuthority> authorities;

    /**
     * 系统管理用户
     */
    public SysUserDetails(User user) {
        this.setUserId(user.getUserId());
        this.setUsername(user.getUsername());
        this.setPassword(user.getPassword());
        this.setEnabled(GlobalConstants.STATUS_YES.equals(user.getStatus()));
        List<String> roles = Arrays.asList(user.getRoles().split(","));
        if (CollectionUtil.isNotEmpty(roles)) {
            authorities = new ArrayList<>();
            roles.forEach(role -> authorities.add(new SimpleGrantedAuthority(role)));
        }
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.authorities;
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return this.username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return this.enabled;
    }
}
