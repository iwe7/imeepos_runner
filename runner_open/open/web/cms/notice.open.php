<?php
global $_W, $_GPC;

$op = trim($_GPC['op']);
if ($op === 'add') {
    $input = $_GPC['__input'];

    $data = array(
        'title' => $title,
        'cateid' => $cateid,
        'content' => safe_gpc_html(htmlspecialchars_decode($content)),
        'displayorder' => intval($_GPC['displayorder']),
        'click' => intval($_GPC['click']),
        'is_display' => intval($_GPC['is_display']),
        'is_show_home' => intval($_GPC['is_show_home']),
        'createtime' => TIMESTAMP,
        'style' => iserializer($style),
        'group' => $group,
    );

    if (!empty($notice['id'])) {
        pdo_update('article_notice', $data, array('id' => $id));
    } else {
        pdo_insert('article_notice', $data);
    }
}
$data = array();
meepoSuccess('', $data);
