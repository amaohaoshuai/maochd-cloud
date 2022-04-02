package com.maochd.cloud.user.controller;


import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.user.condition.RoleQueryCondition;
import com.maochd.cloud.user.service.RoleService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;


@RestController
@RequestMapping("/role")
@Api(value = "角色Controller", tags = "角色Controller")
public class RoleController {

    @Resource
    private RoleService roleService;

    @PostMapping("/list")
    @ApiOperation(value = "查询角色列表", notes = "查询角色列表")
    public R<?> list(@RequestBody RoleQueryCondition condition) {
        return R.ok(roleService.list(condition));
    }

    @PostMapping("/page")
    @ApiOperation(value = "分页查询角色列表", notes = "分页查询角色列表")
    public R<?> page(@RequestBody RoleQueryCondition condition) {
        return R.ok(roleService.page(condition));
    }

}

