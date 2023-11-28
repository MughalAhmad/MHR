<?php
include "config.php";
include "config1.php";

header("Access-Control-Allow-Origin: * ");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: DELETE");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-with");


$guardData = json_decode(file_get_contents("php://input"));

// $servername = "127.0.0.1";
// $username = "root";
// $password = "";
// $db = "final";

// $conn = new mysqli($servername, $username, $password, $db);

// Check connection
// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// }


$sql = "DELETE FROM guard_list WHERE id ='".$guardData->id."'";
$result = mysqli_query($con,$sql)


?>