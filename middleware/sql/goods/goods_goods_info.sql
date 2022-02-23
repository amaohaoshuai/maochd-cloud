create table goods_info
(
    id              bigint auto_increment comment '主键ID'
        primary key,
    goods_code      varchar(128) charset latin1 default ''                not null comment '商品编号',
    goods_inventory int                         default 0                 not null comment '商品库存',
    create_date     datetime                    default CURRENT_TIMESTAMP not null comment '创建时间',
    goods_name      varchar(128) charset latin1 default ''                not null comment '商品名称',
    goods_price     decimal(16, 8)              default 0.00000000        not null comment '商品单价'
)
    comment '商品信息' charset = utf8mb4;
