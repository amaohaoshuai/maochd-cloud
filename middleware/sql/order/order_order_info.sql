create table order_info
(
    id           bigint auto_increment comment '主键ID'
        primary key,
    order_id     varchar(128) default ''                not null comment '订单号',
    total_amount decimal(6, 2)                          null comment '总金额',
    create_date  datetime     default CURRENT_TIMESTAMP not null comment '创建时间',
    num          int          default 0                 not null comment '商品数量',
    account_code varchar(128) default ''                not null comment '支付帐号',
    goods_id     bigint       default 0                 not null comment '商品ID',
    user_id      bigint       default 0                 not null comment '用户ID'
)
    comment '订单信息';