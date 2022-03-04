package com.maochd.cloud.user.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableField;

import java.io.Serializable;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
@TableName("perm")
@ApiModel(value = "Perm对象", description = "权限")
public class Perm implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty(value = "路径")
    @TableField("perm_path")
    private String permPath;

    @ApiModelProperty(value = "接口名称")
    @TableField("interface_name")
    private String interfaceName;

    @ApiModelProperty(value = "请求方式")
    @TableField("request_type")
    private String requestType;

}
