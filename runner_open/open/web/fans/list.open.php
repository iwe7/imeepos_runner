<?php
global $_W, $_GPC;
$table = 'mc_mapping_fans';
$where = "";
$params = array();

$pi = $_GPC['pi'];
$ps = $_GPC['ps'];
$pi = $pi > 0 ? $pi : 1;
$ps = $ps > 0 ? $ps : 10;
$where = " AND uniacid=:uniacid";
$params[':uniacid'] = $_W['uniacid'];

$sql = "SELECT * FROM " . tablename($table) . " WHERE 1 {$where} LIMIT " . ($pi - 1) * $ps . "," . $ps;
$list = pdo_fetchall($sql, $params);
$sql = "SELECT COUNT(*) FROM " . tablename($table) . " WHERE 1 {$where}";
$total = pdo_fetchcolumn($sql, $params);

foreach ($list as &$li) {
    $li['follow'] = $li['follow'] == '1' ? true : false;
    if ($li['followtime'] > 0) {
        $li['followtime'] = date('Y-m-d H:i', $li['followtime']);
    } else {
        $li['followtime'] = '未记录';
    }
    if ($li['unfollowtime'] > 0) {
        $li['unfollowtime'] = date('Y-m-d H:i', $li['unfollowtime']);
    } else {
        $li['unfollowtime'] = '未记录';
    }
    if ($li['updatetime'] > 0) {
        $li['updatetime'] = date('Y-m-d H:i', $li['updatetime']);
    } else {
        $li['updatetime'] = '未记录';
    }
}
unset($li);

meepoSuccess('', array(
    'list' => $list,
    'total' => $total,
));
