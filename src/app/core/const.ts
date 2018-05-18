export const TEMPLATE_DISPLAY = 0;

export const TEMPLATE_FETCH = 1;

export const TEMPLATE_INCLUDEPATH = 2;


export const ACCOUNT_SUBSCRIPTION = 1;

export const ACCOUNT_SUBSCRIPTION_VERIFY = 3;

export const ACCOUNT_SERVICE = 2;

export const ACCOUNT_SERVICE_VERIFY = 4;

export const ACCOUNT_TYPE_OFFCIAL_NORMAL = 1;

export const ACCOUNT_TYPE_OFFCIAL_AUTH = 3;

export const ACCOUNT_TYPE_APP_NORMAL = 4;

export const ACCOUNT_TYPE_WEBAPP_NORMAL = 5;

export const ACCOUNT_TYPE_PHONEAPP_NORMAL = 6;

export const ACCOUNT_TYPE_APP_AUTH = 7;


export const ACCOUNT_TYPE_SIGN = 'account';

export const WXAPP_TYPE_SIGN = 'wxapp';

export const WEBAPP_TYPE_SIGN = 'webapp';

export const PHONEAPP_TYPE_SIGN = 'phoneapp';



export const ACCOUNT_OAUTH_LOGIN = 3;

export const ACCOUNT_NORMAL_LOGIN = 1;

export const WEIXIN_ROOT = 'https://mp.weixin.qq.com';
export const MEEPO_ROOT = 'https://meepo.com.cn';


export const ACCOUNT_OPERATE_ONLINE = 1;

export const ACCOUNT_OPERATE_MANAGER = 2;

export const ACCOUNT_OPERATE_CLERK = 3;


export const ACCOUNT_MANAGE_NAME_CLERK = 'clerk';

export const ACCOUNT_MANAGE_TYPE_OPERATOR = 1;
export const ACCOUNT_MANAGE_NAME_OPERATOR = 'operator';

export const ACCOUNT_MANAGE_TYPE_MANAGER = 2;
export const ACCOUNT_MANAGE_NAME_MANAGER = 'manager';

export const ACCOUNT_MANAGE_TYPE_OWNER = 3;
export const ACCOUNT_MANAGE_NAME_OWNER = 'owner';

export const ACCOUNT_MANAGE_NAME_FOUNDER = 'founder';
export const ACCOUNT_MANAGE_GROUP_FOUNDER = 1;

export const ACCOUNT_MANAGE_TYPE_VICE_FOUNDER = 4;
export const ACCOUNT_MANAGE_NAME_VICE_FOUNDER = 'vice_founder';
export const ACCOUNT_MANAGE_GROUP_VICE_FOUNDER = 2;

export const ACCOUNT_MANAGE_GROUP_GENERAL = 0;
export const ACCOUNT_MANAGE_NAME_UNBIND_USER = 'unbind_user';

export const ACCOUNT_NO_OWNER_UID = 0;


export const SYSTEM_COUPON = 1;

export const WECHAT_COUPON = 2;

export const COUPON_TYPE_DISCOUNT = '1';
export const COUPON_TYPE_CASH = '2';
export const COUPON_TYPE_GROUPON = '3';
export const COUPON_TYPE_GIFT = '4';
export const COUPON_TYPE_GENERAL = '5';
export const COUPON_TYPE_MEMBER = '6';
export const COUPON_TYPE_SCENIC = '7';
export const COUPON_TYPE_MOVIE = '8';
export const COUPON_TYPE_BOARDINGPASS = '9';
export const COUPON_TYPE_MEETING = '10';
export const COUPON_TYPE_BUS = '11';

export const ATTACH_FTP = 1;
export const ATTACH_OSS = 2;
export const ATTACH_QINIU = 3;
export const ATTACH_COS = 4;

export const ATTACH_TYPE_IMAGE = 1;
export const ATTACH_TYPE_VOICE = 2;
export const ATTACH_TYPE_VEDIO = 3;
export const ATTACH_TYPE_NEWS = 4;

export const ATTACHMENT_IMAGE = 'image';

export const ATTACH_SAVE_TYPE_FIXED = 1;
export const ATTACH_SAVE_TYPE_TEMP = 2;

export const STATUS_OFF = 0;
export const STATUS_ON = 1;
export const STATUS_SUCCESS = 0;

export const CACHE_EXPIRE_SHORT = 60;
export const CACHE_EXPIRE_MIDDLE = 300;
export const CACHE_EXPIRE_LONG = 3600;
export const CACHE_KEY_LENGTH = 100;


export const CACHE_KEY_MODULE_SETTING = 'module_setting:%s:%s';

export const CACHE_KEY_MODULE_INFO = 'module_info:%s';

export const CACHE_KEY_ACCOUNT_MODULES = 'unimodules:%s:%s';

export const CACHE_KEY_ACCOUNT_MODULES_BINDING = 'unimodules:binding:%s';

export const CACHE_KEY_MEMBER_INFO = 'memberinfo:%s';
export const CACHE_KEY_UNI_GROUP = 'uni_group';
export const CACHE_KEY_ACCOUNT_SWITCH = 'lastaccount:%s';


export const MODULE_SUPPORT_WXAPP = 2;
export const MODULE_NONSUPPORT_WXAPP = 1;

export const MODULE_SUPPORT_ACCOUNT = 2;
export const MODULE_NONSUPPORT_ACCOUNT = 1;

export const MODULE_NOSUPPORT_WEBAPP = 1;
export const MODULE_SUPPORT_WEBAPP = 2;

export const MODULE_NOSUPPORT_PHONEAPP = 1;
export const MODULE_SUPPORT_PHONEAPP = 2;

export const MODULE_SUPPORT_SYSTEMWELCOME = 2;
export const MODULE_NONSUPPORT_SYSTEMWELCOME = 1;

export const MODULE_NOSUPPORT_ANDROID = 1;
export const MODULE_SUPPORT_ANDROID = 2;

export const MODULE_NOSUPPORT_IOS = 1;
export const MODULE_SUPPORT_IOS = 2;


export const PERMISSION_ACCOUNT = 'system';
export const PERMISSION_WXAPP = 'wxapp';
export const PERMISSION_SYSTEM = 'site';


export const PAYMENT_WECHAT_TYPE_NORMAL = 1;
export const PAYMENT_WECHAT_TYPE_BORROW = 2;
export const PAYMENT_WECHAT_TYPE_SERVICE = 3;
export const PAYMENT_WECHAT_TYPE_CLOSE = 4;


export const FANS_CHATS_FROM_SYSTEM = 1;


export const WXAPP_STATISTICS_DAILYVISITTREND = 2;

export const WXAPP_DIY = 1;

export const WXAPP_TEMPLATE = 2;

export const WXAPP_MODULE = 3;

export const WXAPP_CREATE_MODULE = 1;

export const WXAPP_CREATE_MUTI_MODULE = 2;

export const WXAPP_CREATE_DEFAULT = 0;

export const MATERIAL_LOCAL = 'local';
export const MATERIAL_WEXIN = 'perm';


export const MENU_CURRENTSELF = 1;

export const MENU_HISTORY = 2;

export const MENU_CONDITIONAL = 3;



export const USER_STATUS_CHECK = 1;

export const USER_STATUS_NORMAL = 2;

export const USER_STATUS_BAN = 3;



export const USER_TYPE_COMMON = 1;

export const USER_TYPE_CLERK = 3;


export const PERSONAL_BASE_TYPE = 1;
export const PERSONAL_AUTH_TYPE = 2;
export const PERSONAL_LIST_TYPE = 3;


export const STORE_TYPE_MODULE = 1;
export const STORE_TYPE_ACCOUNT = 2;
export const STORE_TYPE_WXAPP = 3;
export const STORE_TYPE_WXAPP_MODULE = 4;
export const STORE_TYPE_PACKAGE = 5;
export const STORE_TYPE_API = 6;
export const STORE_TYPE_ACCOUNT_RENEW = 7;
export const STORE_TYPE_WXAPP_RENEW = 8;
export const STORE_TYPE_USER_PACKAGE = 9;

export const STORE_ORDER_PLACE = 1;
export const STORE_ORDER_DELETE = 2;
export const STORE_ORDER_FINISH = 3;

export const STORE_GOODS_STATUS_OFFlINE = 0;
export const STORE_GOODS_STATUS_ONLINE = 1;
export const STORE_GOODS_STATUS_DELETE = 2;


export const ARTICLE_PCATE = 0;
export const ARTICLE_CCATE = 0;



export const USER_REGISTER_TYPE_QQ = 1;

export const USER_REGISTER_TYPE_WECHAT = 2;

export const USER_REGISTER_TYPE_MOBILE = 3;



export const MESSAGE_ORDER_TYPE = 1;

export const MESSAGE_ACCOUNT_EXPIRE_TYPE = 2;

export const MESSAGE_WECHAT_EXPIRE_TYPE = 5;

export const MESSAGE_WEBAPP_EXPIRE_TYPE = 6;

export const MESSAGE_WORKORDER_TYPE = 3;

export const MESSAGE_REGISTER_TYPE = 4;

export const MESSAGE_USER_EXPIRE_TYPE = 7;

export const MESSAGE_WXAPP_MODULE_UPGRADE = 8;


export const MESSAGE_NOREAD = 1;
export const MESSAGE_READ = 2;


export const FILE_NO_UNIACID = -1;


export const OAUTH_TYPE_BASE = 1;
export const OAUTH_TYPE_USERINFO = 2;


export const ARTICLE_COMMENT_DEFAULT = 0;

export const ARTICLE_NOCOMMENT = 1;

export const ARTICLE_COMMENT = 2;

export const ARTICLE_COMMENT_NOREAD = 1;

export const ARTICLE_COMMENT_READ = 2;


export const COMMENT_STATUS_OFF = 0;

export const COMMENT_STATUS_ON = 1;


export const WELCOME_DISPLAY_TYPE = 0;

export const LASTVISIT_DISPLAY_TYPE = 1;

export const ACCOUNT_DISPLAY_TYPE = 2;

export const WXAPP_DISPLAY_TYPE = 3;

export const WEBAPP_DISPLAY_TYPE = 4;

export const PHONEAPP_DISPLAY_TYPE = 5;
