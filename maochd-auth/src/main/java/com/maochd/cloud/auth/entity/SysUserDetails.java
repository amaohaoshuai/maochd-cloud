package com.maochd.cloud.auth.entity;

import cn.hutool.core.collection.CollUtil;
import com.maochd.cloud.common.core.constant.SecurityConstants;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;


@Data
@ApiModel(value = "系统管理用户认证信息", description = "系统管理用户认证信息")
public class SysUserDetails implements UserDetails {

    @ApiModelProperty(value = "用户名")
    private String username;

    @ApiModelProperty(value = "密码")
    private String password;

    @ApiModelProperty(value = "状态")
    private Boolean enabled;

    @ApiModelProperty("角色列表")
    private Collection<SimpleGrantedAuthority> authorities;

    /**
     * 系统管理用户
     */
    public SysUserDetails(User user, List<String> roles) {
        this.setUsername(user.getUsername());
        this.setPassword(user.getPassword());
        this.setEnabled(SecurityConstants.STATUS_YES.equals(user.getStatus()));
        if (CollUtil.isNotEmpty(roles)) {
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
