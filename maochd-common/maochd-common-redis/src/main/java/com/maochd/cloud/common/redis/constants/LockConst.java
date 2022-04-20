package com.maochd.cloud.common.redis.constants;

public interface LockConst {

    String LOCK_COMPLETED_MSG = "线程{} 加锁完成，锁名 {}，等待锁定时间 {}ms，锁释放时间 {}ms，锁定最长时间 {}ms";

    String GET_LOCK_FAIL_MSG = "线程{} 获取锁失败";

    String TIME_OUT = "请求超时";

    String LOCK_FAIL_MSG = "线程{} 加锁失败，锁名 {}";

    String UNLOCK_COMPLETE_MSG = "线程{} 解锁成功，锁名 {}";

    String BUSINESS_ERROR_MSG = "线程{} 出现业务异常，，锁名 {}，详情：{}";

    String NO_MATCH_LOCK_NAME = "无法匹配自定义锁名";

    String NO_MATCH_LOCK_NAME_MSG = "线程{} 无法匹配自定义锁名";

    String CUSTOM_LOCK_NAME = "%s:%s";

    long DEFAULT_WATCH_DOG_TIME = 30000;
}