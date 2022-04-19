package com.maochd.cloud.user.condition;

import com.maochd.cloud.common.datasource.domain.QueryCondition;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;


@Data
@EqualsAndHashCode(callSuper = true)
@ApiModel(value = "角色查询条件", description = "角色查询条件对象")
public class RoleQueryCondition extends QueryCondition {

    @ApiModelProperty(value = "角色名称")
    private String roleName;

    @ApiModelProperty(value = "角色标识")
    private String roleMark;
}