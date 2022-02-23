package com.maochd.cloud.api.order.domain.condition;

import com.maochd.cloud.common.core.domain.QueryCondition;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;


@Data
@EqualsAndHashCode(callSuper = true)
@ApiModel(value = "订单查询条件对象", description = "订单查询条件")
public class OrderQueryCondition extends QueryCondition {

    @ApiModelProperty(value = "订单号")
    private String orderId;

    @ApiModelProperty(value = "支付帐号")
    private String accountCode;

    @ApiModelProperty(value = "用户ID")
    private Long userId;
}
