package com.maochd.cloud.auth.controller;


import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.maochd.cloud.auth.condition.UserQueryCondition;
import com.maochd.cloud.auth.entity.User;
import com.maochd.cloud.auth.service.UserService;
import com.maochd.cloud.common.core.domain.R;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;


@RestController
@RequestMapping("/user")
@Api(value = "用户信息", tags = "用户信息")
public class UserController {

    @Resource
    private UserService userService;

    @PostMapping("/list")
    @ApiOperation(value = "根据条件查询用户列表", notes = "根据条件查询用户列表")
    public R<List<User>> list(@RequestBody UserQueryCondition cond) {
        return R.ok(userService.list(cond));
    }

    @GetMapping("/{id}")
    @ApiOperation(value = "获取指定用户", notes = "获取指定用户")
    public R<User> getById(@PathVariable Long id) {
        return R.ok(userService.getById(id));
    }

    @PostMapping("/page")
    @ApiOperation(value = "根据条件分页查询用户列表", notes = "根据条件分页查询用户列表")
    public R<Page<User>> page(@RequestBody UserQueryCondition cond) {
        return R.ok(userService.page(cond));
    }

    @PostMapping
    @ApiOperation(value = "新增用户", notes = "新增用户")
    public R<Boolean> add(@RequestBody User user) {
        return R.ok(userService.add(user));
    }

    @PutMapping
    @ApiOperation(value = "修改用户", notes = "修改用户")
    public R<Boolean> modify(@RequestBody User user) {
        return R.ok(userService.modify(user));
    }

    @DeleteMapping("/{id}")
    @ApiOperation(value = "删除指定用户", notes = "删除指定用户")
    public R<Boolean> remove(@PathVariable Long id) {
        return R.ok(userService.remove(id));
    }

}

