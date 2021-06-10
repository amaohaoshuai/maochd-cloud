package com.maochd.cloud.maochd.common.domain;

import cn.hutool.core.util.StrUtil;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 * 查询条件基类
 */
@Data
public class QueryCondition implements Serializable {

    /**
     * 每页几条
     */
    @ApiModelProperty(value = "每页几条")
    private Integer pageSize;

    /**
     * 当前页码
     */
    @ApiModelProperty(value = "当前页码")
    private Integer pageNum;

    /**
     * 是否按创建时间降序(字符串)
     */
    @ApiModelProperty(value = "是否按创建时间降序(字符串)")
    private String timeDesc;

    /**
     * 关键字（模糊搜索
     */
    @ApiModelProperty(value = "关键字（模糊搜索")
    private String keyword;

    public static Map<String, String> kwMap = new LinkedHashMap<String, String>() {{
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
