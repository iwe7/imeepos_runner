<?php
global $_W, $_GPC;
$sql = "SELECT * FROM " . tablename('runner_open_table_builder') . " WHERE 1";
$list = pdo_fetchall($sql, array());
foreach($list as $li){
  $li['resReName'] = unserialize($li['resReName']);
}
meepoSuccess('', $list);
