<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="REFRESH" content="1800"/>
    <title><?= /** @var TYPE_NAME  */
        (isset($data['title'])) ? $data['title'] : ''; ?> - ProjectName</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <!--CSS-->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.16.3/dist/css/uikit.min.css" />
    <link rel="stylesheet" href="style.css?v=<?php echo(time()) ?>">

    <!--JS-->
    <script src="https://cdn.jsdelivr.net/npm/@shinsenter/defer.js/dist/defer_plus.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.16.3/dist/js/uikit.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.16.3/dist/js/uikit-icons.min.js"></script>
    <script src="js/app.js?v=<?php echo(time()) ?>"></script>
</head>
<body class="">
<?php require "template-parts/commons/facebook_chat.php"; ?>
<!--app-->
<div id="app" class="uk-height-viewport uk-offcanvas-content uk-overflow-hidden uk-position-relative">