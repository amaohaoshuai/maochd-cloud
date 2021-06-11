package com.maochd.cloud.api.system.order.api.domain;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ApiModel("订单")
public class OrderInfo {
    @ApiModelProperty("订单ID")
    private String orderId;

    @ApiModelProperty("订单名称")
    private String orderName;

    @ApiModelProperty("金额")
    private BigDecimal amount;
}

