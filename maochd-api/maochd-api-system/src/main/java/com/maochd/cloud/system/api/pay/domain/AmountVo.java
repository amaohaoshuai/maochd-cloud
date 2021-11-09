package com.maochd.cloud.system.api.pay.domain;

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
@ApiModel("金额VO")
public class AmountVo {

    @ApiModelProperty("主键ID")
    private Long id;

    @ApiModelProperty("账户ID")
    private String accountId;

    @ApiModelProperty("金额")
    private BigDecimal changeAmount;
}
