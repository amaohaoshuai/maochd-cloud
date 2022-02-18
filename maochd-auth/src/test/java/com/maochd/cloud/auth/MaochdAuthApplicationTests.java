package com.maochd.cloud.auth;

import com.maochd.cloud.auth.condition.UserQueryCondition;
import com.maochd.cloud.auth.entity.User;
import com.maochd.cloud.auth.service.UserService;
import com.maochd.cloud.system.api.account.domain.condition.AccountQueryCondition;
import com.maochd.cloud.system.api.account.domain.entity.AccountInfo;
import com.maochd.cloud.system.api.account.service.RemoteAccountService;
import com.maochd.cloud.system.api.goods.domain.condition.GoodsQueryCondition;
import com.maochd.cloud.system.api.goods.domain.entity.GoodsInfo;
import com.maochd.cloud.system.api.goods.service.RemoteGoodsService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;
import java.math.BigDecimal;
import java.util.UUID;

@SpringBootTest
@RunWith(SpringJUnit4ClassRunner.class)
public class MaochdAuthApplicationTests {

    @Resource
    private UserService userService;

    @Resource
    private RemoteGoodsService remoteGoodsService;

    @Resource
    private RemoteAccountService remoteAccountService;

    @Test
    public void list() {
        UserQueryCondition condition = new UserQueryCondition();
        System.out.println(userService.list(condition));
    }

    @Test
    public void getById() {
        System.out.println(userService.getById(1));
    }

    @Test
    public void page() {
        UserQueryCondition condition = new UserQueryCondition();
        System.out.println(userService.list(condition));
    }

    @Test
    public void add() {
        User user = new User();
        user.setUserId(UUID.randomUUID().toString());
        user.setUserName("maochd");
        user.setPassword("88888888");
        user.setPhone("17640313075");
        System.out.println(userService.add(user));
    }

    @Test
    public void modify() {
        User user = new User();
        user.setId(1L);
        user.setUserName("maochd1");
        user.setPassword("88888888");
        user.setPhone("17640313075");
        System.out.println(userService.modify(user));
    }

    @Test
    public void remove() {
        System.out.println(userService.remove(1L));
    }


    @Test
    public void goodList() {
        GoodsQueryCondition condition = new GoodsQueryCondition();
        System.out.println(remoteGoodsService.list(condition));
    }

    @Test
    public void goodGetById() {
        System.out.println(remoteGoodsService.getById(1L));
    }

    @Test
    public void goodPage() {
        GoodsQueryCondition condition = new GoodsQueryCondition();
        System.out.println(remoteGoodsService.page(condition));
    }

    @Test
    public void goodAdd() {
        System.out.println(remoteGoodsService.save(GoodsInfo.builder()
                        .goodPrice(new BigDecimal("1.0"))
                        .goodsName("11111111")
                        .goodsCode(UUID.randomUUID().toString())
                        .goodsInventory(100)
                        .build()));
    }

    @Test
    public void goodModify() {
        System.out.println(remoteGoodsService.modify(GoodsInfo.builder()
                        .id(1L)
                .goodPrice(new BigDecimal("1.0"))
                .goodsName("22222222")
                .goodsCode(UUID.randomUUID().toString())
                .goodsInventory(100)
                .build()));
    }

    @Test
    public void goodRemove() {
        System.out.println(remoteGoodsService.remove(1L));
    }

    @Test
    public void goodsReduce() {
        System.out.println(remoteGoodsService.reduceInventory(2L, 100));
    }


    @Test
    public void accountList() {
        AccountQueryCondition condition = new AccountQueryCondition();
        System.out.println(remoteAccountService.list(condition));
    }

    @Test
    public void accountAdd() {
        AccountInfo accountInfo = new AccountInfo();
        accountInfo.setAccountAddr("11111");
        accountInfo.setAccountName("11111");
        accountInfo.setAccountCode("11111");
        accountInfo.setAmount(new BigDecimal("1.0"));
        System.out.println(remoteAccountService.add(accountInfo));
    }

    @Test
    public void accountRecharge() {
        System.out.println(remoteAccountService.recharge("11111", new BigDecimal("1.0")));
    }

    @Test
    public void accountDeduct() {
        System.out.println(remoteAccountService.deduct("11111", new BigDecimal("1.0")));
    }



}
