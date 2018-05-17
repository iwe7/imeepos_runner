<?php
global $_W, $_GPC;

// ini_set('display_errors', true);
// error_reporting(E_ALL);
$send_type = $_GPC['send_type'];
$params = array();
if (!isset($_GPC['send_type']) || $send_type == '-1') {

} else {
    $params['send_type'] = intval($send_type);
}

if (empty($_GPC['opt']) || $_GPC['opt'] === 'all') {
    $params['status'] = 0;
    $list = pdo_getall('runner_open_tasks', $params, array(), '', 'id desc');
    foreach ($list as &$li) {
        $li['subscribe_time'] = date('m-d H:i', $li['subscribe_time']);
        $li['steps'] = unserialize($li['steps']);
        $li['add_time_title'] = date('m-d H:i', $li['add_time']);
    }
    unset($li);
} else {
    $uid = $_W['member']['uid'];
    $params['driver_jobnum'] = $uid;
    $list = pdo_getall('runner_open_tasks', $params, array(), '', 'id desc');
    foreach ($list as &$li) {
        $li['subscribe_time'] = date('m-d H:i', $li['subscribe_time']);
        $li['steps'] = unserialize($li['steps']);
    }
    unset($li);
}

meepoSuccess('获取成功', $list);
