package com.maochd.cloud.email.controller;

import com.maochd.cloud.common.core.domain.EmailInfo;
import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.email.service.EmailService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;

@RestController
@Api(value = "邮件Controller", tags = "邮件Controller")
public class EmailController {

    @Resource
    private EmailService emailService;

    @PostMapping("/send/text")
    @ApiOperation(value = "发送文本邮件", notes = "发送文本邮件")
    public R<?> sendTextEmail(@RequestBody EmailInfo emailInfo) {
        emailService.sendTextEmail(emailInfo);
        return R.ok();
    }

    @PostMapping("/send/html")
    @ApiOperation(value = "发送HTML邮件", notes = "发送HTML邮件")
    public R<?> sendHtmlEmail(@RequestBody EmailInfo emailInfo) {
        emailService.sendHtmlEmail(emailInfo);
        return R.ok();
    }

    @PostMapping("/api/send/attachment")
    @ApiOperation(value = "发送附件邮件（内部调用）", notes = "发送单个附件邮件（内部调用）")
    public R<?> apiSendAttachmentEmail(@RequestBody EmailInfo emailInfo) {
        emailService.apiSendAttachmentEmail(emailInfo);
        return R.ok();
    }

    @PostMapping("/web/send/attachment")
    @ApiOperation(value = "发送附件邮件（Web调用）", notes = "发送多个附件邮件（Web调用）")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "files", value = "附件数组", required = true),
            @ApiImplicitParam(name = "to", value = "收件人数组", required = true),
            @ApiImplicitParam(name = "subject", value = "邮件主题", required = true),
            @ApiImplicitParam(name = "content", value = "邮件文本", required = true)
    })
    public R<?> batchSendAttachmentEmail(@RequestParam("files") MultipartFile[] multipartFiles,
                                         @RequestParam("to") String[] to,
                                         @RequestParam("subject") String subject,
                                         @RequestParam("content") String content) {
        emailService.sendMultipleFileEmail(to, subject, content, multipartFiles);
        return R.ok();
    }
}
