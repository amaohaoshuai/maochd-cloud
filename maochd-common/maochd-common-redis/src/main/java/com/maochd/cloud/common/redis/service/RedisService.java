package com.maochd.cloud.common.redis.service;

import cn.hutool.core.util.ArrayUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.springframework.data.redis.core.Cursor;
import org.springframework.data.redis.core.RedisCallback;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ScanOptions;
import org.springframework.data.redis.serializer.RedisSerializer;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import javax.annotation.Resource;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.concurrent.TimeUnit;

@Service
public class RedisService {

    @Resource(name = "StringRedisTemplate")
    private RedisTemplate<String, String> redisTemplate;

    /**
     * 指定缓存失效时间
     *
     * @param key  键
     * @param time 时间(秒)
     */
    public boolean expire(String key, long time) {
        return expire(key, time, TimeUnit.SECONDS);
    }

    /**
     * 指定缓存失效时间
     *
     * @param key  键
     * @param time 时间
     * @param unit 单位
     */
    public boolean expire(String key, long time, TimeUnit unit) {
        try {
            if (time > 0) {
                redisTemplate.expire(key, time, unit);
            }
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    /**
     * 根据key 获取过期时间
     *
     * @param key 键 不能为null
     * @return 时间(秒) 返回0代表为永久有效
     */
    public long getExpire(String key) {
        return getExpire(key, TimeUnit.SECONDS);
    }

    /**
     * 根据key 获取过期时间并且增加10秒
     *
     * @param key  键 不能为null
     * @param unit 时间类型
     */
    public Long getExpireAndAddTime(String key, TimeUnit unit) {
        Long expire = redisTemplate.getExpire(key, unit);
        if (expire != null) {
            return expire + 10L;
        }
        return expire;
    }

    /**
     * 根据key 获取过期时间
     *
     * @param key  键 不能为null
     * @param unit 时间类型
     */
    public Long getExpire(String key, TimeUnit unit) {
        return redisTemplate.getExpire(key, unit);
    }

    /**
     * 判断key是否存在
     *
     * @param key 键
     * @return true 存在 false不存在
     */
    public Boolean hasKey(String key) {
        try {
            return redisTemplate.hasKey(key);
        } catch (Exception e) {
            return false;
        }
    }

    /**
     * 得到键名
     *
     * @param key 键
     */
    public Set<String> getKeys(String key) {
        return redisTemplate.keys(key);
    }

    /**
     * key 查找
     *
     * @param pattern 前缀
     */
    public Set<String> scan(String pattern) {
        return redisTemplate.execute((RedisCallback<Set<String>>) connection -> {
            Set<String> keysTmp = new HashSet<>();
            ScanOptions options = ScanOptions.scanOptions().count(Long.MAX_VALUE).match(pattern + "*").build();
            try (Cursor<byte[]> cursor = connection.scan(options)) {
                while (cursor.hasNext()) {
                    keysTmp.add(new String(cursor.next(), StandardCharsets.UTF_8));
                }
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
            return keysTmp;
        });
    }

    /**
     * 删除缓存
     *
     * @param key 可以传一个值 或多个
     */
    @SuppressWarnings("unchecked")
    public void del(String... key) {
        if (key != null && key.length > 0) {
            if (key.length == 1) {
                redisTemplate.delete(key[0]);
            } else {
                redisTemplate.delete(CollectionUtils.arrayToList(key));
            }
        }
    }

    /**
     * 根据前缀删除key
     *
     * @param pattern 前缀
     */
    public void delByPrefix(String pattern) {
        Set<String> keys = this.scan(pattern);
        if (keys.size() > 0) {
            this.del(ArrayUtil.toArray(keys, String.class));
        }
    }

    /**
     * 如果键值匹配,则删除
     *
     * @param key 键
     * @param val 值
     */
    public Boolean delIf(final String key, final String val) {
        if (key == null) {
            return false;
        }
        return redisTemplate.execute((RedisCallback<Boolean>) connection -> {
            RedisSerializer<String> serializer = redisTemplate.getStringSerializer();
            final byte[] keyByte = serializer.serialize(key);
            final byte[] valByte = serializer.serialize(val);
            if (keyByte == null) {
                return false;
            }
            final byte[] cacheByte = connection.get(keyByte);
            if (Arrays.equals(cacheByte, valByte)) {
                connection.del(keyByte);
                return true;
            }
            return false;
        });
    }

    /**
     * 删除所有指定数据库的数据
     */
    public Boolean flushDb() {
        return redisTemplate.execute((RedisCallback<Boolean>) connection -> {
            connection.flushDb();
            return true;
        });
    }

    /**
     * 普通缓存放入
     *
     * @param key   键
     * @param value 值
     */
    public Boolean set(String key, String value) {
        return redisTemplate.execute((RedisCallback<Boolean>) connection -> {
            RedisSerializer<String> serializer = redisTemplate.getStringSerializer();
            final byte[] keyByte = serializer.serialize(key);
            final byte[] valByte = serializer.serialize(value);
            if (keyByte == null || valByte == null) {
                return false;
            }
            connection.set(keyByte, valByte);
            return true;
        });
    }

    /**
     * setNX设置值
     *
     * @param key   键
     * @param value 值
     */
    public Boolean setNx(String key, String value) {
        return redisTemplate.execute((RedisCallback<Boolean>) connection -> {
            RedisSerializer<String> serializer = redisTemplate.getStringSerializer();
            final byte[] keyByte = serializer.serialize(key);
            final byte[] valByte = serializer.serialize(value);
            if (keyByte == null || valByte == null) {
                return false;
            }
            return connection.setNX(keyByte, valByte);
        });
    }

    /**
     * 普通缓存放入
     *
     * @param key    键
     * @param value  值
     * @param expire 过期时间(秒)
     */
    public boolean set(String key, String value, long expire) {
        try {
            set(key, value);
            if (expire > 0) {
                expire(key, expire);
            }
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    /**
     * 普通缓存放入
     *
     * @param key 键
     * @param obj 值
     */
    public boolean set(final String key, final Object obj) {
        String value = JSONObject.toJSONString(obj);
        return set(key, value);
    }

    /**
     * 普通缓存放入
     *
     * @param key    键
     * @param obj    值
     * @param expire 过期时间
     */
    public boolean set(final String key, final Object obj, long expire) {
        String value = JSONObject.toJSONString(obj);
        return set(key, value, expire);
    }

    /**
     * 普通缓存获取
     *
     * @param key 键
     */
    public String get(final String key) {
        return redisTemplate.execute((RedisCallback<String>) connection -> {
            RedisSerializer<String> serializer = redisTemplate.getStringSerializer();
            final byte[] keyByte = serializer.serialize(key);
            if (keyByte == null) {
                return null;
            }
            byte[] value = connection.get(keyByte);
            return serializer.deserialize(value);
        });
    }

    /**
     * 普通缓存获取
     *
     * @param key 键
     * @param clz 数据类型
     * @return 值
     */
    public <T> T get(String key, Class<T> clz) {
        String json = get(key);
        if (json != null) {
            return JSONObject.parseObject(json, clz);
        }
        return null;
    }

    /**
     * 得到集合数据
     *
     * @param key 键
     * @param clz 数据类型
     * @return 值
     */
    public <T> List<T> getList(String key, Class<T> clz) {
        String json = get(key);
        List<T> data;
        if (json != null) {
            data = JSONObject.parseArray(json, clz);
            return data;
        }
        return null;
    }

    public <T> List<T> range(String key, long start, long end, Class<T> clz) {
        String result = redisTemplate.execute((RedisCallback<String>) connection -> {
            RedisSerializer<String> serializer = redisTemplate.getStringSerializer();
            List<byte[]> value = connection.lRange(serializer.serialize(key), start, end);
            if (value == null) {
                return null;
            }
            List<T> res = new ArrayList<>(value.size());
            for (byte[] bytes : value) {
                JSONObject jsonObject = JSON.parseObject(serializer.deserialize(bytes));
                res.add(jsonObject.toJavaObject(clz));
            }
            return JSONObject.toJSONString(res);
        });

        if (result == null) {
            return null;
        }
        return JSONArray.parseArray(result, clz);
    }

    /**
     * 获取list中的数据, 从集合的 left 开始获取, 元素数量为 len,并删除已返回的元素
     *
     * @param key key
     * @param len 获取的元素个数
     * @param clz 转换对象
     * @param <T> 返回值类型
     * @return list中无数据或为空, 返回null
     */
    public <T> List<T> rangeAndTrim(String key, long len, Class<T> clz) {
        String result = redisTemplate.execute((RedisCallback<String>) connection -> {
            RedisSerializer<String> serializer = redisTemplate.getStringSerializer();
            List<byte[]> value = connection.lRange(serializer.serialize(key), 0, len);
            if (value == null) {
                return null;
            }
            connection.lTrim(serializer.serialize(key), len, Long.MAX_VALUE);
            List<T> res = new ArrayList<>(value.size());
            for (byte[] bytes : value) {
                final String deserialize = serializer.deserialize(bytes);
                if (clz.equals(String.class)) {
                    res.add((T) deserialize);
                } else {
                    JSONObject jsonObject = JSON.parseObject(deserialize);
                    res.add(jsonObject.toJavaObject(clz));
                }
            }
            return JSONObject.toJSONString(res);
        });

        if (result == null) {
            return null;
        }
        return JSONArray.parseArray(result, clz);
    }

    /**
     * 递增
     *
     * @param key   键
     * @param delta 要增加几(大于0)
     */
    public Long incr(String key, long delta) {
        if (delta < 0) {
            throw new RuntimeException("递增因子必须大于0");
        }
        return redisTemplate.opsForValue().increment(key, delta);
    }

    /**
     * 递减
     *
     * @param key   键
     * @param delta 要减少几(小于0)
     */
    public Long decr(String key, long delta) {
        if (delta < 0) {
            throw new RuntimeException("递减因子必须大于0");
        }
        return redisTemplate.opsForValue().increment(key, -delta);
    }

    /**
     * 将list放入缓存
     *
     * @param key 键
     * @param obj 值
     */
    public Long lPush(final String key, Object obj) {
        final String value = JSONObject.toJSONString(obj);
        return redisTemplate.execute((RedisCallback<Long>) connection -> {
            RedisSerializer<String> serializer = redisTemplate.getStringSerializer();
            long count = connection.lPush(serializer.serialize(key), serializer.serialize(value));
            return count;
        });
    }

    /**
     * 将list放入缓存
     *
     * @param key 键
     * @param obj 值
     */
    public Long rPush(final String key, Object obj) {
        final String value = JSONObject.toJSONString(obj);
        return redisTemplate.execute((RedisCallback<Long>) connection -> {
            RedisSerializer<String> serializer = redisTemplate.getStringSerializer();
            return (long) connection.rPush(serializer.serialize(key), serializer.serialize(value));
        });
    }

    /**
     * 获取一条数据
     *
     * @param key 键
     */
    public String lPop(final String key) {
        return redisTemplate.execute((RedisCallback<String>) connection -> {
            RedisSerializer<String> serializer = redisTemplate.getStringSerializer();
            byte[] res = connection.lPop(serializer.serialize(key));
            return serializer.deserialize(res);
        });
    }

    /**
     * 获取一条数据
     *
     * @param key 键
     */
    public <T> T lPop(final String key, Class<T> clz) {
        String json = lPop(key);
        if (json != null) {
            return JSONObject.parseObject(json, clz);
        }
        return null;
    }

    /**
     * 获取一条数据
     *
     * @param key 键
     */
    public String rPop(final String key) {
        return redisTemplate.execute((RedisCallback<String>) connection -> {
            RedisSerializer<String> serializer = redisTemplate.getStringSerializer();
            byte[] res = connection.rPop(serializer.serialize(key));
            return serializer.deserialize(res);
        });
    }

    /**
     * 获取一条数据
     *
     * @param key 键
     */
    public <T> T rPop(final String key, Class<T> clz) {
        String json = rPop(key);
        if (json != null) {
            return JSONObject.parseObject(json, clz);
        }
        return null;
    }

    /**
     * 获取list缓存的长度
     *
     * @param key 键
     */
    public Long lGetListSize(String key) {
        try {
            return redisTemplate.opsForList().size(key);
        } catch (Exception e) {
            return 0L;
        }
    }

    /**
     * 向一张hash表中放入数据,如果不存在将创建
     *
     * @param key   键
     * @param item  项
     * @param value 值
     * @return true 成功 false失败
     */
    public Boolean hSet(String key, String item, Object value) {
        String json = JSONObject.toJSONString(value);
        return redisTemplate.execute((RedisCallback<Boolean>) connection -> {
            RedisSerializer<String> serializer = redisTemplate.getStringSerializer();
            connection.hSet(serializer.serialize(key), serializer.serialize(item), serializer.serialize(json));
            return true;
        });
    }

    /**
     * 获取 hash 的内容
     */
    public Map<String, Object> hGetAll(String key) {
        return (Map<String, Object>) redisTemplate.execute((RedisCallback<Object>) connection -> {
            RedisSerializer<String> serializer = redisTemplate.getStringSerializer();
            Map<byte[], byte[]> map = connection.hGetAll(serializer.serialize(key));
            if (map == null) {
                return null;
            }
            Map<String, Object> resMap = new HashMap<>(map.size());
            Set<byte[]> keys = map.keySet();
            for (byte[] key1 : keys) {
                String skey = serializer.deserialize(key1);
                byte[] val = map.get(key1);
                Object sval = serializer.deserialize(val);
                resMap.put(skey, sval);
            }
            return resMap;
        });
    }

    /**
     * 向一张hash表中放入数据,如果不存在将创建
     *
     * @param key   键
     * @param item  项
     * @param value 值
     * @param time  时间(秒)  注意:如果已存在的hash表有时间,这里将会替换原有的时间
     * @return true 成功 false失败
     */
    public boolean hSet(String key, String item, Object value, long time) {
        try {
            hSet(key, item, value);
            if (time > 0) {
                expire(key, time);
            }
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    /**
     * HashGet
     *
     * @param key  键
     * @param item 项
     * @return 值
     */
    public String hGet(String key, String item) {
        return redisTemplate.execute((RedisCallback<String>) connection -> {
            RedisSerializer<String> serializer = redisTemplate.getStringSerializer();
            byte[] res = connection.hGet(serializer.serialize(key), serializer.serialize(item));
            return serializer.deserialize(res);
        });
    }

    /**
     * HashGet
     *
     * @param key  键
     * @param item 项
     * @return 值
     */
    public <T> T hGet(String key, String item, Class<T> clz) {
        String json = hGet(key, item);
        if (json != null) {
            return JSONObject.parseObject(json, clz);
        }
        return null;

    }

    /**
     * 得到 hash list
     *
     * @param key key
     * @param clz 类型
     */
    public <T> List hGetList(String key, Class clz) {
        return redisTemplate.execute((RedisCallback<List>) connection -> {
            RedisSerializer<String> serializer = redisTemplate.getStringSerializer();
            Map<byte[], byte[]> map = connection.hGetAll(serializer.serialize(key));
            if (map == null) {
                return null;
            }
            List<T> resData = new ArrayList<>();
            Set<byte[]> keys = map.keySet();
            for (byte[] key1 : keys) {
                byte[] val = map.get(key1);
                T data = JSONObject.parseObject(val, clz);
                resData.add(data);
            }
            return resData;
        });
    }

    /**
     * 删除hash表中的值
     *
     * @param key  键
     * @param item 项 可以使多个
     */
    public void hDel(String key, Object... item) {
        redisTemplate.opsForHash().delete(key, item);
    }

    /**
     * 判断hash表中是否有该项的值
     *
     * @param key  键 不能为null
     * @param item 项 不能为null
     * @return true 存在 false不存在
     */
    public boolean hHasKey(String key, String item) {
        return redisTemplate.opsForHash().hasKey(key, item);
    }
}

