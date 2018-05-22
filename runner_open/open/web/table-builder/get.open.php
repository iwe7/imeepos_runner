<?php
global $_W, $_GPC;
$id = intval($_GPC['id']);
$code = trim($_GPC['code']);
if (!empty($id)) {
    $item = pdo_get('runner_open_table_builder', array('id' => $id));
} else {
    $item = pdo_get('runner_open_table_builder', array('code' => $code));
}
$item['resReName'] = unserialize($item['resReName']);
$item['columns'] = unserialize($item['columns']);
$item['search'] = unserialize($item['search']);
meepoSuccess('', $item);
