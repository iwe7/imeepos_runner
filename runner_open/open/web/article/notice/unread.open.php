<?php
global $_W, $_GPC;
$table = 'article_notice';
$where = "";
$params = array();
$uid = $_W['uid'];
$where = " AND unread.uid =:uid ";
$params[':uid'] = $uid;

$pi = $_GPC['pi'];
$ps = $_GPC['ps'];
$pi = $pi > 0 ? $pi : 1;
$ps = $ps > 0 ? $ps : 10;

$sql = "SELECT * FROM " . tablename('article_unread_notice') . " as unread LEFT JOIN " .
table('article_notice') . " as notice ON unread.notice_id = notice.id WHERE 1 {$where} LIMIT " . ($pi - 1) * $ps . "," . $ps;
$list = pdo_fetchall($sql, $params);
$sql = "SELECT COUNT(*) FROM " . tablename($table) . " WHERE 1 {$where}";
$total = pdo_fetchcolumn($sql, $params);

foreach ($list as &$li) {

}
unset($li);

meepoSuccess('', array(
    'list' => $list,
    'total' => $total,
));
