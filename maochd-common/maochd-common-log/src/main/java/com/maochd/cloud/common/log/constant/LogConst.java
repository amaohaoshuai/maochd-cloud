package com.maochd.cloud.common.log.constant;

public interface LogConst {

    String LOG_START_MSG = "{}方法开始执行，请求路径：{}，请求方式：{}，请求参数：{}";

    String LOG_END_MSG = "{}方法结束，耗时：{}ms，响应参数：{}";

    String LOG_DEPRECATED_MSG = "{}方法已废弃，请求路径：{}，请尽快更换新方法";

    String LOG_SLOW_METHOD_MSG = "{}方法执行过慢，请尽快优化，请求路径：{}，耗时：{}ms";

    String LOG_ERROR_MSG = "{}方法执行出错，请尽快处理，请求路径：{}，请求方式：{}，请求参数：{}";
}
