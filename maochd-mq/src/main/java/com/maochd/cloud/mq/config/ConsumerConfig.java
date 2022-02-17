package com.maochd.cloud.mq.config;

import com.maochd.cloud.common.core.domain.EmailInfo;
import com.maochd.cloud.common.core.domain.SmsInfo;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.function.Consumer;

@Configuration
public class ConsumerConfig {

    @Bean
    public Consumer<EmailInfo> receiveEmail() {
        return input -> {
            System.out.println("email receive:"  + input.toString());
        };
    }

    @Bean
    public Consumer<SmsInfo> receiveSms() {
        return input -> {
            System.out.println("sms receive:"  + input.toString());
        };
    }
}
