package com.maochd.cloud.order.entity;

import lombok.Data;

@Data
public class TestVo {
    private GoodsOrder goodsOrder;
    private Boolean flag;
    private Boolean payFlag;
    private Boolean inventoryFlag;
}
