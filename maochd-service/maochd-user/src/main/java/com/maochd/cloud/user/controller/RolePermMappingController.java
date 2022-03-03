package com.maochd.cloud.user.controller;


import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.user.service.RolePermMappingService;
import com.maochd.cloud.user.service.UserRoleMappingService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@RequestMapping("/rolePermMapping")
@Api(value = "角色权限映射Controller", tags = "角色权限映射Controller")
public class RolePermMappingController {

    @Resource
    private RolePermMappingService rolePermMappingService;

    @GetMapping("/get/perms/{roleId}")
    @ApiOperation(value = "获取当前角色的权限列表", notes = "获取当前角色的权限列表")
    public R<?> getPermsByRole(@PathVariable("roleId") Long roleId) {
        return R.ok(rolePermMappingService.getPermsByRole(roleId));
    }

}

