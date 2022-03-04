package com.maochd.cloud.goods.controller;


import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.maochd.cloud.common.core.constant.SecurityConstants;
import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.api.goods.domain.condition.GoodsQueryCondition;
import com.maochd.cloud.api.goods.domain.entity.GoodsInfo;
import com.maochd.cloud.goods.service.GoodsInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;


@RestController
@Api(value = "商品信息Controller", tags = "商品信息Controller")
public class GoodsInfoController {

    @Resource
    private GoodsInfoService goodsInfoService;

    @PostMapping("/list")
    @ApiOperation(value = "根据条件查询商品信息列表", notes = "根据条件查询商品信息列表")
    public R<List<GoodsInfo>> list(@RequestBody GoodsQueryCondition cond) {
        return R.ok(goodsInfoService.list(cond));
    }

    @PostMapping("/page")
    @ApiOperation(value = "根据条件分页查询商品信息列表", notes = "根据条件分页查询商品信息列表")
    public R<Page<GoodsInfo>> page(@RequestBody GoodsQueryCondition cond) {
        return R.ok(goodsInfoService.page(cond));
    }

    @GetMapping("/get/{id}")
    @ApiOperation(value = "根据ID查询商品信息", notes = "根据ID查询商品信息")
    public R<GoodsInfo> getById(@PathVariable Long id) {
        return R.ok(goodsInfoService.getById(id));
    }

    @PostMapping
    @ApiOperation(value = "新增商品信息", notes = "新增商品信息")
    public R<Boolean> save(@RequestBody GoodsInfo goodsInfo) {
        return R.ok(goodsInfoService.insert(goodsInfo));
    }

    @PutMapping
    @ApiOperation(value = "修改商品信息", notes = "修改商品信息")
    public R<Boolean> modify(@RequestBody GoodsInfo goodsInfo) {
        return R.ok(goodsInfoService.modify(goodsInfo));
    }

    @DeleteMapping("/{id}")
    @ApiOperation(value = "删除商品信息", notes = "删除商品信息")
    public R<Boolean> remove(@PathVariable Long id) {
        return R.ok(goodsInfoService.remove(id));
    }

    @PutMapping("/reduce/inventory/{id}/{count}")
    @ApiOperation(value = "减少库存", notes = "减少库存")
    public R<Boolean> reduceInventory(@PathVariable("id") Long id, @PathVariable("count") Integer count) {
        return R.ok(goodsInfoService.reduceInventory(id, count));
    }

}

