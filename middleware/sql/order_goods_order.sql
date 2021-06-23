create table goods_order
(
    id          bigint auto_increment comment '主键ID'
        primary key,
    order_id    varchar(128) default ''                not null comment '订单号',
    amount      decimal(6, 2)                          null comment '金额',
    create_date datetime     default CURRENT_TIMESTAMP not null comment '创建时间',
    num         int          default 0                 not null comment '商品数量',
    account_id  varchar(128) default ''                not null comment '购买方',
    goods_id    varchar(128) default ''                not null comment '商品ID'
)
    comment '订单';

INSERT INTO `order`.goods_order (id, order_id, amount, create_date, num, account_id, goods_id) VALUES (24, '38e47b21-7f20-4e99-9c5c-18b2752d4580', 1.00, '2021-06-18 07:05:43', 1, '5087cab6-7ec2-4ff8-a932-877474da2133', '4410b652-94bc-4439-a1d0-210255422f8c');
INSERT INTO `order`.goods_order (id, order_id, amount, create_date, num, account_id, goods_id) VALUES (25, '28fbfa8f-17fd-4061-bded-b872d1060969', 1.00, '2021-06-18 07:26:42', 1, '5087cab6-7ec2-4ff8-a932-877474da2133', '4410b652-94bc-4439-a1d0-210255422f8c');
INSERT INTO `order`.goods_order (id, order_id, amount, create_date, num, account_id, goods_id) VALUES (26, '791dcf1f-4662-46e1-a16d-6b16d095f524', 1.00, '2021-06-18 07:35:20', 1, '5087cab6-7ec2-4ff8-a932-877474da2133', '4410b652-94bc-4439-a1d0-210255422f8c');
INSERT INTO `order`.goods_order (id, order_id, amount, create_date, num, account_id, goods_id) VALUES (27, 'a8b96849-e271-4f4e-be86-2dbf7f449346', 1.00, '2021-06-18 07:45:24', 1, '5087cab6-7ec2-4ff8-a932-877474da2133', '4410b652-94bc-4439-a1d0-210255422f8c');