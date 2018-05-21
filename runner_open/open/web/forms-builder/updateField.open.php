<?php
global $_W, $_GPC;

$form = $_GPC['__input'];
$data = $form['data'];
$item = pdo_get('runner_open_forms_builder', array('code' => $form['code']));
$item['schema'] = unserialize($item['schema']);
$item['schema']['properties'][$data['name']] = $data;

$item['schema'] = serialize($item['schema']);
if (!empty($item)) {
    pdo_update('runner_open_forms_builder', $item, array('id' => $item['id']));
}
meepoSuccess('', $item);
