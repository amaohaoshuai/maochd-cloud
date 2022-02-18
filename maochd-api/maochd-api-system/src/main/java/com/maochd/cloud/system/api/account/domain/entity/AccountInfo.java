package com.maochd.cloud.system.api.account.domain.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@EqualsAndHashCode(callSuper = false)
@TableName("account_info")
@ApiModel(value = "AccountInfo对象", description = "账户信息")
public class AccountInfo implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "主键ID")
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty(value = "用户ID")
    @TableField("user_id")
    private Long userId;

    @ApiModelProperty(value = "账户ID")
    @TableField("account_code")
    private String accountCode;

    @ApiModelProperty(value = "账户名称")
    @TableField("account_name")
    private String accountName;

    @ApiModelProperty(value = "地址")
    @TableField("account_addr")
    private String accountAddr;

    @ApiModelProperty(value = "余额")
    @TableField("amount")
    private BigDecimal amount;

    @ApiModelProperty(value = "创建时间")
    @TableField("create_date")
    private LocalDateTime createDate;


}
