<?php
include "config.php";
include "config1.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-with");

$locationData = json_decode(file_get_contents("php://input"));

$result = mysqli_query($con,"SELECT * FROM location");
$outp = "";
while ($rs = mysqli_fetch_array($result)){
    if($outp != ""){$outp .= ",";}
    $outp .= '{"location":"'.$rs["location"] . '","';
    $outp .= '"zone":"'. $rs["zone"].'","}';
}
$outp = '{"records":['.$outp.']}';
echo($outp);
    ?>