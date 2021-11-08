package com.maochd.cloud.common.redis.service;

import lombok.SneakyThrows;
import org.redisson.Redisson;
import org.redisson.api.*;
import org.redisson.config.Config;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class RedissonService {

    @Resource
    private RedissonClient redissonClient;

    @Resource
    private Redisson redisson;

    @SneakyThrows
    public void getRedissonClient() {
        Config config = redissonClient.getConfig();
        System.out.println(config.toJSON());
    }

    /**
     * `
     * 获取字符串对象
     *
     * @param key 键值
     */
    public <T> RBucket<T> getBucket(String key) {
        return redissonClient.getBucket(key);
    }

    /**
     * 获取Map对象
     *
     * @param key 键值
     */
    public <K, V> RMap<K, V> getMap(String key) {
        return redissonClient.getMap(key);
    }

    /**
     * 获取有序集合
     *
     * @param key 键值
     */
    public <V> RSortedSet<V> getSortedSet(String key) {
        return redissonClient.getSortedSet(key);
    }

    /**
     * 获取集合
     *
     * @param key 键值
     */
    public <V> RSet<V> getSet(String key) {
        return redissonClient.getSet(key);
    }

    /**
     * 获取列表
     *
     * @param key 键值
     */
    public <V> RList<V> getList(String key) {
        return redissonClient.getList(key);
    }

    /**
     * 获取队列
     *
     * @param key 键值
     */
    public <V> RQueue<V> getQueue(String key) {
        return redissonClient.getQueue(key);
    }

    /**
     * 获取双端队列
     *
     * @param key 键值
     */
    public <V> RDeque<V> getDeque(String key) {
        return redissonClient.getDeque(key);
    }

    /**
     * 获取锁
     *
     * @param key 键值
     */
    public RLock getLock(String key) {
        return redissonClient.getLock(key);
    }

    /**
     * 获取读取锁
     *
     * @param key 键值
     */
    public RReadWriteLock getReadWriteLock(String key) {
        return redissonClient.getReadWriteLock(key);
    }

    /**
     * 获取原子数
     *
     * @param key 键值
     */
    public RAtomicLong getAtomicLong(String key) {
        return redissonClient.getAtomicLong(key);
    }

    /**
     * 获取记数锁
     *
     * @param key 键值
     */
    public RCountDownLatch getCountDownLatch(String key) {
        return redissonClient.getCountDownLatch(key);
    }

    /**
     * 获取消息的Topic
     *
     * @param key 键值
     */
//    public <M> RTopic<M> getTopic(String key) {
//        return redissonClient.getTopic(key);
//    }

    /**
     * 判断当前线程是否持有锁
     *
     * @param key 键值
     * @return
     */
    public boolean isHeldByCurrentThread(String key) {
        RLock rLock = redisson.getLock(key);
        return rLock.isHeldByCurrentThread();
    }

    /**
     * 解锁
     *
     * @param key 键值
     */
    public void unlock(String key) {
        redisson.getLock(key).unlock();
    }
}
