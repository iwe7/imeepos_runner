<?php
global $_W, $_GPC;
$input = $_GPC['__input'];
$search = new BmapGeosearchModel();
$list = $search->local(array(
    'q' => '',
    'geotable_id' => '186498',
    'location' => $input['lng'] . ',' . $input['lat'],
    'radius' => $input['radius'],
    'sortby' => $input['sortby'],
    'filter' => $input['filter'],
));
die(json_encode($list));
