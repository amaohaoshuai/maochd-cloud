package com.maochd.cloud.mq.service;

import com.maochd.cloud.common.core.domain.EmailInfo;
import com.maochd.cloud.common.core.domain.R;

public interface MessageConsumer {

    /**
     * 发送邮件
     *
     * @param emailInfo 邮件信息
     * @return r
     */
    R<?> sendEmail(EmailInfo emailInfo);
}