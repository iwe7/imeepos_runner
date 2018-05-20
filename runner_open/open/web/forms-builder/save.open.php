<?php
global $_W, $_GPC;

$input = $_GPC["__input"];
$form = $input['form'];
$schema = $input['schema'];

$data = array();
$data['code'] = $form['code'];
$data['form'] = serialize($form);
$data['schema'] = serialize($schema);

$data['create_time'] = time();
$item = pdo_get('runner_open_forms_builder', array('code' => $data['code']));
if (empty($item)) {
    pdo_insert('runner_open_forms_builder', $data);
} else {
    pdo_update('runner_open_forms_builder', $data, array('id' => $item['id']));
}
meepoSuccess('', $data);
