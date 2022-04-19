package com.maochd.cloud.mq.service;

public interface MessageProducer {

    /**
     * 向指定topic推送消息
     *
     * @param topic 主题
     * @param obj   消息体
     * @return boolean
     */
    boolean pushMessage(String topic, Object obj);
}