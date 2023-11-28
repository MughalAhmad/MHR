<?php
include "config1.php";

include "config.php";

if( isset($_GET['id']) && $_GET['id'] != '') {
    $sql_d = "DELETE FROM guard_list WHERE id =".$_GET['id'];
    $conn->query($sql_d);
    header('Location: index.php');

}
?>