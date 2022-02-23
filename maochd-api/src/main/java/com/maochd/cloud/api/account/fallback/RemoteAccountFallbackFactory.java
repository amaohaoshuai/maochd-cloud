package com.maochd.cloud.api.account.fallback;


import com.maochd.cloud.common.core.constant.CommonConstant;
import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.api.account.domain.condition.AccountQueryCondition;
import com.maochd.cloud.api.account.domain.entity.AccountInfo;
import com.maochd.cloud.api.account.service.RemoteAccountService;
import feign.hystrix.FallbackFactory;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.List;

@Slf4j
@Component
public class RemoteAccountFallbackFactory implements FallbackFactory<RemoteAccountService> {
    @Override
    public RemoteAccountService create(Throwable cause) {
        log.error("账户服务调用失败:{}", cause.getMessage());

        return new RemoteAccountService() {
            @Override
            public R<List<AccountInfo>> list(AccountQueryCondition cond) {
                return R.fail(CommonConstant.EXCEPTION);
            }

            @Override
            public R<Boolean> add(AccountInfo accountInfo) {
                return R.fail(CommonConstant.EXCEPTION);
            }

            @Override
            public R<Boolean> recharge(String accountCode, BigDecimal amount) {
                return R.fail(CommonConstant.EXCEPTION);
            }

            @Override
            public R<Boolean> deduct(String accountCode, BigDecimal amount) {
                return R.fail(CommonConstant.EXCEPTION);
            }
        };
    }
}
