package com.maochd.cloud.system.api.pay.service;

import com.maochd.cloud.system.api.pay.domain.AmountVo;
import com.maochd.cloud.common.core.constant.ServiceNameConstant;
import com.maochd.cloud.common.core.domain.R;
import io.swagger.annotations.ApiOperation;
import org.springframework.cloud.openfeign.FeignClient;
import com.maochd.cloud.system.api.pay.fallback.RemotePayFallbackFactory;
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
    @ApiOperation(value = "扣除金额", notes = "扣除金额")
    R<Boolean> subtractAmount(@RequestBody AmountVo amountVo);
}
