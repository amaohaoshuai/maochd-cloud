package com.maochd.cloud.email.service;

import com.maochd.cloud.common.core.domain.EmailInfo;
import org.springframework.web.multipart.MultipartFile;

public interface EmailService {

    /**
     * 发送文本邮件
     *
     * @param emailInfo 邮件信息
     */
    void sendTextEmail(EmailInfo emailInfo);

    /**
     * 发送Html邮件
     *
     * @param emailInfo 邮件信息
     */
    void sendHtmlEmail(EmailInfo emailInfo);


    /**
     * 发送附件邮件（Web调用）
     *
     * @param to             收件人数组
     * @param subject        邮件主题
     * @param content        邮件文本
     * @param multipartFiles 附件数组
     */
    void sendMultipleFileEmail(String[] to, String subject, String content, MultipartFile[] multipartFiles);

    /**
     * 发送附件邮件（内部调用）
     *
     * @param emailInfo 邮件信息
     */
    void apiSendAttachmentEmail(EmailInfo emailInfo);

}
