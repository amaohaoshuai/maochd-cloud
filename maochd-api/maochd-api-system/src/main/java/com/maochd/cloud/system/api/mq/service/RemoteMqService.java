package com.maochd.cloud.system.api.mq.service;

import com.maochd.cloud.common.core.constant.ServiceNameConstant;
import com.maochd.cloud.common.core.domain.EmailInfo;
import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.common.core.domain.SmsInfo;
import com.maochd.cloud.system.api.mq.fallback.RemoteMqFallbackFactory;
import io.swagger.annotations.ApiOperation;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(contextId = "remoteMqService",
        value = ServiceNameConstant.MQ_SERVER,
        fallbackFactory = RemoteMqFallbackFactory.class)
public interface RemoteMqService {

    @PostMapping("/producer/push/email")
    @ApiOperation(value = "推送邮件", notes = "推送邮件")
    R<?> pushEmail(@RequestBody EmailInfo emailInfo);

    @PostMapping("/producer/push/sms")
    @ApiOperation(value = "推送短信", notes = "推送短信")
    R<?> pushSms(@RequestBody SmsInfo smsInfo);
}