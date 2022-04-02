package com.maochd.cloud.user.condition;

import com.maochd.cloud.common.core.domain.QueryCondition;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;


@Data
@EqualsAndHashCode(callSuper = true)
@ApiModel(value = "权限查询条件", description = "权限查询条件对象")
public class PermQueryCondition extends QueryCondition {

    @ApiModelProperty(value = "接口名称")
    private String interfaceName;

    @ApiModelProperty(value = "请求方式")
    private String requestType;
}