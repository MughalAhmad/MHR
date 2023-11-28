<?php
include "config.php";
include "insert.php";
include "config1.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-with");

$data = json_decode(file_get_contents("php://input"));



$first_name = $data->first_name;
$last_name = $data->last_name;
$email = $data->email;
$pass = $data->pass;

if($first_name && $last_name && $email && $pass){
    $sql = "INSERT INTO user(first_name,last_name,email,pass) VALUES ('$first_name','$last_name','$email','$pass')";
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