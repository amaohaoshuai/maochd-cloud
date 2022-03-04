create table role_perm_mapping
(
    role_id bigint default 0 null comment '角色ID',
    perm_id bigint default 0 null comment '权限ID'
) comment '角色权限映射' charset = utf8mb4;

INSERT INTO auth.role_perm_mapping (role_id, perm_id)
VALUES (2, 1);
INSERT INTO auth.role_perm_mapping (role_id, perm_id)
VALUES (2, 2);
INSERT INTO auth.role_perm_mapping (role_id, perm_id)
VALUES (2, 3);
INSERT INTO auth.role_perm_mapping (role_id, perm_id)
VALUES (2, 4);
INSERT INTO auth.role_perm_mapping (role_id, perm_id)
VALUES (2, 5);