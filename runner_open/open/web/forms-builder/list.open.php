<?php
global $_W, $_GPC;

$sql = "SELECT * FROM " . tablename('runner_open_forms_builder') . " WHERE 1 ORDER BY id DESC";
$list = pdo_fetchall($sql, array());
foreach ($list as &$li) {
    $li['form'] = unserialize($li['form']);
    $li['schema'] = unserialize($li['schema']);
    $li['formData'] = unserialize($li['formData']);
}
unset($li);
meepoSuccess('', $list);
