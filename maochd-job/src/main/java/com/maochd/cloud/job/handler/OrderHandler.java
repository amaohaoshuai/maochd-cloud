package com.maochd.cloud.job.handler;

import com.maochd.cloud.system.api.order.domain.cond.OrderCondition;
import com.maochd.cloud.system.api.order.service.RemoteOrderService;
import com.xxl.job.core.handler.annotation.XxlJob;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

@Component
public class OrderHandler {

    @Resource
    private RemoteOrderService remoteOrderService;

    @XxlJob("listOrderHandler")
    public void listOrderHandler(){
        System.out.println(remoteOrderService.list(OrderCondition.builder().build()));
    }
}
