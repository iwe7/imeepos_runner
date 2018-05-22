<?php
global $_W, $_GPC;
$input = $_GPC['__input'];

$id = intval($input['id']);
pdo_delete('runner_open_table_builder', array('id' => $id));

meepoSuccess('删除成功', $id);
