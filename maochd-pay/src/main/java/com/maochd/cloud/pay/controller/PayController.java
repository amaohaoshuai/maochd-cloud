package com.maochd.cloud.pay.controller;

import com.maochd.cloud.api.system.order.api.service.RemoteOrderService;
import com.maochd.cloud.api.system.order.api.domain.OrderInfo;
import com.maochd.cloud.api.system.pay.api.domain.PayInfo;
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
@RequestMapping("/pay")
@Api(tags = "支付")
public class PayController {

    @Resource
    private RemoteOrderService remoteOrderService;

    @GetMapping("/pay")
    @ApiOperation(value = "支付", notes = "支付")
    public R<List<OrderInfo>> pay() {
        return remoteOrderService.list();
    }

    @GetMapping("/list")
    @ApiOperation(value = "支付列表", notes = "支付列表")
    public R<List<PayInfo>> list() {
        return R.ok(new ArrayList<PayInfo>() {{
            add(PayInfo.builder()
                    .payId(UUID.randomUUID().toString())
                    .amount(new BigDecimal("10.43"))
                    .build());
        }});
    }
}
