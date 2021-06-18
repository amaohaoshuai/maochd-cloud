package com.maochd.cloud.pay.service;

import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.pay.domain.vo.AmountVo;
import com.maochd.cloud.pay.entity.UserAccount;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 * 账户 服务类
 * </p>
 *
 * @author maochd
 * @since 2021-06-17
 */
public interface UserAccountService extends IService<UserAccount> {

    R<Boolean> subtractAmount(AmountVo amountVo);
}
