package com.maochd.cloud.common.core.utils.bean;

import com.maochd.cloud.common.core.exception.BaseException;
import lombok.experimental.UtilityClass;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@UtilityClass
public class BeanUtil {
    /**
     * 对象转换
     *
     * @param data         数据来源对象
     * @param convertClass 要转换的类型
     */
    public <T> T convert(Object data, Class<T> convertClass) {
        if (data == null) {
            return null;
        }
        try {
            T result = convertClass.newInstance();
            cn.hutool.core.bean.BeanUtil.copyProperties(data, result);
            return result;
        } catch (Exception e) {
            return null;
        }
    }

    /**
     * 对象转换
     *
     * @param data         数据来源对象
     * @param convertClass 要转换的类型
     * @param ignore       要忽略的字段
     */
    public <T> T convert(Object data, Class<T> convertClass, String... ignore) {
        if (data == null) {
            return null;
        }
        try {
            T result = convertClass.newInstance();
            cn.hutool.core.bean.BeanUtil.copyProperties(data, result, ignore);
            return result;
        } catch (Exception e) {
            return null;
        }
    }

    /**
     * 集合转换
     *
     * @param dataList     list集合数据
     * @param convertClass 要转换的类型
     */
    public <T> List<T> convert(Collection<?> dataList, Class<T> convertClass) {
        if (dataList == null) {
            return null;
        }
        try {
            List<T> resultData = new ArrayList<>();
            for (Object item : dataList) {
                T result = convertClass.newInstance();
                cn.hutool.core.bean.BeanUtil.copyProperties(item, result);
                resultData.add(result);
            }
            return resultData;
        } catch (Exception e) {
            throw new BaseException("数据解析异常");
        }
    }
}
