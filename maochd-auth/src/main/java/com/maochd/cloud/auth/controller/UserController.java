package com.maochd.cloud.auth.controller;


import cn.hutool.core.lang.UUID;
import cn.hutool.core.thread.ThreadUtil;
import com.alibaba.fastjson.JSONArray;
import com.maochd.cloud.auth.entity.User;
import com.maochd.cloud.auth.service.UserService;
import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.common.redis.util.RedisUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.*;

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

    @Resource
    private RedisUtil redisUtil;

    @GetMapping("/list")
    @ApiOperation(value = "用户列表", notes = "用户列表")
    public R<List<User>> list() {
        List<User> users = JSONArray.parseArray(redisUtil.get("user:list"), User.class);
        if (CollectionUtils.isEmpty(users)) {
            users = userService.list();
            redisUtil.set("user:list", users);
        }
        return R.ok(users);
    }

    @PostMapping("/add")
    @ApiOperation(value = "添加用户", notes = "添加用户")
    public R<Boolean> add(@RequestBody User user) {
        ThreadUtil.sleep(10000);
        user.setUserId(UUID.randomUUID().toString());
        userService.save(user);
        return R.ok();
    }

}

