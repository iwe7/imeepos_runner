<?php
global $_W, $_GPC;
$search = new BmapGeosearchModel();
$list = $search->local(array(
    'q' => '',
    'geotable_id' => '186498',
    'sortby' => 'addtime:1',
));
die(json_encode($list));
