package com.maochd.cloud.pay.controller;


import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.common.redis.annotation.RedisLock;
import com.maochd.cloud.common.redis.service.RedissonService;
import com.maochd.cloud.common.redis.util.RedisUtil;
import com.maochd.cloud.pay.domain.vo.AmountVo;
import com.maochd.cloud.pay.entity.UserAccount;
import com.maochd.cloud.pay.service.UserAccountService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.redisson.api.RLock;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;
import java.util.concurrent.TimeUnit;

/**
 * <p>
 * 账户 前端控制器
 * </p>
 *
 * @author maochd
 * @since 2021-06-17
 */
@Slf4j
@RestController
@RequestMapping("/userAccount")
@Api(value = "账户", tags = "账户")
public class UserAccountController {
    @Resource
    private UserAccountService userAccountService;

    @Resource
    private RedisUtil redisUtil;

    @Resource
    private RedissonService redissonService;

    @GetMapping("/list")
    @ApiOperation(value = "查询账户列表", notes = "查询账户列表")
    public R<List<UserAccount>> list() {
        return R.ok(userAccountService.list());
    }

    @GetMapping("/getAccountById")
    @ApiOperation(value = "查询账户详情", notes = "查询账户详情")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "主键ID", required = true, paramType = "Long")
    })
    public R<UserAccount> getAccountById(@RequestParam("id") Long id) {
        return R.ok(userAccountService.getById(id));
    }

    @PostMapping("/subtractAmount")
    @ApiOperation(value = "扣除金额", notes = "扣除金额")
    public R<Boolean> subtractAmount(@RequestBody AmountVo amountVo) {
        return userAccountService.subtractAmount(amountVo);
    }

    @GetMapping("/testRedis/{recordId}")
    public void testRedis(@PathVariable String recordId) {
        RLock lock = redissonService.getLock(recordId);
        try {
            boolean bs = lock.tryLock(1, TimeUnit.SECONDS);
            if (bs) {
                log.info("拿到锁： " + recordId);
                TimeUnit.SECONDS.sleep(10);
                log.info("进入业务代码： " + recordId);
                lock.unlock();
            } else {
                log.info("不进入业务代码： " + recordId);
            }
        } catch (Exception e) {
            log.error("", e);
            lock.unlock();
        }
//        redisUtil.set("test", "aaa", 100L);
    }

    @RedisLock(waitTime = 1)
    @GetMapping("/testRedis1/{lockId}")
    public void testRedis1(@PathVariable String lockId) throws InterruptedException {
        System.out.println("执行业务代码。。。。");
        TimeUnit.SECONDS.sleep(10);
    }
}

