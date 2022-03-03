package com.maochd.cloud.user.controller;


import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.user.condition.PermQueryCondition;
import com.maochd.cloud.user.service.PermService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;


@RestController
@RequestMapping("/perm")
@Api(value = "权限Controller", tags = "权限Controller")
public class PermController {

    @Resource
    private PermService permService;

    @PostMapping("/list")
    @ApiOperation(value = "查询权限列表", notes = "查询权限列表")
    public R<?> list(@RequestBody PermQueryCondition condition) {
        return R.ok(permService.list(condition));
    }

    @PostMapping("/page")
    @ApiOperation(value = "分页查询权限列表", notes = "分页查询权限列表")
    public R<?> page(@RequestBody PermQueryCondition condition) {
        return R.ok(permService.page(condition));
    }
}

