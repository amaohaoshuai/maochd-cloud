package com.maochd.cloud.common.core.domain;

import cn.hutool.http.HttpStatus;
import com.alibaba.fastjson.JSON;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

/**
 * @author QinKeMing
 * @since 2021/4/10 16:26
 */
@Data
public class Req<T> implements Serializable {
    private static final long serialVersionUID = 1L;

    /**
     * 消息code码: 200=成功 其他=失败
     */
    private String code;

    /**
     * 消息描述
     */
    private String message;

    /**
     * 接口唯一ID
     */
    private Long messageId;

    /**
     * 接口返回model
     */
    private T data;

    public <O> O data(Class<O> clazz) {
        return JSON.parseObject(JSON.toJSONString(this.data), clazz);
    }

    public <T> List<T> dataList(Class<T> clazz) {
        return JSON.parseArray(JSON.toJSONString(this.data), clazz);
    }

    public static Req fail(String message) {
        return reset(String.valueOf(HttpStatus.HTTP_INTERNAL_ERROR), message, null);
    }


    public static Boolean isOk(Req req) {
        return req != null && String.valueOf(HttpStatus.HTTP_OK).equals(req.getCode());
    }

    private static <T> Req<T> reset(String code, String message, T data) {
        Req<T> req = new Req<>();
        req.setCode(code);
        req.setMessage(message);
        req.setData(data);
        return req;
    }
}
