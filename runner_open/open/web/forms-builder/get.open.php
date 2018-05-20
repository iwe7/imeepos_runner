<?php
global $_W, $_GPC;

$code = trim($_GPC['code']);
$data = pdo_get('runner_open_forms_builder', array('code' => $code));
if (empty($data)) {
    $data = array();
} else {
    $data['form'] = unserialize($data['form']);
    $data['schema'] = unserialize($data['schema']);
}
meepoSuccess('', $data);
