create table user
(
    id          bigint auto_increment comment '主键ID
'
        primary key,
    user_id     varchar(128) default ''                not null comment '用户ID
',
    user_name   varchar(64)  default ''                not null comment '用户名',
    password    varchar(128) default ''                not null comment '密码',
    phone       varchar(16)  default ''                not null comment '联系方式',
    create_date datetime     default CURRENT_TIMESTAMP not null comment '创建时间'
)
    comment '用户信息' charset = utf8mb4;

