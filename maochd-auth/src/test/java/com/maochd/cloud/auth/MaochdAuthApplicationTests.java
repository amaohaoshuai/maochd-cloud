package com.maochd.cloud.auth;

import com.maochd.cloud.auth.condition.UserQueryCondition;
import com.maochd.cloud.auth.entity.User;
import com.maochd.cloud.auth.service.UserService;
import com.maochd.cloud.common.core.domain.EmailInfo;
import com.maochd.cloud.common.core.domain.SmsInfo;
import com.maochd.cloud.api.account.domain.condition.AccountQueryCondition;
import com.maochd.cloud.api.account.domain.entity.AccountInfo;
import com.maochd.cloud.api.account.service.RemoteAccountService;
import com.maochd.cloud.api.goods.domain.condition.GoodsQueryCondition;
import com.maochd.cloud.api.goods.domain.entity.GoodsInfo;
import com.maochd.cloud.api.goods.service.RemoteGoodsService;
import com.maochd.cloud.api.mq.service.RemoteMqService;
import com.maochd.cloud.api.order.domain.condition.OrderQueryCondition;
import com.maochd.cloud.api.order.domain.entity.OrderInfo;
import com.maochd.cloud.api.order.service.RemoteOrderService;
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

    @Resource
    private RemoteOrderService remoteOrderService;

    @Resource
    private RemoteMqService remoteMqService;


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
                .goodsName("西瓜")
                .goodsCode(UUID.randomUUID().toString())
                .goodsInventory(100)
                .build()));
    }

    @Test
    public void goodModify() {
        System.out.println(remoteGoodsService.modify(GoodsInfo.builder()
                .id(4L)
                .goodPrice(new BigDecimal("1.0"))
                .goodsName("苹果")
                .goodsCode(UUID.randomUUID().toString())
                .goodsInventory(100)
                .build()));
    }

    @Test
    public void goodRemove() {
        System.out.println(remoteGoodsService.remove(2L));
    }

    @Test
    public void goodsReduce() {
        System.out.println(remoteGoodsService.reduceInventory(4L, 1000));
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

    @Test
    public void orderList() {
        OrderQueryCondition condition = new OrderQueryCondition();
        System.out.println(remoteOrderService.list(condition));
    }

    @Test
    public void orderPage() {
        OrderQueryCondition condition = new OrderQueryCondition();
        System.out.println(remoteOrderService.page(condition));
    }

    @Test
    public void orderGetById() {
        System.out.println(remoteOrderService.getById(3L));
    }

    @Test
    public void orderAdd() {
        OrderInfo orderInfo = new OrderInfo();
        orderInfo.setAccountCode("11111");
        orderInfo.setUserId(0L);
        orderInfo.setGoodsId(2L);
        orderInfo.setNum(10);
        orderInfo.setTotalAmount(new BigDecimal("10.00"));
        System.out.println(remoteOrderService.add(orderInfo));
    }

    @Test
    public void mqPushEmail() {
        System.out.println(remoteMqService.pushEmail(EmailInfo.builder()
                .targetEmail("834739007@qq.com")
                .content("测试邮件")
                .subject("主题")
                .build()));
    }

    @Test
    public void mqPushSms() {
        System.out.println(remoteMqService.pushSms(SmsInfo.builder()
                .templateId("1")
                .phone("19439803232")
                .content("测试短信")
                .build()));
    }
}
