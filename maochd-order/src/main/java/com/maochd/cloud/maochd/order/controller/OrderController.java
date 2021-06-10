package com.maochd.cloud.maochd.order.controller;

import com.maochd.cloud.maochd.api.system.order.api.domain.OrderInfo;
import com.maochd.cloud.maochd.common.domain.R;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/order")
@Api(tags = "订单")
public class OrderController {

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
}
