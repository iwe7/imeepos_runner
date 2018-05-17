<?php
global $_W, $_GPC;

$input = $_GPC['__input'];

$data = array();
$data['realname'] = trim($input['realname']);
$data['nickname'] = trim($input['nickname']);
$data['idcard'] = trim($input['cardnum']);
$data['gender'] = intval($input['sex']);
$data['bio'] = trim($input['sign']);
$data['avatar']= uploadBase64($input['avatar']);
pdo_update('mc_members', $data, array('uid' => $_W['member']['uid']));
die(json_encode($input));
