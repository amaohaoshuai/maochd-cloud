package com.maochd.cloud.system.api.pay.domain;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import java.io.Serializable;
import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ApiModel(value = "账户VO", description = "账户金额前端交互对象")
public class AmountVo implements Serializable {

    @ApiModelProperty("主键ID")
    private Long id;

    @ApiModelProperty("账户ID")
    private String accountId;

    @ApiModelProperty("金额")
    private BigDecimal changeAmount;
}
