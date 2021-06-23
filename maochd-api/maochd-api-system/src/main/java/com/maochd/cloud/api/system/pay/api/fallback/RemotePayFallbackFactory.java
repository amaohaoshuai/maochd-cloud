package com.maochd.cloud.api.system.pay.api.fallback;

import com.maochd.cloud.api.system.pay.api.domain.AmountVo;
import com.maochd.cloud.api.system.pay.api.service.RemotePayService;
import com.maochd.cloud.common.core.constant.CommonConstant;
import com.maochd.cloud.common.core.domain.R;
import feign.hystrix.FallbackFactory;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class RemotePayFallbackFactory implements FallbackFactory<RemotePayService> {
    @Override
    public RemotePayService create(Throwable cause) {
        return new RemotePayService() {
            @Override
            public R<Boolean> subtractAmount(AmountVo amountVo) {
                return R.fail(CommonConstant.EXCEPTION);
            }
        };
    }
}
