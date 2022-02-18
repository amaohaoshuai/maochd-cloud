package com.maochd.cloud.system.api.order.service;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.maochd.cloud.common.core.constant.ServiceContextConstant;
import com.maochd.cloud.common.core.constant.ServiceNameConstant;
import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.system.api.order.domain.condition.OrderQueryCondition;
import com.maochd.cloud.system.api.order.domain.entity.OrderInfo;
import com.maochd.cloud.system.api.order.fallback.RemoteOrderFallbackFactory;
import io.swagger.annotations.ApiOperation;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@FeignClient(contextId = ServiceContextConstant.ORDER_CONTEXT_ID,
        value = ServiceNameConstant.ORDER_SERVER,
        fallbackFactory = RemoteOrderFallbackFactory.class)
public interface RemoteOrderService {

    @PostMapping("/list")
    @ApiOperation(value = "根据条件查询订单", notes = "根据条件查询订单")
    R<List<OrderInfo>> list(@RequestBody OrderQueryCondition cond);

    @PostMapping("/page")
    @ApiOperation(value = "根据条件分页查询订单", notes = "根据条件分页查询订单")
    R<Page<OrderInfo>> page(@RequestBody OrderQueryCondition cond);

    @GetMapping("/{id}")
    @ApiOperation(value = "根据ID查询订单", notes = "根据ID查询订单")
    R<OrderInfo> getById(@PathVariable Long id);

    @PostMapping
    @ApiOperation(value = "添加订单", notes = "添加订单")
    R<Boolean> add(@RequestBody OrderInfo orderInfo);
}
