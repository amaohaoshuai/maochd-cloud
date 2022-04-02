package com.maochd.cloud.common.core.domain;

import cn.hutool.http.HttpStatus;
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
    private Integer code;

    @ApiModelProperty("业务状态码")
    private String bizCode;

    @ApiModelProperty("返回信息（一般指错误信息）")
    private String msg;

    @ApiModelProperty("返回业务信息（一般指业务错误信息）")
    private String bizMsg;

    @ApiModelProperty("返回数据")
    private T data;


    public static Boolean isOk(R<?> r) {
        return r != null && r.getCode() == HttpStatus.HTTP_OK;
    }

    public static Boolean isNotOk(R<?> r) {
        return !isOk(r);
    }

    public static <T> R<T> ok() {
        return restResult(null, HttpStatus.HTTP_OK, CommonConstant.OK_MSG,
                BizResultCode.SUCCESS.getCode(), BizResultCode.SUCCESS.getMsg());
    }

    public static <T> R<T> ok(T data) {
        return restResult(data, HttpStatus.HTTP_OK, null,
                BizResultCode.SUCCESS.getCode(), BizResultCode.SUCCESS.getMsg());
    }

    public static <T> R<T> ok(T data, String msg) {
        return restResult(data, HttpStatus.HTTP_OK, msg,
                BizResultCode.SUCCESS.getCode(), BizResultCode.SUCCESS.getMsg());
    }

    public static <T> R<T> ok(T data, String msg, BizResultCode bizResultCode) {
        return restResult(data, HttpStatus.HTTP_OK, msg,
                bizResultCode.getCode(), bizResultCode.getMsg());
    }

    public static <T> R<T> fail() {
        return restResult(null, HttpStatus.HTTP_INTERNAL_ERROR, CommonConstant.FAIL_MSG,
                BizResultCode.ERROR.getCode(), BizResultCode.ERROR.getMsg());
    }

    public static <T> R<T> fail(String msg) {
        return restResult(null, HttpStatus.HTTP_INTERNAL_ERROR, msg,
                BizResultCode.ERROR.getCode(), BizResultCode.ERROR.getMsg());
    }

    public static <T> R<T> fail(String msg, BizResultCode bizResultCode) {
        return restResult(null, HttpStatus.HTTP_INTERNAL_ERROR, msg,
                bizResultCode.getCode(), bizResultCode.getMsg());
    }

    public static <T> R<T> fail(T data) {
        return restResult(data, HttpStatus.HTTP_INTERNAL_ERROR, CommonConstant.FAIL_MSG,
                BizResultCode.ERROR.getCode(), BizResultCode.ERROR.getMsg());
    }

    public static <T> R<T> fail(T data, BizResultCode bizResultCode) {
        return restResult(data, HttpStatus.HTTP_INTERNAL_ERROR, CommonConstant.FAIL_MSG,
                bizResultCode.getCode(), bizResultCode.getMsg());
    }

    public static <T> R<T> fail(T data, String msg) {
        return restResult(data, HttpStatus.HTTP_INTERNAL_ERROR, msg,
                BizResultCode.ERROR.getCode(), BizResultCode.ERROR.getMsg());
    }

    public static <T> R<T> fail(T data, String msg, BizResultCode bizResultCode) {
        return restResult(data, HttpStatus.HTTP_INTERNAL_ERROR, msg,
                bizResultCode.getCode(), bizResultCode.getMsg());
    }

    public static <T> R<T> fail(int code, String msg) {
        return restResult(null, code, msg,
                BizResultCode.ERROR.getCode(), BizResultCode.ERROR.getMsg());
    }

    public static <T> R<T> fail(int code, String msg, BizResultCode bizResultCode) {
        return restResult(null, code, msg,
                bizResultCode.getCode(), bizResultCode.getMsg());
    }

    private static <T> R<T> restResult(T data, int code, String msg, String bizCode, String bizMsg) {
        R<T> apiResult = new R<>();
        apiResult.setCode(code);
        apiResult.setData(data);
        apiResult.setMsg(msg);
        apiResult.setBizCode(bizCode);
        apiResult.setBizMsg(bizMsg);
        return apiResult;
    }
}
