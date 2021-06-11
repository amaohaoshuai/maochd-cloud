package com.maochd.cloud.api.system.pay.api.domain;

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
@ApiModel("支付信息")
public class PayInfo {
    @ApiModelProperty("支付ID")
    private String payId;

    @ApiModelProperty("金额")
    private BigDecimal amount;
}

