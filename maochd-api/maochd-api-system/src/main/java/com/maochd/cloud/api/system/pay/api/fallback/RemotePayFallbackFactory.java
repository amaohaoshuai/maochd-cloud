package com.maochd.cloud.api.system.pay.api.fallback;

import com.maochd.cloud.api.system.pay.api.domain.PayInfo;
import com.maochd.cloud.api.system.pay.api.service.RemotePayService;
import com.maochd.cloud.common.core.constant.CommonConstant;
import com.maochd.cloud.common.core.domain.R;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cloud.openfeign.FallbackFactory;
import org.springframework.stereotype.Component;

import java.util.List;

@Slf4j
@Component
public class RemotePayFallbackFactory implements FallbackFactory<RemotePayService> {
    @Override
    public RemotePayService create(Throwable cause) {
        return new RemotePayService() {
            @Override
            public R<List<PayInfo>> list() {
                return R.fail(CommonConstant.EXCEPTION);
            }
        };
    }
}
