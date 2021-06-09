package com.maochd.cloud.maochd.auth.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
@Api("测试")
public class TestController {

    @ApiOperation(value = "测试", notes = "测试")
    @GetMapping("/test")
    public String test() {
        return "test";
    }
}
