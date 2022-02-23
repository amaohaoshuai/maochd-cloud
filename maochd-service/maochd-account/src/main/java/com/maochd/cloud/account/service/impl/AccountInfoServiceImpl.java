package com.maochd.cloud.account.service.impl;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.util.StrUtil;
import com.alibaba.fastjson.JSONArray;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.maochd.cloud.account.constant.CommonConstant;
import com.maochd.cloud.account.constant.RedisConstant;
import com.maochd.cloud.account.mapper.AccountInfoMapper;
import com.maochd.cloud.account.service.AccountInfoService;
import com.maochd.cloud.common.core.exception.BaseException;
import com.maochd.cloud.common.redis.annotation.RedisLock;
import com.maochd.cloud.common.redis.service.RedisService;
import com.maochd.cloud.api.account.domain.condition.AccountQueryCondition;
import com.maochd.cloud.api.account.domain.entity.AccountInfo;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.math.BigDecimal;
import java.util.List;


@Service
public class AccountInfoServiceImpl extends ServiceImpl<AccountInfoMapper, AccountInfo> implements AccountInfoService {

    @Resource
    private RedisService redisService;

    @Override
    public List<AccountInfo> list(AccountQueryCondition cond) {
        List<AccountInfo> accounts = JSONArray.parseArray(redisService.get(RedisConstant.KEY_ACCOUNT_LIST), AccountInfo.class);
        if (CollUtil.isEmpty(accounts)) {
            accounts = this.list(Wrappers.<AccountInfo>lambdaQuery()
                    .like(StrUtil.isNotBlank(cond.getAccountName()), AccountInfo::getAccountName, cond.getAccountName()));
            redisService.set(RedisConstant.KEY_ACCOUNT_LIST, accounts);
        }
        return accounts;
    }

    @Override
    public Page<AccountInfo> page(AccountQueryCondition cond) {
        return this.page(new Page<>(cond.current(), cond.size()), Wrappers.<AccountInfo>lambdaQuery()
                .like(StrUtil.isNotBlank(cond.getAccountName()), AccountInfo::getAccountName, cond.getAccountName()));
    }

    @Override
    @RedisLock
    public boolean add(AccountInfo accountInfo) {
        boolean result = this.save(accountInfo);
        String goods = redisService.get(RedisConstant.KEY_ACCOUNT_LIST);
        if (StrUtil.isNotBlank(goods)) {
            redisService.del(RedisConstant.KEY_ACCOUNT_LIST);
        }
        return result;
    }

    @Override
    @RedisLock
    @Transactional
    public boolean changeAmount(String accountCode, BigDecimal amount, String type) {
        AccountInfo accountInfo = this.getOne(Wrappers.<AccountInfo>lambdaQuery()
                .eq(AccountInfo::getAccountCode, accountCode));
        if (accountInfo == null) {
            throw new BaseException("当前账户不存在，请检查后再试");
        }
        boolean result = false;
        if (CommonConstant.AMOUNT_RECHARGE.equals(type)) {
            result = this.update(Wrappers.<AccountInfo>lambdaUpdate()
                    .set(AccountInfo::getAmount, accountInfo.getAmount().add(amount))
                    .eq(AccountInfo::getAccountCode, accountCode));
        } else if (CommonConstant.AMOUNT_DEDUCT.equals(type)) {
            if (accountInfo.getAmount().compareTo(amount) < 0) {
                throw new BaseException("当前账户余额不足");
            }
            result = this.update(Wrappers.<AccountInfo>lambdaUpdate()
                    .set(AccountInfo::getAmount, accountInfo.getAmount().subtract(amount))
                    .eq(AccountInfo::getAccountCode, accountCode));
        }
        return result;
    }
}
