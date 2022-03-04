create table user
(
    id          bigint auto_increment comment '主键ID
'
        primary key,
    password    varchar(128) default ''                not null comment '密码',
    phone       varchar(16)  default ''                not null comment '联系方式',
    create_date datetime     default CURRENT_TIMESTAMP not null comment '创建时间',
    username    varchar(64)  default ''                not null comment '用户名',
    status      int(1) default 0 null comment '状态'
) comment '用户信息'  charset = utf8mb4;

INSERT INTO auth.user (id, password, phone, create_date, username, status)
VALUES (2, '$2a$10$qBu1znpsqbGjO733xcTIfOhxzsQ0ohDfcTzsxaxypPw.TTTmkkp2m', '17640313075', '2022-03-01 08:19:30',
        'maochd', 1);
INSERT INTO auth.user (id, password, phone, create_date, username, status)
VALUES (3, '$2a$10$qBu1znpsqbGjO733xcTIfOhxzsQ0ohDfcTzsxaxypPw.TTTmkkp2m', '17640313076', '2022-03-03 05:46:21',
        'admin', 1);
INSERT INTO auth.user (id, password, phone, create_date, username, status)
VALUES (4, '$2a$10$qBu1znpsqbGjO733xcTIfOhxzsQ0ohDfcTzsxaxypPw.TTTmkkp2m', '17640313077', '2022-03-03 05:46:21',
        'goodsAdmin', 1);
INSERT INTO auth.user (id, password, phone, create_date, username, status)
VALUES (5, '$2a$10$qBu1znpsqbGjO733xcTIfOhxzsQ0ohDfcTzsxaxypPw.TTTmkkp2m', '17640313078', '2022-03-03 05:46:21',
        'orderAdmin', 1);
INSERT INTO auth.user (id, password, phone, create_date, username, status)
VALUES (6, '$2a$10$qBu1znpsqbGjO733xcTIfOhxzsQ0ohDfcTzsxaxypPw.TTTmkkp2m', '17640313079', '2022-03-03 05:46:21',
        'accountAdmin', 1);
INSERT INTO auth.user (id, password, phone, create_date, username, status)
VALUES (7, '$2a$10$qBu1znpsqbGjO733xcTIfOhxzsQ0ohDfcTzsxaxypPw.TTTmkkp2m', '17640313080', '2022-03-03 05:46:21',
        'userAdmin', 1);
INSERT INTO auth.user (id, password, phone, create_date, username, status)
VALUES (8, '$2a$10$qBu1znpsqbGjO733xcTIfOhxzsQ0ohDfcTzsxaxypPw.TTTmkkp2m', '17640313081', '2022-03-03 05:46:21',
        'emailAdmin', 1);
INSERT INTO auth.user (id, password, phone, create_date, username, status)
VALUES (9, '$2a$10$qBu1znpsqbGjO733xcTIfOhxzsQ0ohDfcTzsxaxypPw.TTTmkkp2m', '17640313082', '2022-03-03 05:46:21',
        'mqAdmin', 1);
INSERT INTO auth.user (id, password, phone, create_date, username, status)
VALUES (10, '$2a$10$qBu1znpsqbGjO733xcTIfOhxzsQ0ohDfcTzsxaxypPw.TTTmkkp2m', '17640313083', '2022-03-03 05:46:21',
        'wsAdmin', 1);