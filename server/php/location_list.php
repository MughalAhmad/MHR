<?php
include "config.php";
include "config1.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-with");

$locationData = json_decode(file_get_contents("php://input"));

	$sql = "SELECT * FROM location";
  	$result = mysqli_query($con , $sql);
	$json_arrary = array();
	while ($row = mysqli_fetch_assoc($result))
	{
	$json_array [] = $row;
	}
	echo json_encode($json_array);

    if( isset($_GET['id']) && $_GET['id'] != '') {
        $sql_d = "DELETE FROM location WHERE id =".$_GET['id'];
        $conn->query($sql_d);
    }


?>