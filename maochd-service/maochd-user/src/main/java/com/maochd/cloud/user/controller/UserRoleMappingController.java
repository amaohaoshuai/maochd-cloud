package com.maochd.cloud.user.controller;


import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.user.service.UserRoleMappingService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@RequestMapping("/userRoleMapping")
@Api(value = "用户角色映射Controller", tags = "用户角色映射Controller")
public class UserRoleMappingController {

    @Resource
    private UserRoleMappingService userRoleMappingService;

    @GetMapping("/get/roles/{userId}")
    @ApiOperation(value = "获取当前用户的角色列表", notes = "获取当前用户的角色列表")
    public R<?> getRolesByUser(@PathVariable("userId") Long userId) {
        return R.ok(userRoleMappingService.getRolesByUser(userId));
    }

}

