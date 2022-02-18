package com.maochd.cloud.system.api.order.domain.condition;

import com.maochd.cloud.common.core.domain.QueryCondition;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;


@Data
public class OrderQueryCondition extends QueryCondition {

    @ApiModelProperty(value = "订单号")
    private String orderId;

    @ApiModelProperty(value = "支付帐号")
    private String accountCode;

    @ApiModelProperty(value = "用户ID")
    private Long userId;
}
