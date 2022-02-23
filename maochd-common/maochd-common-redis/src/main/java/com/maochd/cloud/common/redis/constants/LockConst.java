package com.maochd.cloud.common.redis.constants;

public interface LockConst {

    String LOCK_COMPLETED_MSG = "线程{} 加锁完成，开始执行业务逻辑";

    String GET_LOCK_FAIL_MSG = "线程{} 获取锁失败";

    String TIME_OUT = "请求超时";

    String LOCK_FAIL_MSG = "线程{} 加锁失败";

    String UNLOCK_COMPLETE_MSG = "线程{} 解锁成功";

    String BUSINESS_ERROR_MSG = "线程{} 出现业务异常，详情：{}";

    String NO_MATCH_LOCK_NAME = "无法匹配自定义锁名";

    String NO_MATCH_LOCK_NAME_MSG = "线程{} 无法匹配自定义锁名";

    String CUSTOM_LOCK_NAME = "%s:%s";
}