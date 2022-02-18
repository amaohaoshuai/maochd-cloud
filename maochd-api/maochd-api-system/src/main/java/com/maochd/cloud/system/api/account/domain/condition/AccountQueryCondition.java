package com.maochd.cloud.system.api.account.domain.condition;

import com.baomidou.mybatisplus.annotation.TableField;
import com.maochd.cloud.common.core.domain.QueryCondition;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class AccountQueryCondition extends QueryCondition {

    @ApiModelProperty(value = "账户名称")
    @TableField("account_name")
    private String accountName;
}
