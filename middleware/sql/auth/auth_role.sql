create table role
(
    id        bigint auto_increment
        primary key,
    role_name varchar(64) default '' null comment '角色名称',
    role_mark varchar(64) default '' null comment '角色标识'
) comment '角色' charset = utf8mb4;

INSERT INTO auth.role (id, role_name, role_mark)
VALUES (1, 'ADMIN', 'ADMIN');
INSERT INTO auth.role (id, role_name, role_mark)
VALUES (2, 'GOODS_ADMIN', 'GOODS_ADMIN');
INSERT INTO auth.role (id, role_name, role_mark)
VALUES (3, 'ORDER_ADMIN', 'ORDER_ADMIN');
INSERT INTO auth.role (id, role_name, role_mark)
VALUES (4, 'MQ_ADMIN', 'MQ_ADMIN');
INSERT INTO auth.role (id, role_name, role_mark)
VALUES (5, 'WS_ADMIN', 'WS_ADMIN');
INSERT INTO auth.role (id, role_name, role_mark)
VALUES (6, 'ACCOUNT_ADMIN', 'ACCOUNT_ADMIN');
INSERT INTO auth.role (id, role_name, role_mark)
VALUES (7, 'USER_ADMIN', 'USER_ADMIN');
INSERT INTO auth.role (id, role_name, role_mark)
VALUES (8, 'EMAIL_ADMIN', 'EMAIL_ADMIN');