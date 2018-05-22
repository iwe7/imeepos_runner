<?php
global $_W, $_GPC;
$id = $_GPC['id'];
$item = pdo_get('runner_open_bug', array('id' => $id));
$item['create_time'] = date('y-m-d', $item['create_time']);
meepoSuccess('', $item);
