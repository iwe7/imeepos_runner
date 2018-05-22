<?php
global $_W, $_GPC;
$id = intval($_GPC['id']);
$item = pdo_get('runner_open_table_builder', array('id' => $id));
$item['resReName'] = unserialize($item['resReName']);
$item['columns'] = unserialize($item['columns']);
$item['search'] = unserialize($item['search']);
meepoSuccess('', $item);
