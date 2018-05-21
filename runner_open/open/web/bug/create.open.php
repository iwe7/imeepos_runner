<?php
global $_W, $_GPC;
$input = $_GPC['__input'];
$data = array();
$data['title'] = $input['title'];
$data['desc'] = $input['desc'];
$data['uniacid'] = $_W['uniacid'];
$data['create_time'] = time();
$data['status'] = 0;

pdo_insert('runner_open_bug', $data);
$data['id'] = pdo_insertid();
meepoSuccess('', $data);
