//package com.maochd.cloud.pay.service.impl;
//
//import com.baomidou.mybatisplus.core.toolkit.Wrappers;
//import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
//import com.maochd.cloud.common.core.domain.R;
//import com.maochd.cloud.pay.domain.vo.AmountVo;
//import com.maochd.cloud.pay.entity.UserAccount;
//import com.maochd.cloud.pay.mapper.UserAccountMapper;
//import com.maochd.cloud.pay.service.UserAccountService;
//import com.maochd.cloud.system.api.order.domain.cond.OrderCondition;
//import com.maochd.cloud.system.api.order.service.RemoteOrderService;
//import io.seata.core.context.RootContext;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Propagation;
//import org.springframework.transaction.annotation.Transactional;
//
//import javax.annotation.Resource;
//import java.math.BigDecimal;
//
///**
// * <p>
// * 账户 服务实现类
// * </p>
// *
// * @author maochd
// * @since 2021-06-17
// */
//@Service
//public class UserAccountServiceImpl extends ServiceImpl<UserAccountMapper, UserAccount> implements UserAccountService {
//
//    @Resource
//    private RemoteOrderService remoteOrderService;
//
//    @Override
//    @Transactional(propagation = Propagation.REQUIRES_NEW)
//    public R<Boolean> subtractAmount(AmountVo amountVo) {
//        System.out.println("XID:" + RootContext.getXID());
//        UserAccount userAccount = this.getOne(Wrappers.<UserAccount>lambdaQuery()
//                .eq(UserAccount::getAccountId, amountVo.getAccountId()));
//        if (userAccount.getAmount().compareTo(amountVo.getChangeAmount()) < 0) {
//            return R.fail("账户余额不足");
//        }
//        BigDecimal subtract = userAccount.getAmount().subtract(amountVo.getChangeAmount());
//        if (!this.update(Wrappers.<UserAccount>lambdaUpdate()
//                .set(UserAccount::getAmount, subtract)
//                .eq(UserAccount::getAccountId, amountVo.getAccountId()))) {
//            return R.fail("扣除余额失败");
//        }
//        return R.ok();
//    }
//
//    @Override
//    public R<?> listOrder() {
//        return remoteOrderService.list(OrderCondition.builder().build());
//    }
//}
