<?php

include "config.php";
include "config1.php";

header("Access-Control-Allow-Origin: * ");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: PUT");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-with");

    $locationData = json_decode(file_get_contents("php://input"));
    
    $id = $locationData->id;
    $location = $locationData->location;
    $zone = $locationData->zone;

    $sql = "update location set location='$location', zone='$zone' where id=$id";  

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