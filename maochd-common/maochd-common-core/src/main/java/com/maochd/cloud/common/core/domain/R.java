package com.maochd.cloud.common.core.domain;

import com.maochd.cloud.common.core.constant.CommonConstant;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;

@Data
@ApiModel(value = "统一返回对象", description = "统一返回对象")
public class R<T> implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty("状态码")
    private int code;

    @ApiModelProperty("返回信息（一般指错误信息）")
    private String msg;

    @ApiModelProperty("返回数据")
    private T data;

    public static Boolean isOk(R r) {
        return r != null && r.getCode() == CommonConstant.R_SUCCESS;
    }

    public static Boolean isNotOk(R r) {
        return !isOk(r);
    }

    public static <T> R<T> ok() {
        return restResult(null, CommonConstant.R_SUCCESS, "操作成功");
    }

    public static <T> R<T> ok(T data) {
        return restResult(data, CommonConstant.R_SUCCESS, null);
    }

    public static <T> R<T> ok(T data, String msg) {
        return restResult(data, CommonConstant.R_SUCCESS, msg);
    }

    public static <T> R<T> fail() {
        return restResult(null, CommonConstant.R_FAIL, null);
    }

    public static <T> R<T> fail(String msg) {
        return restResult(null, CommonConstant.R_FAIL, msg);
    }

    public static <T> R<T> fail(T data) {
        return restResult(data, CommonConstant.R_FAIL, null);
    }

    public static <T> R<T> fail(T data, String msg) {
        return restResult(data, CommonConstant.R_FAIL, msg);
    }

    public static <T> R<T> fail(int code, String msg) {
        return restResult(null, code, msg);
    }

    private static <T> R<T> restResult(T data, int code, String msg) {
        R<T> apiResult = new R<>();
        apiResult.setCode(code);
        apiResult.setData(data);
        apiResult.setMsg(msg);
        return apiResult;
    }
}
