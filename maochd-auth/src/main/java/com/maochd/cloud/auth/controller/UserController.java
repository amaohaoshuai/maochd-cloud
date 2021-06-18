package com.maochd.cloud.auth.controller;


import com.maochd.cloud.auth.entity.User;
import com.maochd.cloud.auth.service.UserService;
import com.maochd.cloud.common.core.domain.R;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author maochd
 * @since 2021-06-16
 */
@RestController
@RequestMapping("/user")
@Api(value = "用户信息", tags = "用户信息")
public class UserController {

    @Resource
    private UserService userService;

    @GetMapping("/list")
    @ApiOperation(value = "用户列表", notes = "用户列表")
    public R<List<User>> list() {
        return R.ok(userService.list());
    }

}

