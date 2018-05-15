<?php
global $_W, $_GPC;

$app = array(
    'name' => '小明跑腿',
    "description" => '小明同城跑腿系统',
);

$user = array(
    'name' => $_W['user']['name'] ? $_W['user']['name'] : '游客',
    'avatar' => $_W['user']['avatar'] ? $_W['user']['avatar'] : './assets/_/img/avatar.jpg',
    'email' => $_W['user']['mobile'] ? $_W['user']['mobile'] : '未填写',
    'joindate' => $_W['user'] ? date('y-m-d', $_W['user']['joindate']) : '',
    'lastvisit' => $_W['user'] ? date('y-m-d', $_W['user']['lastvisit']) : '',
    'endtime' => $_W['user']['endtime'] ? date('y-m-d', $_W['user']['endtime']) : '永久',
    'role' => array(
        $_W['role'],
    ),
);

$accounts = getAccountList();

$menu = array();
$menu[] = array(
    'text' => '权限管理',
    "group" => true,
    "acl" => "founder",
    "children" => array(
        array(
            "text" => '角色组',
            "link" => '/role/group',
        ),
        array(
            "text" => '权限设置',
            'link' => '/role/setting',
        ),
    ),
);
$menu[] = array(
    'text' => 'bug反馈',
    "group" => true,
    "children" => array(
        array(
            "text" => 'bug反馈',
            "link" => '/bug/post',
        ),
        array(
          "text" => 'bug进度',
          "link" => '/bug/log',
      ),
    ),
);

die(json_encode(array(
    'app' => $app,
    'user' => $user,
    'menu' => $menu,
    'accounts' => $accounts,
    "_w" => $_W['user'],
)));

function getAccountList()
{
    global $_W, $_GPC;
    load()->func('file');
    load()->model('user');
    load()->model('message');
    load()->model('wxapp');
    $pindex = 1;
    $psize = 50;
    $type_condition = array(
        ACCOUNT_TYPE_APP_NORMAL => array(ACCOUNT_TYPE_APP_NORMAL, ACCOUNT_TYPE_APP_AUTH),
        ACCOUNT_TYPE_WEBAPP_NORMAL => array(ACCOUNT_TYPE_WEBAPP_NORMAL),
        ACCOUNT_TYPE_OFFCIAL_NORMAL => array(ACCOUNT_TYPE_OFFCIAL_NORMAL, ACCOUNT_TYPE_OFFCIAL_AUTH),
        ACCOUNT_TYPE_PHONEAPP_NORMAL => array(ACCOUNT_TYPE_PHONEAPP_NORMAL),
    );
    $account_table = table('account');
    $account_table->searchWithType($type_condition[1]);
    $account_table->searchWithPage($pindex, $psize);
    $list = $account_table->searchAccountList();
    foreach ($list as &$account) {
        $account = uni_fetch($account['uniacid']);
        $account['end'] = $account['endtime'] == 0 ? '永久' : date('Y-m-d', $account['starttime']) . '~' . date('Y-m-d', $account['endtime']);
        $account['role'] = permission_account_user_role($_W['uid'], $account['uniacid']);
        $account['versions'] = wxapp_get_some_lastversions($account['uniacid']);
        if (!empty($account['versions'])) {
            foreach ($account['versions'] as $version) {
                if (!empty($version['current'])) {
                    $account['current_version'] = $version;
                }
            }
        }
    }
    return $list;
}

$json = '{
  "menu": [{
      "text": "主导航",
      "i18n": "main_navigation",
      "group": true,
      "hideInBreadcrumb": true,
      "children": [{
          "text": "仪表盘",
          "i18n": "dashboard",
          "icon": "icon-speedometer",
          "children": [{
              "text": "仪表盘V1",
              "link": "/dashboard/v1",
              "i18n": "dashboard_v1"
            },
            {
              "text": "分析页",
              "link": "/dashboard/analysis",
              "i18n": "dashboard_analysis"
            },
            {
              "text": "Monitor",
              "link": "/dashboard/monitor",
              "i18n": "dashboard_monitor"
            },
            {
              "text": "Workplace",
              "link": "/dashboard/workplace",
              "i18n": "dashboard_workplace"
            }
          ]
        },
        {
          "text": "快捷菜单",
          "i18n": "shortcut",
          "icon": "icon-rocket",
          "shortcut_root": true,
          "children": []
        },
        {
          "text": "小部件",
          "i18n": "widgets",
          "link": "/widgets",
          "icon": "icon-grid",
          "badge": 2
        },
        {
          "text": "任务管理",
          "i18n": "tasks",
          "icon": "icon-grid",
          "badge": 2,
          "children": [{
            "text": "概述",
            "link": "/tasks",
            "i18n": "tasks_dashboard"
          }]
        }
      ]
    },
    {
      "text": "Alain",
      "group": true,
      "hideInBreadcrumb": true,
      "children": [{
          "text": "样式",
          "i18n": "style",
          "icon": "icon-chemistry",
          "children": [{
              "text": "Typography",
              "link": "/style/typography",
              "i18n": "typography",
              "shortcut": true
            },
            {
              "text": "Grid Masonry",
              "link": "/style/gridmasonry",
              "i18n": "gridmasonry"
            },
            {
              "text": "Colors",
              "link": "/style/colors",
              "i18n": "colors"
            }
          ]
        },
        {
          "text": "Delon",
          "i18n": "delon",
          "icon": "icon-magic-wand",
          "children": [{
              "text": "Dynamic Form",
              "link": "/delon/form",
              "i18n": "dynamic-form"
            },
            {
              "text": "Simple Table",
              "link": "/delon/simple-table",
              "i18n": "simple-table"
            },
            {
              "text": "Util",
              "link": "/delon/util",
              "i18n": "util",
              "acl": "role-a"
            },
            {
              "text": "Print",
              "link": "/delon/print",
              "i18n": "print",
              "acl": "role-b"
            },
            {
              "text": "QR",
              "link": "/delon/qr",
              "i18n": "qr"
            },
            {
              "text": "ACL",
              "link": "/delon/acl",
              "i18n": "acl"
            },
            {
              "text": "Route Guard",
              "link": "/delon/guard",
              "i18n": "guard"
            },
            {
              "text": "Cache",
              "link": "/delon/cache",
              "i18n": "cache"
            },
            {
              "text": "Down File",
              "link": "/delon/downfile",
              "i18n": "downfile"
            },
            {
              "text": "Xlsx",
              "link": "/delon/xlsx",
              "i18n": "xlsx"
            },
            {
              "text": "Zip",
              "link": "/delon/zip",
              "i18n": "zip"
            }
          ]
        }
      ]
    },
    {
      "text": "Pro",
      "i18n": "pro",
      "group": true,
      "hideInBreadcrumb": true,
      "children": [{
          "text": "Form Page",
          "i18n": "form",
          "link": "/pro/form",
          "icon": "icon-note",
          "hideInBreadcrumb": true,
          "children": [{
              "text": "Basic Form",
              "link": "/pro/form/basic-form",
              "i18n": "basic-form",
              "shortcut": true
            },
            {
              "text": "Step Form",
              "link": "/pro/form/step-form",
              "i18n": "step-form"
            },
            {
              "text": "Advanced Form",
              "link": "/pro/form/advanced-form",
              "i18n": "advanced-form"
            }
          ]
        },
        {
          "text": "List",
          "i18n": "pro-list",
          "icon": "icon-grid",
          "hideInBreadcrumb": true,
          "children": [{
              "text": "Table List",
              "link": "/pro/list/table-list",
              "i18n": "pro-table-list",
              "shortcut": true
            },
            {
              "text": "Basic List",
              "link": "/pro/list/basic-list",
              "i18n": "pro-basic-list"
            },
            {
              "text": "Card List",
              "link": "/pro/list/card-list",
              "i18n": "pro-card-list"
            },
            {
              "text": "Search List",
              "i18n": "pro-search",
              "children": [{
                  "link": "/pro/list/articles",
                  "i18n": "pro-search-article"
                },
                {
                  "link": "/pro/list/projects",
                  "i18n": "pro-search-project",
                  "shortcut": true
                },
                {
                  "link": "/pro/list/applications",
                  "i18n": "pro-search-app"
                }
              ]
            }
          ]
        },
        {
          "text": "Profile",
          "i18n": "pro-profile",
          "icon": "icon-book-open",
          "hideInBreadcrumb": true,
          "children": [{
              "text": "Basic",
              "link": "/pro/profile/basic",
              "i18n": "pro-profile-basic"
            },
            {
              "text": "Advanced",
              "link": "/pro/profile/advanced",
              "i18n": "pro-profile-advanced",
              "shortcut": true
            }
          ]
        },
        {
          "text": "Result",
          "i18n": "pro-result",
          "icon": "icon-check",
          "hideInBreadcrumb": true,
          "children": [{
              "text": "Success",
              "link": "/pro/result/success",
              "i18n": "pro-result-success"
            },
            {
              "text": "Fail",
              "link": "/pro/result/fail",
              "i18n": "pro-result-fail"
            }
          ]
        },
        {
          "text": "Exception",
          "i18n": "pro-exception",
          "link": "/",
          "icon": "icon-fire",
          "children": [{
              "text": "403",
              "link": "/403",
              "reuse": false
            },
            {
              "text": "404",
              "link": "/404",
              "reuse": false
            },
            {
              "text": "500",
              "link": "/500",
              "reuse": false
            }
          ]
        },
        {
          "text": "User",
          "i18n": "pro-user",
          "icon": "icon-user",
          "children": [{
              "text": "login",
              "link": "/passport/login",
              "i18n": "pro-login",
              "reuse": false
            },
            {
              "text": "register",
              "link": "/passport/register",
              "i18n": "pro-register",
              "reuse": false
            },
            {
              "text": "register result",
              "link": "/passport/register-result",
              "i18n": "pro-register-result",
              "reuse": false
            }
          ]
        }
      ]
    },
    {
      "text": "More",
      "i18n": "more",
      "group": true,
      "hideInBreadcrumb": true,
      "children": [{
          "text": "Report",
          "i18n": "report",
          "icon": "anticon anticon-cloud-o",
          "children": [{
            "text": "Relation",
            "link": "/data-v/relation",
            "i18n": "relation",
            "reuse": false
          }]
        },
        {
          "text": "Extras",
          "i18n": "extras",
          "link": "/extras",
          "icon": "icon-cup",
          "children": [{
              "text": "Help Center",
              "link": "/extras/helpcenter",
              "i18n": "helpcenter"
            },
            {
              "text": "Settings",
              "link": "/extras/settings",
              "i18n": "settings"
            },
            {
              "text": "Poi",
              "link": "/extras/poi",
              "i18n": "poi"
            }
          ]
        }
      ]
    }
  ]
}
';
