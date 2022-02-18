//package com.maochd.cloud.order.service.impl;
//
//import com.baomidou.mybatisplus.core.toolkit.Wrappers;
//import com.maochd.cloud.system.api.inventory.domain.InventoryStockVo;
//import com.maochd.cloud.system.api.inventory.service.RemoteInventoryService;
//import com.maochd.cloud.system.api.pay.domain.AmountVo;
//import com.maochd.cloud.system.api.pay.service.RemotePayService;
//import com.maochd.cloud.common.core.domain.R;
//import com.maochd.cloud.system.api.order.domain.GoodsOrder;
//import com.maochd.cloud.order.entity.TestVo;
//import com.maochd.cloud.order.mapper.GoodsOrderMapper;
//import com.maochd.cloud.order.service.GoodsOrderService;
//import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
//import io.seata.spring.annotation.GlobalTransactional;
//import org.springframework.stereotype.Service;
//
//import javax.annotation.Resource;
//import java.util.List;
//import java.util.UUID;
//
///**
// * <p>
// * 订单 服务实现类
// * </p>
// *
// * @author maochd
// * @since 2021-06-16
// */
//@Service
//public class GoodsOrderServiceImpl extends ServiceImpl<GoodsOrderMapper, GoodsOrder> implements GoodsOrderService {
//
//    @Resource
//    private RemotePayService remotePayService;
//
//    @Resource
//    private RemoteInventoryService remoteInventoryService;
//
//    @Override
//    public R<List<GoodsOrder>> listByAccountId(String accountId) {
//        return R.ok(this.list(Wrappers.<GoodsOrder>lambdaQuery().eq(GoodsOrder::getAccountId, accountId)));
//    }
//
//    @Override
//    @GlobalTransactional
//    public R<Boolean> generateOrder(TestVo testVo) {
//        GoodsOrder order = testVo.getGoodsOrder();
//
//        if (testVo.getPayFlag()) {
//            throw new RuntimeException("扣除余额失败");
//        } else {
//            // 扣除余额
//            R<Boolean> amountResult = remotePayService.subtractAmount(AmountVo.builder()
//                    .accountId(order.getAccountId())
//                    .changeAmount(order.getAmount())
//                    .build());
//            if (R.isNotOk(amountResult)) {
//                throw new RuntimeException("扣除余额失败");
//            }
//        }
//
//        if (testVo.getInventoryFlag()) {
//            throw new RuntimeException("扣除库存失败");
//        } else {
//            // 扣除库存
//            R<Boolean> inventoryResult = remoteInventoryService.subtractInventory(InventoryStockVo.builder()
//                    .changeNum(order.getNum())
//                    .goodsId(order.getGoodsId())
//                    .build());
//            if (R.isNotOk(inventoryResult)) {
//                throw new RuntimeException("扣除库存失败");
//            }
//        }
//
//        // 添加订单
//        order.setOrderId(UUID.randomUUID().toString());
//        this.save(order);
//        if (testVo.getFlag()) {
//            throw new RuntimeException("失败");
//        }
//        return R.ok();
//    }
//}
