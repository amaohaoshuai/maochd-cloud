package com.maochd.cloud.maochd.api.system.order.api;

import org.springframework.cloud.openfeign.FeignClient;

@FeignClient(contextId = "RemoteOrderService", value = "maochd-order", fallbackFactory = RemoteOrderFallbackFactory.class)
public interface RemoteOrderService {
}
