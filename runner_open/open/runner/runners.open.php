<?php
global $_W, $_GPC;
$params = array();
$list = pdo_getall('mc_members', array('uniacid' => $_W['uniacid']));
meepoSuccess('获取成功', $list);
