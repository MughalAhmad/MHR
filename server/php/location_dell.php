<?php
include "config.php";
include "config1.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: DELETE");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-with");

$locationData = json_decode(file_get_contents("php://input"));
$sql = "DELETE FROM location WHERE id ='".$locationData->id."'";
$result = mysqli_query($con,$sql)

?>