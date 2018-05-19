<?php

global $_W, $_GPC;

$name = $_GPC['name'];

$path = IA_ROOT . '/addons/runner_open/assets/svgs/' . $name . '.svg';
$svg = file_get_contents($path);

$data = array();
meepoSuccess($path, $svg);
