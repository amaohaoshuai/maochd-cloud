package com.maochd.cloud.email.service.impl;

import com.maochd.cloud.common.core.domain.EmailInfo;
import com.maochd.cloud.common.core.utils.file.FileUtil;
import com.maochd.cloud.email.service.EmailService;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeUtility;
import java.io.File;

@Service
public class EmailServiceImpl implements EmailService {

    @Value("${spring.mail.username}")
    private String from;

    @Resource
    private JavaMailSender mailSender;

    @Override
    public void sendTextEmail(EmailInfo emailInfo) {
        this.sendEmail(emailInfo);
    }

    @Override
    public void sendHtmlEmail(EmailInfo emailInfo) {
        this.sendEmail(emailInfo);
    }

    @Override
    public void sendMultipleFileEmail(String[] to, String subject, String content, MultipartFile[] multipartFiles) {
        this.sendEmail(EmailInfo.builder()
                .to(to)
                .subject(subject)
                .content(content)
                .attachment(FileUtil.batchMultipartFileToFile(multipartFiles))
                .build());
    }

    @Override
    public void apiSendAttachmentEmail(EmailInfo emailInfo) {
        this.sendEmail(emailInfo);
    }

    @SneakyThrows
    private void sendEmail(EmailInfo emailInfo) {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
        // 谁发
        helper.setFrom(from);
        // 谁要接收
        helper.setTo(emailInfo.getTo());
        // 邮件主题
        helper.setSubject(emailInfo.getSubject());
        // 邮件内容  true 表示带有附件或html
        helper.setText(emailInfo.getContent(), true);
        if (emailInfo.getAttachment() != null) {
            for (File attachment : emailInfo.getAttachment()) {
                FileSystemResource file = new FileSystemResource(attachment);
                String filename = file.getFilename();
                assert filename != null;
                helper.addAttachment(MimeUtility.encodeWord(filename, "UTF-8", "B"), file);
            }
        }
        mailSender.send(message);
    }
}
