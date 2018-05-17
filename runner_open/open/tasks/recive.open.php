<?php
global $_W, $_GPC;
$input = $_GPC['__input'];
$data = array();
$uid = $_W['member']['uid'];
if (empty($uid)) {
    $data['code'] = -2;
    $data['msg'] = '登录失效，请重新登录';
    die(json_encode($data));
}
$member = pdo_get('mc_members', array('uid' => $uid));
if (empty($member)) {
    $data['code'] = -2;
    $data['msg'] = '会员信息有误，请重新登录';
    die(json_encode($data));
}
$task = pdo_get('runner_open_tasks', array('id' => $input['id']));
if (empty($task)) {
    $data['code'] = -1;
    $data['msg'] = '任务不存在或已撤销';
    die(json_encode($data));
}
if ($task['status'] > 0) {
    $data['code'] = -1;
    $data['msg'] = '任务已被抢';
    die(json_encode($data));
}

$driver = array();
$driver['driver_name'] = $member['realname'];
$driver['driver_jobnum'] = $member['uid'];
$driver['driver_mobile'] = $member['mobile'];
$driver['status'] = 1;

$task = pdo_get('runner_open_tasks', array('id' => $input['id']));
if (!empty($task)) {
    // 更新远程任务状态
    $poi = new BmapPoiModel();
    $cloudTask = array(
        'id' => $task['geotable_id'],
        'geotable_id' => $_W['meepo']['runner_open_tasks'],
        'status' => 1,
    );
    $re = $poi->update($cloudTask);
    if ($re['status'] != 0) {
        $re['code'] = -1;
        $re['task'] = $cloudTask;
        die(json_encode($re));
    } else {
        pdo_update('runner_open_tasks', $driver, array('id' => $input['id']));
    }
}

$data['code'] = 0;
$data['msg'] = '抢单成功';
die(json_encode($data));
