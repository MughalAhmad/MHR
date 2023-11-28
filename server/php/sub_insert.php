<?php 

include "config.php";
include "config1.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-with");

// $subData = json_decode(file_get_contents("php://input"));
    
    // $username=$subData->username;
    // $job=$subData->job;
    // $contact=$subData->contact;
    // $email=$subData->email;
    // $password=$subData->password;
    // $image=$subData->image;
    $username=$_POST['username'];
        $job=$_POST['job'];
        $contact=$_POST['contact'];
        $email=$_POST['email'];
        $password=$_POST['password'];
        $newImg=time().$_FILES['newImg']['name'];
        $newImg_temp=$_FILES['newImg']['tmp_name'];
        $destination=$_SERVER['DOCUMENT_ROOT'].'/php/img'."/".$newImg;

if($username && $job && $contact  && $email && $password && $newImg
 ){
    $sql = "INSERT INTO sub(username,job,contact,email,password,newImg , sstatus) VALUES ('$username','$job','$contact','$email','$password','$newImg','1')";
        $result = mysqli_query($con, $sql);
        if($result) {
            move_uploaded_file($newImg_temp ,$destination );
            // $response ['data']=array(
            // 'status' => 'valid'
            // );
            // echo json_encode($response);
            echo json_encode(["success"=>"Data Inserted Successfully"]);
                    return;
            }
            else{
            // $response ['data']=array(
            // 'status' => 'invalid'
            // );
            echo json_encode(["success"=>"Data not Inserted Successfully"]);
                    return;
            // echo json_encode($response);
            }
        }
// if(isset($_FILES['newImg']))
// {
//     $username=$_POST['username'];
//     $job=$_POST['job'];
//     $contact=$_POST['contact'];
//     $email=$_POST['email'];
//     $password=$_POST['password'];
//     $newImg=$_FILES['newImg']['name'];
//     // $newImg_temp=$_FILES['newImg']['temp_name'];
//     $destination=$_SERVER['DOCUMENT_ROOT'].'/php/img'."/".$newImg;

//     $result=mysqli_query("INSERT INTO sub(username,job,contact,email,password,newImg,sstatus)
//     VALUE('$username','$job','$contact','$email','$password','$newImg','1')");

//     if($result){
//         move_uploaded_file($newImg ,$destination );
//         echo json_encode(["success"=>"Data Inserted Successfully"]);
//         return;
//     }
//     else{
//         echo json_encode(["success"=>"Data Not Inserted "]);
//         return;
//     }
// }
// else{
//     echo json_encode(["success"=>"Data Not in Correct format"]);
//         return;
// }
?>