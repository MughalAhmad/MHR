<?php
include "config.php";
include "config1.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-with");

$jobData = json_decode(file_get_contents("php://input"));

    $job = $jobData->job;

    if($job){
    $sql = "INSERT INTO job_type(job)VALUES ('$job')";
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