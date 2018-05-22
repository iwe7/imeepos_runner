<?php
global $_W, $_GPC;
$data = $_GPC['__input'];
$id = $_GPC['id'];

$item = pdo_get('runner_open_table_builder', array('id' => $id));
if (!empty($item)) {
    if (empty($item['columns'])) {
        $item['columns'] = array();
    } else {
        $item['columns'] = unserialize($item['columns']);
    }
    $item['columns'][] = $data;
    $item['columns'] = serialize($item['columns']);
    pdo_update('runner_open_table_builder', $item, array('id' => $id));
    $item['columns'] = unserialize($item['columns']);
}
meepoSuccess('', $item);
