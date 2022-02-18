package com.maochd.cloud.account.service;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.IService;
import com.maochd.cloud.system.api.account.domain.condition.AccountQueryCondition;
import com.maochd.cloud.system.api.account.domain.entity.AccountInfo;

import java.math.BigDecimal;
import java.util.List;

/**
 * <p>
 * 账户信息 服务类
 * </p>
 *
 * @author maochd
 * @since 2022-02-18
 */
public interface AccountInfoService extends IService<AccountInfo> {

    List<AccountInfo> list(AccountQueryCondition cond);
    
    Page<AccountInfo> page(AccountQueryCondition cond);

    boolean add(AccountInfo accountInfo);

    boolean changeAmount(String accountCode, BigDecimal amount, String type);
}
