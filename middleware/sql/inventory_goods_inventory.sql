create table goods_inventory
(
    id              bigint auto_increment comment '主键ID'
        primary key,
    goods_id        varchar(128) default ''                not null comment '商品编号',
    goods_inventory int          default 0                 not null comment '商品库存',
    create_date     datetime     default CURRENT_TIMESTAMP not null comment '创建时间',
    goods_name      varchar(128) default ''                not null comment '商品名称'
)
    comment '库存';

INSERT INTO inventory.goods_inventory (id, goods_id, goods_inventory, create_date, goods_name) VALUES (1, '4410b652-94bc-4439-a1d0-210255422f8c', 96, '2021-06-17 02:08:48', 'msg');
INSERT INTO inventory.goods_inventory (id, goods_id, goods_inventory, create_date, goods_name) VALUES (2, 'fbdf389f-d321-4f57-880a-60184a80adea', 10, '2021-06-17 10:09:55', 'message');