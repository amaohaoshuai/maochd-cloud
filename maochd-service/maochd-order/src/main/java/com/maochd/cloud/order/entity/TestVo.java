package com.maochd.cloud.order.entity;

import com.maochd.cloud.system.api.order.domain.GoodsOrder;
import lombok.Data;

@Data
public class TestVo {
    private GoodsOrder goodsOrder;
    private Boolean flag;
    private Boolean payFlag;
    private Boolean inventoryFlag;
}
