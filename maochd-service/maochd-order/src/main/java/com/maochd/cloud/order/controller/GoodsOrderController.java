package com.maochd.cloud.order.controller;


import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.order.entity.TestVo;
import com.maochd.cloud.order.service.GoodsOrderService;
import com.maochd.cloud.system.api.order.domain.GoodsOrder;
import com.maochd.cloud.system.api.order.domain.cond.OrderCondition;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.SneakyThrows;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
 * <p>
 * 订单 前端控制器
 * </p>
 *
 * @author maochd
 * @since 2021-06-16
 */
@RestController
@RequestMapping("/goodsOrder")
@Api(value = "订单", tags = "订单")
public class GoodsOrderController {

    @Resource
    private GoodsOrderService goodsOrderService;

    @GetMapping("/listByAccountId")
    @ApiOperation(value = "查询用户订单列表", notes = "查询用户订单列表")
    public R<List<GoodsOrder>> listByAccountId(@RequestParam("accountId") String accountId) {
        return goodsOrderService.listByAccountId(accountId);
    }

    @PostMapping("/generateOrder")
    @ApiOperation(value = "生成订单", notes = "生成订单")
    public R<Boolean> generateOrder(@RequestBody TestVo testVo) {
        return goodsOrderService.generateOrder(testVo);
    }

    @SneakyThrows
    @PostMapping("/list")
    @ApiOperation(value = "查询指定条件订单", notes = "查询指定条件订单")
    public R<List<GoodsOrder>> list(@RequestBody OrderCondition condition) {
        return R.ok(goodsOrderService.list(Wrappers.<GoodsOrder>lambdaQuery()
                .eq(StrUtil.isNotBlank(condition.getAccountId()), GoodsOrder::getAccountId, condition.getAccountId())
                .eq(StrUtil.isNotBlank(condition.getOrderId()), GoodsOrder::getOrderId, condition.getOrderId())
                .eq(StrUtil.isNotBlank(condition.getGoodsId()), GoodsOrder::getGoodsId, condition.getGoodsId())));
    }

}

