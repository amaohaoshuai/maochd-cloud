package com.maochd.cloud.api.goods.fallback;


import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.maochd.cloud.common.core.constant.CommonConstant;
import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.api.goods.domain.condition.GoodsQueryCondition;
import com.maochd.cloud.api.goods.domain.entity.GoodsInfo;
import com.maochd.cloud.api.goods.service.RemoteGoodsService;
import feign.hystrix.FallbackFactory;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.List;

@Slf4j
@Component
public class RemoteGoodsFallbackFactory implements FallbackFactory<RemoteGoodsService> {
    @Override
    public RemoteGoodsService create(Throwable cause) {
        log.error("商品服务调用失败:{}", cause.getMessage());

        return new RemoteGoodsService() {
            @Override
            public R<List<GoodsInfo>> list(GoodsQueryCondition cond) {
                return R.fail(CommonConstant.EXCEPTION);
            }

            @Override
            public R<Page<GoodsInfo>> page(GoodsQueryCondition cond) {
                return R.fail(CommonConstant.EXCEPTION);
            }

            @Override
            public R<GoodsInfo> getById(Long id) {
                return R.fail(CommonConstant.EXCEPTION);
            }

            @Override
            public R<Boolean> save(GoodsInfo goodsInfo) {
                return R.fail(CommonConstant.EXCEPTION);
            }

            @Override
            public R<Boolean> modify(GoodsInfo goodsInfo) {
                return R.fail(CommonConstant.EXCEPTION);
            }

            @Override
            public R<Boolean> remove(Long id) {
                return R.fail(CommonConstant.EXCEPTION);
            }

            @Override
            public R<Boolean> reduceInventory(Long id, Integer count) {
                return R.fail(CommonConstant.EXCEPTION);
            }
        };
    }
}
