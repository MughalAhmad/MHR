

<?php
include "config1.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-with");
 
$conn = new mysqli("localhost", "root","","final");
if(mysqli_connect_error()){
   echo mysqli_connect_error();
   exit();
}
else{
    $eData = file_get_contents("php://input");
    $dData = json_decode($eData,true);

    $email =$dData['email'];
    $password =$dData['password'];
    $result="";

    if($email != "" and $password != ""){
        $sql="SELECT * FROM admin WHERE email='$email' ;";
        $res = mysqli_query($conn , $sql);

        if(mysqli_num_rows($res) != 0){
            $row = mysqli_fetch_array($res);
            if($password != $row['password']){
                $result = "Invalid Password";
            }
            else{
                $result = " Logging Successfully! Redirecting...";
            }
           
        }
        else{
            $result = "Invalid E-mail";
        }
        
    }
    else{
        $result = "";
    }
    $conn -> close();
    $response[] = array("result"=>$result);
echo json_encode($response);
}

  
?>
