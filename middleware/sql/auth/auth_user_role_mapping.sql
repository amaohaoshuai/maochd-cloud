create table user_role_mapping
(
    user_id bigint default 0 null comment '用户ID',
    role_id bigint default 0 null comment '角色ID'
) comment '用户角色映射'  charset = utf8mb4;

INSERT INTO auth.user_role_mapping (user_id, role_id)
VALUES (3, 1);
INSERT INTO auth.user_role_mapping (user_id, role_id)
VALUES (4, 2);
INSERT INTO auth.user_role_mapping (user_id, role_id)
VALUES (3, 3);
INSERT INTO auth.user_role_mapping (user_id, role_id)
VALUES (3, 4);
INSERT INTO auth.user_role_mapping (user_id, role_id)
VALUES (3, 5);
INSERT INTO auth.user_role_mapping (user_id, role_id)
VALUES (3, 6);
INSERT INTO auth.user_role_mapping (user_id, role_id)
VALUES (3, 7);
INSERT INTO auth.user_role_mapping (user_id, role_id)
VALUES (2, 8);