package com.maochd.cloud.common.redis.constants;

public interface LockMsgConst {

    String LOCK_COMPLETED = "线程{} 加锁完成，开始执行业务逻辑";

    String GET_LOCK_FAIL = "线程{} 获取锁失败";

    String TIME_OUT = "请求超时";

    String LOCK_FAIL = "线程{} 加锁失败,失败原因：{}";

    String UNLOCK_COMPLETE = "线程{} 解锁成功";
}
