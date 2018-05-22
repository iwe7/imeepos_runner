<?php
global $_W, $_GPC;

$data = array();

$sql = "SELECT * FROM " . tablename('runner_open_bug') . " WHERE status>0 limit 10";
$bugs = pdo_fetchall($sql, array());
foreach ($bugs as $bug) {
    $data[] = array(
        'type' => 'Bug',
        'title' => $bug['title'],
        'description' => $dug['desc'],
        'datetime' => date('Y-m-d H:i', $bug['create_time']),
        'extra' => getTitle($bug['status']),
        'read' => false,
        'id' => $bug['id'],
    );
}
meepoSuccess('', $data);

function getTitle($status = 1)
{
    switch ($status) {
        case 1:
            return '提交bug';
            break;
        case 2:
            return 'bug核对';
            break;
        case 3:
            return '技术修复';
            break;
        case 4:
            return '更新发布';
            break;
        default:
            return '';
            break;
    }
}
