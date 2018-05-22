<?php
global $_W, $_GPC;
$input = $_GPC['__input'];
$id = $input['id'];
$item = pdo_get('runner_open_bug', array('id' => $id));
if (!empty($item)) {
    pdo_update('runner_open_bug', array('status' => $input['status']), array('id' => $id));
}
meepoSuccess('', $id);
