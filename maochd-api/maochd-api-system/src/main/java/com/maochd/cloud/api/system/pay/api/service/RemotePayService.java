package com.maochd.cloud.api.system.pay.api.service;

import com.maochd.cloud.api.system.pay.api.domain.AmountVo;
import com.maochd.cloud.common.core.constant.ServiceNameConstant;
import com.maochd.cloud.common.core.domain.R;
import org.springframework.cloud.openfeign.FeignClient;
import com.maochd.cloud.api.system.pay.api.fallback.RemotePayFallbackFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(contextId = "remotePayService",
        value = ServiceNameConstant.PAY_SERVER,
        fallbackFactory = RemotePayFallbackFactory.class)
public interface RemotePayService {

    /**
     * 扣除金额
     *
     * @param amountVo
     * @return
     */
    @PostMapping("/userAccount/subtractAmount")
    public R<Boolean> subtractAmount(@RequestBody AmountVo amountVo);
}
