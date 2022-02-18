package com.maochd.cloud.inventory.controller;


import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.inventory.condition.InventoryQueryCondition;
import com.maochd.cloud.system.api.inventory.domain.InventoryStockVo;
import com.maochd.cloud.inventory.entity.GoodsInventory;
import com.maochd.cloud.inventory.service.GoodsInventoryService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
 * <p>
 * 库存 前端控制器
 * </p>
 *
 * @author maochd
 * @since 2021-06-16
 */
@RestController
@RequestMapping("/goodsInventory")
@Api(value = "商品库存", tags = "商品库存")
public class GoodsInventoryController {

    @Resource
    private GoodsInventoryService goodsInventoryService;

    @PostMapping("/list")
    @ApiOperation(value = "根据条件查询商品", notes = "根据条件查询商品")
    public R<List<GoodsInventory>> list(InventoryQueryCondition cond) {
        return R.ok(goodsInventoryService.list(cond));
    }

    @PostMapping("/page")
    @ApiOperation(value = "根据条件分页查询商品", notes = "根据条件分页查询商品")
    public R<Page<GoodsInventory>> page(InventoryQueryCondition cond) {
        return R.ok(goodsInventoryService.page(cond));
    }


    @GetMapping("/getByGoodsId")
    @ApiOperation(value = "查询商品详情", notes = "查询商品详情")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "goodsId", value = "商品id", required = true, paramType = "String")
    })
    public R<GoodsInventory> getByGoodsId(@RequestParam("goodsId") String goodsId) {
        return goodsInventoryService.getByGoodsId(goodsId);
    }

    @PostMapping("/subtractInventory")
    @ApiOperation(value = "删减商品库存", notes = "删减商品库存")
    public R<Boolean> subtractInventory(@RequestBody InventoryStockVo inventoryStockVo) {
        return goodsInventoryService.subtractInventory(inventoryStockVo);
    }

}

