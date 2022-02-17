package com.maochd.cloud.mq.service.impl;

import com.maochd.cloud.mq.service.MessageProducer;
import org.springframework.cloud.stream.function.StreamBridge;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class MessageProducerImpl implements MessageProducer {

    @Resource
    private StreamBridge streamBridge;

    public boolean pushMessage(String topic, Object obj) {
        return streamBridge.send(topic, obj);
    }

}
