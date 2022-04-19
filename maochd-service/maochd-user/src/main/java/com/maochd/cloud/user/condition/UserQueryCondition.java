package com.maochd.cloud.user.condition;

import com.maochd.cloud.common.datasource.domain.QueryCondition;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;


@Data
@EqualsAndHashCode(callSuper = true)
@ApiModel(value = "用户查询条件", description = "用户查询条件对象")
public class UserQueryCondition extends QueryCondition {

    @ApiModelProperty(value = "用户名")
    private String username;

    @ApiModelProperty(value = "联系方式")
    private String phone;

    @ApiModelProperty(value = "状态")
    private Integer status;
}