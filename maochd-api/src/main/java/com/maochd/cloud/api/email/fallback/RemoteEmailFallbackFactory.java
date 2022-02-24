package com.maochd.cloud.api.email.fallback;


import com.maochd.cloud.api.email.service.RemoteEmailService;
import com.maochd.cloud.common.core.constant.CommonConstant;
import com.maochd.cloud.common.core.domain.EmailInfo;
import com.maochd.cloud.common.core.domain.R;
import feign.hystrix.FallbackFactory;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class RemoteEmailFallbackFactory implements FallbackFactory<RemoteEmailService> {
    @Override
    public RemoteEmailService create(Throwable cause) {
        log.error("邮件服务调用失败:{}", cause.getMessage());

        return new RemoteEmailService() {
            @Override
            public R<?> sendTextEmail(EmailInfo emailInfo) {
                return R.fail(CommonConstant.EXCEPTION);
            }

            @Override
            public R<?> sendHtmlEmail(EmailInfo emailInfo) {
                return R.fail(CommonConstant.EXCEPTION);
            }

            @Override
            public R<?> apiSendAttachmentEmail(EmailInfo emailInfo) {
                return R.fail(CommonConstant.EXCEPTION);
            }
        };
    }
}
