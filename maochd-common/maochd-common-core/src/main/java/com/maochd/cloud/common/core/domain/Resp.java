package com.maochd.cloud.common.core.domain;

import com.maochd.cloud.common.core.utils.bean.BeanUtil;
import lombok.Data;

import java.io.Serializable;

/**
 * @author lenovo
 * @since 2021/4/2 13:57
 */
@Data
public class Resp<T> implements Serializable {
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
        return BeanUtil.convert(this.data, clazz);
    }

    public static <T> Resp<T> fail(String message) {
        return reset(message);
    }


    public static Boolean isOK(Resp resp) {
        return resp != null && "200".equals(resp.getCode());
    }

    private static <T> Resp<T> reset(String message) {
        Resp<T> resp = new Resp<>();
        resp.setCode("500");
        resp.setMessage(message);
        resp.setData(null);
        return resp;
    }
}
