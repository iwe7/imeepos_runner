<?php
global $_W, $_GPC;

$input = $_GPC['__input'];
$data = array();
$data['status'] = 2;
$return = array();
if (empty($input['id']) || empty($input['img'])) {
    $return['code'] = -1;
    $return['msg'] = '参数错误';
    die(json_encode($return));
}
$base64_image_content = $input['img'];
$file = uploadBase64($base64_image_content);

$return['src'] = $file;
$return['code'] = 0;
$return['msg'] = '保存成功';
die(json_encode($return));
