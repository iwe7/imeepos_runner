<?php
global $_W, $_GPC;
$pi = intval($_GPC['pi']);
$ps = intval($_GPC['ps']);
$pi = $pi > 0 ? $pi : 1;
$ps = $ps > 0 ? $ps : 10;
$params = array();

$where = "";
if (isset($_GPC['id'])) {
    $where .= ' AND id=:id';
    $params[':id'] = intval($_GPC['id']);
}
$sql = "SELECT * FROM " . tablename('runner_open_table_builder') . " WHERE 1 {$where} LIMIT " . ($pi - 1) * $ps . "," . $ps;
$list = pdo_fetchall($sql, $params);
$sql = "SELECT COUNT(*) FROM " . tablename('runner_open_table_builder') . " WHERE 1 {$where}";
$total = pdo_fetchcolumn($sql, $params);
foreach ($list as &$li) {
    $li['resReName'] = unserialize($li['resReName']);
    $li['create_time'] = date('Y-m-d H:i', $li['create_time']);
}
unset($li);
meepoSuccess('', array(
    'total' => $total,
    'list' => $list,
));
