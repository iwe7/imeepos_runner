<?php
global $_W,$_GPC;

$input = $_GPC['__input'];
$id = $input['id'];

$item = pdo_get('runner_open_tasks',array('id'=>$id));
if(!empty($item)){
    if($item['status'] == 0){
        pdo_update('runner_open_tasks',array('status'=>-1),array('id'=>$id));
    }
}
die(json_encode($input));

