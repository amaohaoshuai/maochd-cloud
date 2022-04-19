package com.maochd.cloud.common.datasource.domain;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.metadata.OrderItem;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;


@Data
@ApiModel(value = "查询条件基类", description = "提供最基础的查询条件")
public class QueryCondition implements Serializable {

    @ApiModelProperty(value = "每页几条")
    private Integer pageSize;

    @ApiModelProperty(value = "当前页码")
    private Integer pageNum;

    @ApiModelProperty(value = "关键字(模糊搜索)")
    private String keyword;

    @ApiModelProperty(value = "排序字段数组")
    private List<OrderItem> orderItems;

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

    /**
     * 分页+排序封装
     *
     * @return 分页对象
     */
    public <T> Page<T> orderWithPage() {
        Page<T> page = new Page<>(current(), size());
        if (CollUtil.isNotEmpty(orderItems)) {
            orderItems.forEach(f-> f.setColumn(StrUtil.toUnderlineCase(f.getColumn()).toLowerCase(Locale.ROOT)));
            page.addOrder(orderItems);
        }
        return page;
    }

    /**
     * 不分页+排序封装
     *
     * @return 分页对象
     */
    public <T> Page<T> orderWithoutPage() {
        Page<T> page = new Page<>();
        page.setSize(-1);
        if (CollUtil.isNotEmpty(orderItems)) {
            orderItems.forEach(f-> f.setColumn(StrUtil.toUnderlineCase(f.getColumn()).toLowerCase(Locale.ROOT)));
            page.addOrder(orderItems);
        }
        return page;
    }
}
