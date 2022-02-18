package com.maochd.cloud.inventory.condition;

import com.maochd.cloud.common.core.domain.QueryCondition;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class InventoryQueryCondition extends QueryCondition {

    @ApiModelProperty(value = "商品名称")
    private String goodsName;
}
