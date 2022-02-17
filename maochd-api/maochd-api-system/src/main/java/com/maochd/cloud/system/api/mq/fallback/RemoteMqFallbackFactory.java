package com.maochd.cloud.system.api.mq.fallback;

import com.maochd.cloud.common.core.constant.CommonConstant;
import com.maochd.cloud.common.core.domain.EmailInfo;
import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.common.core.domain.SmsInfo;
import com.maochd.cloud.system.api.mq.service.RemoteMqService;
import feign.hystrix.FallbackFactory;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class RemoteMqFallbackFactory implements FallbackFactory<RemoteMqService> {
    @Override
    public RemoteMqService create(Throwable cause) {
        log.error("MQ服务调用失败:{}", cause.getMessage());

        return new RemoteMqService() {
            @Override
            public R<?> pushEmail(EmailInfo emailInfo) {
                return R.fail(CommonConstant.EXCEPTION);
            }

            @Override
            public R<?> pushSms(SmsInfo smsInfo) {
                return R.fail(CommonConstant.EXCEPTION);
            }
        };
    }
}
