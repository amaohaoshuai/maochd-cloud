package com.maochd.cloud.pay.domain.vo;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.math.BigDecimal;

@Data
@ApiModel("金额VO")
public class AmountVo {

    @ApiModelProperty("主键ID")
    private Long id;

    @ApiModelProperty("账户ID")
    private String accountId;

    @ApiModelProperty("金额")
    private BigDecimal changeAmount;
}
