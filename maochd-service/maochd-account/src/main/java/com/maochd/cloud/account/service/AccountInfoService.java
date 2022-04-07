package com.maochd.cloud.account.service;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.IService;
import com.maochd.cloud.api.account.domain.condition.AccountQueryCondition;
import com.maochd.cloud.api.account.domain.entity.AccountInfo;

import java.math.BigDecimal;
import java.util.List;


public interface AccountInfoService extends IService<AccountInfo> {

    /**
     * 根据条件查询账户列表
     *
     * @param cond 查询条件
     * @return list
     */
    List<AccountInfo> list(AccountQueryCondition cond);

    /**
     * 根据条件分页查询账户列表
     *
     * @param cond 查询条件
     * @return page
     */
    Page<AccountInfo> page(AccountQueryCondition cond);

    /**
     * 添加账户
     *
     * @param accountInfo 账户信息
     * @return boolean
     */
    boolean add(AccountInfo accountInfo);

    /**
     * 账户充值/账户扣费
     *
     * @param accountCode 账户账号
     * @param amount      金额
     * @param type        类型（充值/扣费）
     * @return boolean
     */
    boolean changeAmount(String accountCode, BigDecimal amount, String type);
}
