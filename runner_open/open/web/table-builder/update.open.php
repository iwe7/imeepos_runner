<?php
global $_W, $_GPC;
$data = $_GPC['__input'];
if (isset($data['resReName'])) {
    $data['resReName'] = serialize($data['resReName']);
}
if (!empty($data['id'])) {
    pdo_update('runner_open_table_builder', $data, array('id' => $data['id']));
}
meepoSuccess('', $data);
