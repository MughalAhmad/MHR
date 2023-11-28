<?php 
include "config.php";
include "config1.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-with");

$guardData = json_decode(file_get_contents("php://input"));

    $guard_name = $guardData->guard_name;
    $guard_dob = $guardData->guard_dob;
    $guard_phone = $guardData->guard_phone;
    $guard_SIALicense = $guardData->guard_SIALicense;
    $guard_email = $guardData->guard_email;
    $guardEmergenceNo = $guardData->guardEmergenceNo;
    $guardSIAExpire = $guardData->guardSIAExpire;
    $guard_adress = $guardData->guard_adress;
    
if($guard_name && $guard_dob && $guard_phone  && $guard_SIALicense && $guard_email && $guardEmergenceNo && $guardSIAExpire && $guard_adress){
    $sql = "INSERT INTO guard_list(guard_name,guard_dob,guard_phone,guard_SIALicense,guard_email,guardEmergenceNo,guardSIAExpire,guard_adress) 
    VALUES ('$guard_name','$guard_dob','$guard_phone','$guard_SIALicense','$guard_email','$guardEmergenceNo','$guardSIAExpire','$guard_adress')";
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