package com.maochd.cloud.auth.condition;

import com.baomidou.mybatisplus.annotation.TableField;
import com.maochd.cloud.common.core.domain.QueryCondition;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
@ApiModel(value = "用户查询条件", description = "用户查询条件对象")
public class UserQueryCondition extends QueryCondition {

    @ApiModelProperty(value = "用户名")
    @TableField("user_name")
    private String userName;

    @ApiModelProperty(value = "联系方式")
    @TableField("phone")
    private String phone;
}