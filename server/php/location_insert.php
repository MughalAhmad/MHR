<?php

include "config.php";
include "config1.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-with");

$locationData = json_decode(file_get_contents("php://input"));

    $location = $locationData->location;
    $zone = $locationData->zone;
  

if($location && $zone){
    $sql = "INSERT INTO location (location,zone)VALUES ('$location','$zone')";
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