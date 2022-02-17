package com.maochd.cloud.mq.service;

public interface MessageProducer {

    boolean pushMessage(String topic, Object obj);
}