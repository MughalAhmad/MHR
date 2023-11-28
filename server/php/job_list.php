<?php

include "config.php";
include "config1.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-with");

$guardData = json_decode(file_get_contents("php://input"));

	$sql = "SELECT * FROM job_type";
  	$result = mysqli_query($con , $sql);
	$json_arrary = array();
	while ($row = mysqli_fetch_assoc($result))
	{
	$json_array [] = $row;
	}
	
	 echo json_encode($json_array);
?>