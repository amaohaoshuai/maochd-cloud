package com.maochd.cloud.common.core.domain;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;

@Data
@ApiModel(value = "角色权限DTO", description = "角色权限DTO")
public class PermRoleDto implements Serializable {

    @ApiModelProperty(value = "路径")
    private String path;

    @ApiModelProperty(value = "角色")
    private String role;
}
