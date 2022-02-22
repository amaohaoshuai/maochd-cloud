create table account_info
(
    id           bigint auto_increment comment '主键ID'
        primary key,
    user_id      bigint       default 0                 not null comment '用户ID',
    account_code varchar(128) default ''                not null comment '账户ID',
    account_name varchar(128) default ''                not null comment '账户名称',
    account_addr varchar(256) default ''                not null comment '地址',
    amount       decimal(16, 2)                         null comment '余额',
    create_date  datetime     default CURRENT_TIMESTAMP not null comment '创建时间'
)
    comment '账户信息';