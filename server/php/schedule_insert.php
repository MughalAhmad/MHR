<?php

include "config.php";
include "config1.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-with");

$schedulData = json_decode(file_get_contents("php://input"));
$nameMailHandl = json_decode(file_get_contents("php://input"));
$dd = json_decode(file_get_contents("php://input"));

    $gName = $nameMailHandl->gName;
    $g_Email = $nameMailHandl->g_Email;
    $jName = $schedulData->jName;
    $lName = $schedulData->lName;
    $sTime = $schedulData->sTime;
    $eTime = $schedulData->eTime;
    $break = $schedulData->break;
    $dates = $dd->dates;

    if($gName && $g_Email && $jName && $lName && $sTime && $eTime && $break && $dates){
    $sql = "INSERT INTO schedule (gName,g_Email,jName,lName,sTime,eTime,break,dates) VALUES ('$gName','$g_Email','$jName','$lName','$sTime','$eTime','$break','$dates')";
        $result = mysqli_query($con, $sql);
        if($result) {
            $response ['data']=array(
            'status' => 'valid'
            );
            echo json_encode($response);
            }
            else{
            $response ['data']=array(
            'status' => 'invalid'
            );
            echo json_encode($response);
            }
        }
?>