<?php
global $_W, $_GPC;
$count = pdo_query("SELECT COUNT(id) FROM " . tablename('runner_open_runner') . " WHERE 1");
$var = sprintf("%08d", $count);
die($var);
