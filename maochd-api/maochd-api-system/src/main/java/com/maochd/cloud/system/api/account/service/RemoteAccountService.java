package com.maochd.cloud.system.api.account.service;

import com.maochd.cloud.common.core.constant.ServiceContextConstant;
import com.maochd.cloud.common.core.constant.ServiceNameConstant;
import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.system.api.account.domain.condition.AccountQueryCondition;
import com.maochd.cloud.system.api.account.domain.entity.AccountInfo;
import com.maochd.cloud.system.api.account.fallback.RemoteAccountFallbackFactory;
import io.swagger.annotations.ApiOperation;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.math.BigDecimal;
import java.util.List;

@FeignClient(contextId = ServiceContextConstant.ACCOUNT_CONTEXT_ID,
        value = ServiceNameConstant.ACCOUNT_SERVER,
        fallbackFactory = RemoteAccountFallbackFactory.class)
public interface RemoteAccountService {

    @PostMapping("/list")
    @ApiOperation(value = "根据条件查询账户列表", notes = "根据条件查询账户列表")
    R<List<AccountInfo>> list(@RequestBody AccountQueryCondition cond);

    @PostMapping
    @ApiOperation(value = "添加账户", notes = "添加账户")
    R<Boolean> add(@RequestBody AccountInfo accountInfo);

    @PutMapping("/recharge/{accountCode}/{amount}")
    @ApiOperation(value = "账户充值", notes = "账户充值")
    R<Boolean> recharge(@PathVariable("accountCode") String accountCode, @PathVariable("amount") BigDecimal amount);

    @PutMapping("/deduct/{accountCode}/{amount}")
    @ApiOperation(value = "账户扣费", notes = "账户扣费")
    R<Boolean> deduct(@PathVariable("accountCode") String accountCode, @PathVariable("amount") BigDecimal amount);

}
