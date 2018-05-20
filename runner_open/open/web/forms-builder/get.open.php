<?php
global $_W, $_GPC;

$code = trim($_GPC['code']);
$data = pdo_get('runner_open_setting', array('code' => $code));
if (empty($data)) {
    $data = array();
} else {
    $data['value'] = unserialize($data['value']);
    $data['form'] = $data['value']['formData'];
    $data['schema'] = $data['value']['schema'];
}
meepoSuccess('', $data);
