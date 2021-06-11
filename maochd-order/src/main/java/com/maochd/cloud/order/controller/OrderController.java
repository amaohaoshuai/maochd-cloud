package com.maochd.cloud.order.controller;

import com.maochd.cloud.api.system.order.api.domain.OrderInfo;
import com.maochd.cloud.api.system.pay.api.domain.PayInfo;
import com.maochd.cloud.api.system.pay.api.service.RemotePayService;
import com.maochd.cloud.common.core.domain.R;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/order")
@Api(tags = "订单")
public class OrderController {

    @Resource
    private RemotePayService remotePayService;

    @GetMapping("/list")
    @ApiOperation(value = "订单列表", notes = "订单列表")
    public R<List<OrderInfo>> list() {
        return R.ok(new ArrayList<OrderInfo>() {{
            add(OrderInfo.builder()
                    .orderId(UUID.randomUUID().toString())
                    .orderName("烤肉饭")
                    .amount(new BigDecimal("10.43"))
                    .build());
        }});
    }

    @GetMapping("/pay")
    @ApiOperation(value = "支付列表", notes = "支付列表")
    public R<List<PayInfo>> pay() {
        return remotePayService.list();
    }
}
