package com.maochd.cloud.maochd.pay.controller;

import com.maochd.cloud.maochd.api.system.order.api.RemoteOrderService;
import com.maochd.cloud.maochd.api.system.order.api.domain.OrderInfo;
import com.maochd.cloud.maochd.common.domain.R;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/pay")
@Api(tags = "支付")
public class PayController {

    @Resource
    private RemoteOrderService remoteOrderService;

    @GetMapping("/pay")
    @ApiOperation(value = "支付", notes = "支付")
    public R<List<OrderInfo>> list() {
        return remoteOrderService.list();
    }
}
