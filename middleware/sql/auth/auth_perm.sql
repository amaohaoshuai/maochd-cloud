create table perm
(
    id             bigint auto_increment
        primary key,
    perm_path      varchar(256) default '' not null comment '路径',
    interface_name varchar(256) default '' null comment '接口名称',
    request_type   varchar(16)  default '' null comment '请求方式'
) comment '权限' charset = utf8mb4;

INSERT INTO auth.perm (id, perm_path, interface_name, request_type)
VALUES (1, '/goods/*', 'deleteById', 'DELETE');
INSERT INTO auth.perm (id, perm_path, interface_name, request_type)
VALUES (2, '/goods/get/*', 'getById', 'GET');
INSERT INTO auth.perm (id, perm_path, interface_name, request_type)
VALUES (3, '/goods/list', 'list', 'POST');
INSERT INTO auth.perm (id, perm_path, interface_name, request_type)
VALUES (4, '/goods/page', 'page', 'POST');
INSERT INTO auth.perm (id, perm_path, interface_name, request_type)
VALUES (5, '/goods/reduce/inventory/**', 'reduceInventory', 'PUT');