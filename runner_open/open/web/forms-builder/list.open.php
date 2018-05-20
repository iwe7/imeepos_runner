<?php
global $_W, $_GPC;

$sql = "SELECT * FROM " . tablename('runner_open_setting') . " WHERE code like 'schema.forms.%'";
$list = pdo_fetchall($sql, array());
foreach ($list as &$li) {
    $li['value'] = unserialize($li['value']);
    $li['form'] = $li['value']['formData']['form'];
    $li['schema'] = $li['value']['schema'];
}
unset($li);
meepoSuccess('', $list);
