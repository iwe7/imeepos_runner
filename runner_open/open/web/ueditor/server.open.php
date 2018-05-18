<?php
global $_W, $_GPC;
$action = $_GET['action'];
$CONFIG = array(
    "imageActionName" => "uploadimage",
    "imageFieldName" => "upfile",
    'imageAllowFiles' => array(".png", ".jpg", ".jpeg", ".gif", ".bmp"),
    'imageInsertAlign' => 'none',
    'imageUrlPrefix' => '',
    'imagePathFormat' => $_W['siteroot'] . '/attachment/images/{yyyy}{mm}{dd}/{time}{rand:6}',
    "imageMaxSize" => 2048000,
    "imageCompressEnable" => true,
    "imageCompressBorder" => 1600,
    "scrawlActionName" => "uploadscrawl",
    "scrawlFieldName" => "upfile",
    "scrawlPathFormat" => "/ueditor/php/upload/image/{yyyy}{mm}{dd}/{time}{rand:6}",
    "scrawlMaxSize" => 2048000,
    "scrawlUrlPrefix" => "",
    "scrawlInsertAlign" => "none",
    "snapscreenActionName" => "uploadimage",
    "snapscreenPathFormat" => "/ueditor/php/upload/image/{yyyy}{mm}{dd}/{time}{rand:6}",
    "snapscreenUrlPrefix" => "",
    "snapscreenInsertAlign" => "none",
    "catcherLocalDomain" => array("127.0.0.1", "localhost", "img.baidu.com"),
    "catcherActionName" => "catchimage",
    "catcherFieldName" => "source",
    "catcherPathFormat" => "/ueditor/php/upload/image/{yyyy}{mm}{dd}/{time}{rand:6}",
    "catcherUrlPrefix" => "",
    "catcherMaxSize" => 2048000,
    "catcherAllowFiles" => array(".png", ".jpg", ".jpeg", ".gif", ".bmp"),
    "videoActionName" => "uploadvideo",
    "videoFieldName" => "upfile",
    "videoPathFormat" => "/ueditor/php/upload/video/{yyyy}{mm}{dd}/{time}{rand:6}",
    "videoUrlPrefix" => "",
    "videoMaxSize" => 102400000,
    "videoAllowFiles" => [
        ".flv", ".swf", ".mkv", ".avi", ".rm", ".rmvb", ".mpeg", ".mpg",
        ".ogg", ".ogv", ".mov", ".wmv", ".mp4", ".webm", ".mp3", ".wav", ".mid",
    ],
    "fileActionName" => "uploadfile",
    "fileFieldName" => "upfile",
    "filePathFormat" => "/ueditor/php/upload/file/{yyyy}{mm}{dd}/{time}{rand:6}",
    "fileUrlPrefix" => "",
    "fileMaxSize" => 51200000,
    "fileAllowFiles" => array(
        ".png", ".jpg", ".jpeg", ".gif", ".bmp",
        ".flv", ".swf", ".mkv", ".avi", ".rm", ".rmvb", ".mpeg", ".mpg",
        ".ogg", ".ogv", ".mov", ".wmv", ".mp4", ".webm", ".mp3", ".wav", ".mid",
        ".rar", ".zip", ".tar", ".gz", ".7z", ".bz2", ".cab", ".iso",
        ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".pdf", ".txt", ".md", ".xml",
    ),
    "imageManagerActionName" => "listimage",
    "imageManagerListPath" => "/ueditor/php/upload/image/",
    "imageManagerListSize" => 20,
    "imageManagerUrlPrefix" => "",
    "imageManagerInsertAlign" => "none",
    "imageManagerAllowFiles" => array(".png", ".jpg", ".jpeg", ".gif", ".bmp"),
    "fileManagerActionName" => "listfile",
    "fileManagerListPath" => "/ueditor/php/upload/file/",
    "fileManagerUrlPrefix" => "",
    "fileManagerListSize" => 20,
    "fileManagerAllowFiles" => array(
        ".png", ".jpg", ".jpeg", ".gif", ".bmp",
        ".flv", ".swf", ".mkv", ".avi", ".rm", ".rmvb", ".mpeg", ".mpg",
        ".ogg", ".ogv", ".mov", ".wmv", ".mp4", ".webm", ".mp3", ".wav", ".mid",
        ".rar", ".zip", ".tar", ".gz", ".7z", ".bz2", ".cab", ".iso",
        ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".pdf", ".txt", ".md", ".xml",
    ),
);

switch ($action) {
    case 'config':
        $result = json_encode($CONFIG);
        break;
    /* 上传图片 */
    case 'uploadimage':
    /* 上传涂鸦 */
    case 'uploadscrawl':
    /* 上传视频 */
    case 'uploadvideo':
    /* 上传文件 */
    case 'uploadfile':
        $result = include IA_ROOT . "/addons/runner_open/open/web/ueditor/action_upload.php";
        break;
    /* 列出图片 */
    case 'listimage':
        $result = include IA_ROOT . "/addons/runner_open/open/web/ueditor/action_list.php";
        break;
    /* 列出文件 */
    case 'listfile':
        $result = include IA_ROOT . "/addons/runner_open/open/web/ueditor/action_list.php";
        break;

    /* 抓取远程文件 */
    case 'catchimage':
        $result = include IA_ROOT . "/addons/runner_open/open/web/ueditor/action_crawler.php";
        break;

    default:
        $result = json_encode(array(
            'state' => '请求地址出错',
        ));
        break;
}

/* 输出结果 */
if (isset($_GET["callback"])) {
    if (preg_match("/^[\w_]+$/", $_GET["callback"])) {
        echo htmlspecialchars($_GET["callback"]) . '(' . $result . ')';
    } else {
        echo json_encode(array(
            'state' => 'callback参数不合法',
        ));
    }
} else {
    echo $result;
}
