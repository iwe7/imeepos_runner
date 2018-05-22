<?php
global $_W, $_GPC;

$data = $_GPC['__input'];
$data['resReName'] = serialize($data['resReName']);
$data['create_time'] = time();

$item = pdo_get('runner_open_table_builder', array('code' => $data['code']));
if (empty($item)) {
    pdo_insert('runner_open_table_builder', $data);
} else {
    pdo_update('runner_open_table_builder', $data, array('id' => $item['id']));
}

meepoSuccess('', $data);
