package com.maochd.cloud.mq.controller;

import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.mq.constant.QueueConst;
import com.maochd.cloud.mq.service.MessageProducer;
import com.maochd.cloud.common.core.domain.EmailInfo;
import com.maochd.cloud.common.core.domain.SmsInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;


@RestController
@RequestMapping("/producer")
@Api(value = "消息生产者Controller", tags = "消息生产者Controller")
public class ProducerController {

    @Resource
    private MessageProducer producer;

    @PostMapping("/push/email")
    @ApiOperation(value = "推送邮件", notes = "推送邮件")
    public R<?> pushEmail(@RequestBody EmailInfo emailInfo) {
        return R.ok(producer.pushMessage(QueueConst.EMAIL_OUT_TOPIC, emailInfo));
    }

    @PostMapping("/push/sms")
    @ApiOperation(value = "推送短信", notes = "推送短信")
    public R<?> pushSms(@RequestBody SmsInfo smsInfo) {
        return R.ok(producer.pushMessage(QueueConst.SMS_OUT_TOPIC, smsInfo));
    }
}
