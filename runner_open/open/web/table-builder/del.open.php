<?php
global $_W, $_GPC;
$id = intval($_GPC['id']);
pdo_delete('runner_open_table_builder', array('id' => $id));

meepoSuccess('', $id);
