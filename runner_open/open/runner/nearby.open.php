<?php
global $_W, $_GPC;
$input = $_GPC['__input'];
$search = new BmapGeosearchModel();
$list = $search->nearby(array(
    'q' => '',
    'geotable_id' => $_W['meepo']['runner_open_runner'],
    'location' => $input['position']['lng'] . ',' . $input['position']['lat'],
    'radius' => $input['radius'],
    'sortby' => $input['sortby'],
    'filter' => $input['filter'],
));

$list['input'] = $input;
die(json_encode($list));
