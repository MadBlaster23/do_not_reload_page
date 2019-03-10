<?php
$admin = "evgeniusness@gmail.com";
$name = $_REQUEST['user_name'];
$message = $_REQUEST['user_message'];
$msg =
"Name: ".$name."\r\n".
"Message: ".$message;

    if(isset($_POST['user_name']) && isset($_POST['user_message'])) {
        mail("$admin", "Request", $msg);
    }
?>
