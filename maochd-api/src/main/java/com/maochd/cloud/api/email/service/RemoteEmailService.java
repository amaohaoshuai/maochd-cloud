package com.maochd.cloud.api.email.service;

import com.maochd.cloud.api.email.fallback.RemoteEmailFallbackFactory;
import com.maochd.cloud.common.core.constant.ServiceContextConstant;
import com.maochd.cloud.common.core.constant.ServiceNameConstant;
import com.maochd.cloud.common.core.domain.EmailInfo;
import com.maochd.cloud.common.core.domain.R;
import io.swagger.annotations.ApiOperation;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(contextId = ServiceContextConstant.EMAIL_CONTEXT_ID,
        value = ServiceNameConstant.EMAIL_SERVER,
        fallbackFactory = RemoteEmailFallbackFactory.class)
public interface RemoteEmailService {
    @PostMapping("/send/text")
    @ApiOperation(value = "发送文本邮件", notes = "发送文本邮件")
    R<?> sendTextEmail(@RequestBody EmailInfo emailInfo);

    @PostMapping("/send/html")
    @ApiOperation(value = "发送HTML邮件", notes = "发送HTML邮件")
    R<?> sendHtmlEmail(@RequestBody EmailInfo emailInfo);

    @PostMapping("/api/send/attachment")
    @ApiOperation(value = "发送附件邮件（内部调用）", notes = "发送单个附件邮件（内部调用）")
    R<?> apiSendAttachmentEmail(@RequestBody EmailInfo emailInfo);

}
