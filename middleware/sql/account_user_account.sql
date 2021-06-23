create table user_account
(
    id           bigint auto_increment comment '主键ID'
        primary key,
    account_id   varchar(128) default ''                not null comment '账户ID',
    account_name varchar(128) default ''                not null comment '账户名称',
    email        varchar(64)  default ''                not null comment '邮箱',
    amount       decimal(16, 2)                         null comment '金额',
    create_date  datetime     default CURRENT_TIMESTAMP not null comment '创建时间'
)
    comment '账户';

INSERT INTO account.user_account (id, account_id, account_name, email, amount, create_date) VALUES (1, '5087cab6-7ec2-4ff8-a932-877474da2133', 'maochd', 'maochd@aliyun.com', 9996.00, '2021-06-17 11:14:26');