<?php
global $_W, $_GPC;
$input = $_GPC['__input'];
$code = trim($input['code']);
$data = pdo_get('runner_open_forms_builder', array('code' => $code));
if (empty($data)) {
    $data = array();
} else {
    pdo_delete('runner_open_forms_builder', array('id' => $data['id']));
}
meepoSuccess('', $data);
