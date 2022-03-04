package com.maochd.cloud.common.core.constant;

public interface SecurityConstants {

    /**
     * 认证请求头key
     */
    String AUTHORIZATION_KEY = "Authorization";

    /**
     * JWT令牌前缀
     */
    String JWT_PREFIX = "Bearer ";

    /**
     * JWT存储权限前缀
     */
    String AUTHORITY_PREFIX = "ROLE_";

    /**
     * JWT存储权限属性
     */
    String JWT_AUTHORITIES_KEY = "authorities";

    /**
     * Token缓存key值
     */
    String ACCESS_TOKEN = "accessToken:";

    /**
     * 全局状态-是
     */
    Integer STATUS_YES = 1;

    /**
     * token过期时间
     */
    int TOKEN_EXPIRE_TIME = 7200;

    /**
     * token刷新时间
     */
    int TOKEN_REFRESH_TIME = 7200;

    /**
     * 用户信息
     */
    String USER_INFO = "userInfo";

    /**
     * 角色权限映射
     */
    String ROLE_PERM_MAP = "rolePermMap";

    /**
     * 非对称加密
     */
    String KEY_RSA = "RSA";

}
