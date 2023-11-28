<?php
include "config.php";
include "config1.php";

header("Access-Control-Allow-Origin: * ");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: PUT");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-with");

    $schedulData = json_decode(file_get_contents("php://input"));
    $nameMailHandl = json_decode(file_get_contents("php://input"));
    $dd = json_decode(file_get_contents("php://input"));

    $id = $schedulData->id;
    $gName = $nameMailHandl->gName;
    $g_Email = $nameMailHandl->g_Email;
    $jName = $schedulData->jName;
    $lName = $schedulData->lName;
    $sTime = $schedulData->sTime;
    $eTime = $schedulData->eTime;
    $break = $schedulData->break;
    $dates = $dd->dates;

    $sql = "update schedule set gName='$gName', g_Email='$g_Email', jName='$jName', lName='$lName', sTime='$sTime', eTime='$eTime', break='$break', dates='$dates' where id=$id";

$result = mysqli_query($con,$sql);
if($result){
    $response=[
        'status'=>'valid'
    ];
    echo json_encode($response);
}else{
    $response = array(
        'status'=>'invalid'
    );
    echo json_encode($response);
}
?>