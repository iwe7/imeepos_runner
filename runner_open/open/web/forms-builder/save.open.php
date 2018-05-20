<?php
global $_W, $_GPC;

$input = $_GPC["__input"];
$formData = $input['formData'];
$form = $formData['form'];
$data = array();
$data['code'] = 'schema.forms.' . $form['code'];
$data['value'] = serialize($input);
$data['uniacid'] = -1;

$item = pdo_get('runner_open_setting', array('code' => $data['code']));
if (empty($item)) {
    pdo_insert('runner_open_setting', $data);
} else {
    pdo_update('runner_open_setting', $data, array('id' => $item['id']));
}
meepoSuccess('', $data);
