package com.maochd.cloud.system.api.goods.service;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.maochd.cloud.common.core.constant.ServiceContextConstant;
import com.maochd.cloud.common.core.constant.ServiceNameConstant;
import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.system.api.goods.domain.condition.GoodsQueryCondition;
import com.maochd.cloud.system.api.goods.domain.entity.GoodsInfo;
import com.maochd.cloud.system.api.goods.fallback.RemoteGoodsFallbackFactory;
import io.swagger.annotations.ApiOperation;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(contextId = ServiceContextConstant.GOODS_CONTEXT_ID,
        value = ServiceNameConstant.GOODS_SERVER,
        fallbackFactory = RemoteGoodsFallbackFactory.class)
public interface RemoteGoodsService {

    @PostMapping("/list")
    @ApiOperation(value = "根据条件查询商品信息列表", notes = "根据条件查询商品信息列表")
    R<List<GoodsInfo>> list(@RequestBody GoodsQueryCondition cond);

    @PostMapping("/page")
    @ApiOperation(value = "根据条件分页查询商品信息列表", notes = "根据条件分页查询商品信息列表")
    R<Page<GoodsInfo>> page(@RequestBody GoodsQueryCondition cond);

    @GetMapping("/{id}")
    @ApiOperation(value = "根据ID查询商品信息", notes = "根据ID查询商品信息")
    R<GoodsInfo> getById(@PathVariable Long id);

    @PostMapping
    @ApiOperation(value = "新增商品信息", notes = "新增商品信息")
    R<Boolean> save(@RequestBody GoodsInfo goodsInfo);

    @PutMapping
    @ApiOperation(value = "修改商品信息", notes = "修改商品信息")
    R<Boolean> modify(@RequestBody GoodsInfo goodsInfo);

    @DeleteMapping("/{id}")
    @ApiOperation(value = "删除商品信息", notes = "删除商品信息")
    R<Boolean> remove(@PathVariable Long id);

    @PutMapping("/reduce/inventory/{id}/{count}")
    @ApiOperation(value = "减少库存", notes = "减少库存")
    R<Boolean> reduceInventory(@PathVariable("id") Long id, @PathVariable("count") Integer count);
}
