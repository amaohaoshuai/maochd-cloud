package com.maochd.cloud.common.core.domain;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
@ApiModel(value = "角色权限DTO", description = "角色权限DTO")
public class PermRoleDto {

    @ApiModelProperty(value = "路径")
    private String path;

    @ApiModelProperty(value = "角色")
    private String role;
}
