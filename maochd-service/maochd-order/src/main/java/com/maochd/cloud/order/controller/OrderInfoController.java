package com.maochd.cloud.order.controller;


import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.api.order.domain.condition.OrderQueryCondition;
import com.maochd.cloud.api.order.domain.entity.OrderInfo;
import com.maochd.cloud.order.service.OrderInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;


@RestController
@Api(value = "订单信息Controller", tags = "订单信息Controller")
public class OrderInfoController {

    @Resource
    private OrderInfoService orderInfoService;

    @PostMapping("/list")
    @ApiOperation(value = "根据条件查询订单", notes = "根据条件查询订单")
    public R<List<OrderInfo>> list(@RequestBody OrderQueryCondition cond) {
        return R.ok(orderInfoService.list(cond));
    }

    @PostMapping("/page")
    @ApiOperation(value = "根据条件分页查询订单", notes = "根据条件分页查询订单")
    public R<Page<OrderInfo>> page(@RequestBody OrderQueryCondition cond) {
        return R.ok(orderInfoService.page(cond));
    }

    @GetMapping("/{id}")
    @ApiOperation(value = "根据ID查询订单", notes = "根据ID查询订单")
    public R<OrderInfo> getById(@PathVariable Long id) {
        return R.ok(orderInfoService.getById(id));
    }

    @PostMapping
    @ApiOperation(value = "添加订单", notes = "添加订单")
    public R<Boolean> add(@RequestBody OrderInfo orderInfo) {
        return R.ok(orderInfoService.add(orderInfo));
    }
}

