<?php

include "config.php";
include "config1.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-with");

// $subData = json_decode(file_get_contents("php://input"));


// $servername = "127.0.0.1";
// $username = "root";
// $password = "";
// $db = "final";

// $conn = new mysqli($servername, $username, $password, $db);

// 	// Check connection
// 	if ($conn->connect_error) {
// 	  die("Connection failed: " . $conn->connect_error);
// 	}
// $destination=$_SERVER['DOCUMENT_ROOT'].'/php/img'."/";
// 	$sql = "SELECT * FROM sub";
//   	$result = mysqli_query($con , $sql);
// 	$json_arrary = array();
// 	while ($row = mysqli_fetch_assoc($result))
// 	{
// 	$json_array["productData"] [] = array("id"=>$row['id'],"username"=>$row["username"],
// 	"job"=>$row['job'],
// 	"contact"=>$row['contact'],
// 	"email"=>$row['email'],
// 	"password"=>$row['password'],
// 	"newImg"=>$row['newImg'],
// 	"sstatus"=>$row['sstatus'],
// );
// 	}
	
// 	 echo json_encode($json_array["productData"]);
// 	 return;

$destination=$_SERVER['DOCUMENT_ROOT'].'/php/img'."/";
	$sql = "SELECT * FROM sub";
  	$result = mysqli_query($con , $sql);
	// $json_arrary = array();
	if(mysqli_num_rows($result )>0)
	{
		while ($row = mysqli_fetch_assoc($result))
		{
		$json_array["productData"] [] = array("id"=>$row['id'],"username"=>$row["username"],
		"job"=>$row['job'],
		"contact"=>$row['contact'],
		"email"=>$row['email'],
		"password"=>$row['password'],
		"newImg"=>$row['newImg'],
		"sstatus"=>$row['sstatus'],
	);
		}
		
		 echo json_encode($json_array["productData"]);
		 return;
	}
	else{
		echo json_encode(["result"=>"please check the data"]);
		return;
	}
	
?>