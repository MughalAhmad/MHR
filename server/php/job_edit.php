<?php
include "config.php";
include "config1.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-with");

$jobData = json_decode(file_get_contents("php://input"));

$result = mysqli_query($con,"SELECT * FROM job_type");
$outp = "";
while ($rs = mysqli_fetch_array($result)){
    if($outp != ""){$outp .= ",";}
    $outp .= '{"job":"'.$rs["job"] . '","';
}
$outp = '{"records":['.$outp.']}';
echo($outp);
    ?>