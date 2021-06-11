package com.maochd.cloud.api.system.pay.api.service;

import com.maochd.cloud.api.system.pay.api.domain.PayInfo;
import com.maochd.cloud.common.core.constant.ServiceNameConstant;
import com.maochd.cloud.common.core.domain.R;
import io.swagger.annotations.ApiOperation;
import org.springframework.cloud.openfeign.FeignClient;
import com.maochd.cloud.api.system.pay.api.fallback.RemotePayFallbackFactory;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@FeignClient(contextId = "remotePayService",
        value = ServiceNameConstant.PAY_SERVER,
        fallbackFactory = RemotePayFallbackFactory.class)
public interface RemotePayService {

    @GetMapping("/pay/list")
    @ApiOperation(value = "支付列表", notes = "支付列表")
    R<List<PayInfo>> list();
}
