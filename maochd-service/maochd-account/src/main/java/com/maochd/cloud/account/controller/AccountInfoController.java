package com.maochd.cloud.account.controller;


import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.maochd.cloud.api.account.domain.condition.AccountQueryCondition;
import com.maochd.cloud.account.constant.CommonConstant;
import com.maochd.cloud.account.service.AccountInfoService;
import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.api.account.domain.entity.AccountInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.math.BigDecimal;
import java.util.List;


@RestController
@Api(value = "帐户信息Controller", tags = "帐户信息Controller")
public class AccountInfoController {

    @Resource
    private AccountInfoService accountInfoService;

    @PostMapping("/list")
    @ApiOperation(value = "根据条件查询账户列表", notes = "根据条件查询账户列表")
    public R<List<AccountInfo>> list(@RequestBody AccountQueryCondition cond) {
        return R.ok(accountInfoService.list(cond));
    }

    @PostMapping("/page")
    @ApiOperation(value = "根据条件分页查询账户列表", notes = "根据条件分页查询账户列表")
    public R<Page<AccountInfo>> page(@RequestBody AccountQueryCondition cond) {
        return R.ok(accountInfoService.page(cond));
    }

    @PostMapping
    @ApiOperation(value = "添加账户", notes = "添加账户")
    public R<Boolean> add(@RequestBody AccountInfo accountInfo) {
        return R.ok(accountInfoService.add(accountInfo));
    }

    @PutMapping("/recharge/{accountCode}/{amount}")
    @ApiOperation(value = "账户充值", notes = "账户充值")
    public R<Boolean> recharge(@PathVariable("accountCode") String accountCode, @PathVariable("amount") BigDecimal amount){
        return R.ok(accountInfoService.changeAmount(accountCode, amount, CommonConstant.AMOUNT_RECHARGE));
    }

    @PutMapping("/deduct/{accountCode}/{amount}")
    @ApiOperation(value = "账户扣费", notes = "账户扣费")
    public R<Boolean> deduct(@PathVariable("accountCode") String accountCode, @PathVariable("amount") BigDecimal amount){
        return R.ok(accountInfoService.changeAmount(accountCode, amount, CommonConstant.AMOUNT_DEDUCT));
    }
}

