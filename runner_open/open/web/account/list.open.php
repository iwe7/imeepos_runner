<?php
global $_W, $_GPC;
$pindex = max(1, intval($_GPC['page']));
$psize = 10;
$type = safe_gpc_string($_GPC['type']);
$title = safe_gpc_string($_GPC['title']);
$type = in_array($type, array('all', ACCOUNT_TYPE_SIGN, WXAPP_TYPE_SIGN, WEBAPP_TYPE_SIGN, PHONEAPP_TYPE_SIGN)) ? $type : 'all';
if ($type == 'all') {
    $title = ' 公众号/小程序/PC/APP ';
}
if ($type == 'all') {
    $tableName = ACCOUNT_TYPE_SIGN;
    $condition = array(ACCOUNT_TYPE_OFFCIAL_NORMAL, ACCOUNT_TYPE_OFFCIAL_AUTH, ACCOUNT_TYPE_APP_NORMAL, ACCOUNT_TYPE_APP_AUTH, ACCOUNT_TYPE_WEBAPP_NORMAL, ACCOUNT_TYPE_PHONEAPP_NORMAL);
    $fields = 'a.uniacid,b.type';
} elseif ($type == ACCOUNT_TYPE_SIGN) {
    $tableName = ACCOUNT_TYPE_SIGN;
    $condition = array(ACCOUNT_TYPE_OFFCIAL_NORMAL, ACCOUNT_TYPE_OFFCIAL_AUTH);
} elseif ($type == WXAPP_TYPE_SIGN) {
    $tableName = WXAPP_TYPE_SIGN;
    $condition = array(ACCOUNT_TYPE_APP_NORMAL, ACCOUNT_TYPE_APP_AUTH);
} elseif ($type == WEBAPP_TYPE_SIGN) {
    $tableName = WEBAPP_TYPE_SIGN;
    $condition = array(ACCOUNT_TYPE_WEBAPP_NORMAL);
} elseif ($type == PHONEAPP_TYPE_SIGN) {
    $tableName = PHONEAPP_TYPE_SIGN;
    $condition = array(ACCOUNT_TYPE_PHONEAPP_NORMAL);
}
$table = table($tableName);
$table->searchWithType($condition);
$keyword = safe_gpc_string($_GPC['keyword']);
if (!empty($keyword)) {
    $table->searchWithKeyword($keyword);
}
$letter = safe_gpc_string($_GPC['letter']);
if (isset($letter) && strlen($letter) == 1) {
    $table->searchWithLetter($letter);
}
$table->accountRankOrder();
$table->searchWithPage($pindex, $psize);
$list = $table->searchAccountListFields($fields);
$total = $table->getLastQueryTotal();
$list = array_values($list);
foreach ($list as &$account) {
    $account = uni_fetch($account['uniacid']);
    switch ($account['type']) {
        case ACCOUNT_TYPE_OFFCIAL_NORMAL:
        case ACCOUNT_TYPE_OFFCIAL_AUTH:
            $account['role'] = permission_account_user_role($_W['uid'], $account['uniacid']);
            break;
        case ACCOUNT_TYPE_APP_NORMAL:
        case ACCOUNT_TYPE_APP_AUTH:
            $account['versions'] = wxapp_get_some_lastversions($account['uniacid']);
            if (!empty($account['versions'])) {
                foreach ($account['versions'] as $version) {
                    if (!empty($version['current'])) {
                        $account['current_version'] = $version;
                    }
                }
            }
            break;
        case ACCOUNT_TYPE_WEBAPP_NORMAL:
            $account['switchurl'] = url('account/display/switch', array('uniacid' => $account['uniacid']));
            break;
        case ACCOUNT_TYPE_PHONEAPP_NORMAL:
            $account['versions'] = phoneapp_get_some_lastversions($account['uniacid']);
            if (!empty($account['versions'])) {
                foreach ($account['versions'] as $version) {
                    if (!empty($version['current'])) {
                        $account['current_version'] = $version;
                    }
                }
            }
            break;
    }
}

meepoSuccess('', $list);
