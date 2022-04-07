package com.maochd.cloud.mq.config;

import com.maochd.cloud.common.core.domain.EmailInfo;
import com.maochd.cloud.common.core.domain.SmsInfo;
import com.maochd.cloud.mq.service.MessageConsumer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.annotation.Resource;
import java.util.function.Consumer;

@Configuration
public class ConsumerConfig {

    @Resource
    private MessageConsumer messageConsumer;

    @Bean
    public Consumer<EmailInfo> receiveEmail() {
        return input -> messageConsumer.sendEmail(input);
    }

    @Bean
    public Consumer<SmsInfo> receiveSms() {
        return input -> System.out.println("sms receive:" + input.toString());
    }
}
