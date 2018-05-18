<?php
global $_W, $_GPC;
$data = array();
$data['code'] = -1;
if (empty($_W['member']) || empty($_W['member']['uid'])) {
    $data['msg'] = '登录失效';
    die(json_encode($data));
} else {
    $member = pdo_get('mc_members', array('uid' => $_W['member']['uid'], 'uniacid' => $_W['uniacid']));
    $user = array();
    $user['sign'] = $member['bio'];
    $user['realname'] = $member['realname'];
    $user['nickname'] = $member['nickname'];
    $user['avatar'] = $member['avatar'];
    $user['cardnum'] = $member['idcard'];
    $user['sex'] = $member['gender'];
    $user['mobile'] = $member['mobile'];
    $data['code'] = 0;
    $data['msg'] = '获取成功';
    $data['data'] = $user;
    die(json_encode($data));
}
