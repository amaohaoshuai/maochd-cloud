package com.maochd.cloud.common.core.domain;

import cn.hutool.core.util.StrUtil;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;
import java.util.LinkedHashMap;
import java.util.Map;


@Data
@ApiModel(value = "查询条件基类", description = "提供最基础的查询条件")
public class QueryCondition implements Serializable {

    @ApiModelProperty(value = "每页几条")
    private Integer pageSize;

    @ApiModelProperty(value = "当前页码")
    private Integer pageNum;

    @ApiModelProperty(value = "是否按创建时间降序(字符串)")
    private String timeDesc;

    @ApiModelProperty(value = "关键字(模糊搜索)")
    private String keyword;

    private static Map<String, String> kwMap = new LinkedHashMap<String, String>() {{
        put("\\", "\\\\");
        put("_", "\\_");
        put("%", "\\%");
    }};

    public String getKeyword() {
        if (StrUtil.isBlank(this.keyword)) {
            return this.keyword;
        }
        kwMap.forEach((k, v) -> this.keyword = StrUtil.replace(this.keyword, k, v));
        return this.keyword;
    }

    public Integer size() {
        return pageSize == null ? 10 : pageSize;
    }

    public Integer current() {
        return pageNum == null ? 1 : pageNum;
    }
}
