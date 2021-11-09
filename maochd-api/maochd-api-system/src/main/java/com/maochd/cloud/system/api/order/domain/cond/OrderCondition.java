package com.maochd.cloud.system.api.order.domain.cond;

import com.maochd.cloud.common.core.domain.QueryCondition;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
@ApiModel(value = "订单检索条件", description = "订单检索条件实体")
public class OrderCondition extends QueryCondition {

    @ApiModelProperty(value = "购买方帐号ID")
    private String accountId;

    @ApiModelProperty(value = "订单号")
    private String orderId;

    @ApiModelProperty(value = "商品编号")
    private String goodsId;

}
