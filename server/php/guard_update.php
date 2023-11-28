<?php

include "config.php";
include "config1.php";

header("Access-Control-Allow-Origin: * ");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: PUT");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-with");


// $servername = "127.0.0.1";
// $username = "root";
// $password = "";
// $db = "final";

// $conn = new mysqli($servername, $username, $password, $db);

// // Check connection
// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// }

$guardData = json_decode(file_get_contents("php://input"));

    $id = $guardData->id;
    $guard_name = $guardData->guard_name;
    $guard_dob = $guardData->guard_dob;
    $guard_phone = $guardData->guard_phone;
    $guard_SIALicense = $guardData->guard_SIALicense;
    $guard_email = $guardData->guard_email;
    $guardEmergenceNo = $guardData->guardEmergenceNo;
    $guardSIAExpire = $guardData->guardSIAExpire;
    $guard_adress = $guardData->guard_adress;

$sql = "update guard_list set guard_name='$guard_name', guard_dob='$guard_dob',guard_phone='$guard_phone',guard_SIALicense='$guard_SIALicense',guard_email='$guard_email',guardEmergenceNo='$guardEmergenceNo',guardSIAExpire='$guardSIAExpire',guard_adress='$guard_adress'where id=$id";  

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