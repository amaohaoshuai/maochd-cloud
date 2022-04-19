package com.maochd.cloud.api.account.domain.condition;

import com.maochd.cloud.common.datasource.domain.QueryCondition;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
@ApiModel(value = "账户查询条件对象", description = "账户信息查询条件")
public class AccountQueryCondition extends QueryCondition {

    @ApiModelProperty(value = "账户名称")
    private String accountName;
}
