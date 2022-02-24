package com.maochd.cloud.mq.service.impl;

import com.maochd.cloud.api.email.service.RemoteEmailService;
import com.maochd.cloud.common.core.domain.EmailInfo;
import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.mq.service.MessageConsumer;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class MessageConsumerImpl implements MessageConsumer {

    @Resource
    private RemoteEmailService remoteEmailService;

    @Override
    public R<?> sendEmail(EmailInfo emailInfo) {
        return remoteEmailService.apiSendAttachmentEmail(emailInfo);
    }

}
