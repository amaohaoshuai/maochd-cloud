package com.maochd.cloud.common.core.constant;

import cn.hutool.http.HttpStatus;

public interface CommonConstant {

    String EXCEPTION = "对不起，出错了";

    String DATA_ERROR = "提交失败，请检查提交信息是否有误！";

    /**
     * 统一返回对象成功状态码
     */
    int R_SUCCESS = HttpStatus.HTTP_OK;

    /**
     * 统一返回对象失败状态码
     */
    int R_FAIL = HttpStatus.HTTP_INTERNAL_ERROR;

}
