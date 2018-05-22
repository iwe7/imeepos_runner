<?php
global $_W, $_GPC;
$id = intval($_GPC['id']);
$item = pdo_get('runner_open_table_builder', array('id' => $id));
$item['resReName'] = unserialize($item['resReName']);
meepoSuccess('', $id);
