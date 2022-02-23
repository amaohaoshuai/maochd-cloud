package com.maochd.cloud.api.goods.domain.condition;

import com.maochd.cloud.common.core.domain.QueryCondition;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;


@Data
@EqualsAndHashCode(callSuper = true)
@ApiModel(value = "商品条件查询对象", description = "商品条件查询")
public class GoodsQueryCondition extends QueryCondition {

    @ApiModelProperty(value = "商品编号")
    private String goodsCode;

    @ApiModelProperty(value = "商品名称")
    private String goodsName;
}
