<?php
global $_W, $_GPC;
$form = $_GPC['__input'];
$button = $form['button'];
$mode = $form['mode'];
$mode = $mode ? $mode : 'default';
$layout = $form['layout'] ? $form['layout'] : 'horizontal';
$firstVisual = isset($form['firstVisual']) ? $form['firstVisual'] : 1;
$liveValidate = isset($form['liveValidate']) ? $form['liveValidate'] : 1;
$autocomplete = isset($form['autocomplete']) ? $form['autocomplete'] : 'on';
$data = array();
$data['mode'] = $form['mode'] ? $form['mode'] : 'default';
$data['button'] = serialize($button);
$data['layout'] = $layout;
$data['firstVisual'] = $firstVisual;
$data['liveValidate'] = $liveValidate;
$data['autocomplete'] = $autocomplete;

$item = pdo_get('runner_open_forms_builder', array('code' => $form['code']));
if (empty($item)) {
    pdo_insert('runner_open_forms_builder', $data);
} else {
    pdo_update('runner_open_forms_builder', $data, array('id' => $item['id']));
}
meepoSuccess('', $data);
