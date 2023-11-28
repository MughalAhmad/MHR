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

$subData = json_decode(file_get_contents("php://input"));

    $id = $subData->id;
    $userName = $subData->userName;
    $job = $subData->job;
    $contact = $subData->contact;
    $mail = $subData->mail;
    $pass = $subData->pass;
    $img = $subData->img;

$sql = "update sub set userName='$userName', job='$job',contact='$contact',mail='$mail',pass='$pass',img='$img' where id=$id";  

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