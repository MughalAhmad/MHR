<?php

include "config.php";
include "config1.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-with");

$guardData = json_decode(file_get_contents("php://input"));


// $servername = "127.0.0.1";
// $username = "root";
// $password = "";
// $db = "final";

// $conn = new mysqli($servername, $username, $password, $db);

// 	// Check connection
// 	if ($conn->connect_error) {
// 	  die("Connection failed: " . $conn->connect_error);
// 	}

	$sql = "SELECT * FROM guard_list";
  	$result = mysqli_query($con , $sql);
	$json_arrary = array();
	while ($row = mysqli_fetch_assoc($result))
	{
	$json_array [] = $row;
	}
	
	 echo json_encode($json_array);
	// echo "<pre>";
	// print_r($json_array);
	// echo "</pre>";

	// $sql = "SELECT * FROM guard_list";
  	// $res=$conn->query($sql);
	// if($conn->error){
	// die ("DB Error is :".$conn->error);
    	
	// }

	// $tabl = "<table border='1'>";
	// $tabl .= "<tr> <th>ID</th><th>Name</th><th>Date Of Birth</th><th>Phone</th><th>SIA License</th><th>Email</th><th>Emergence No</th><th>SIA Expire</th><th>Address</th> </tr>";
	// if($res->num_rows > 0){

	// 		// $data = $res->fetch_assoc();
	// 	for($i=0;$i<$res->num_rows;$i++) {
	// 		$data = $res->fetch_assoc();
    //   $id = $data['id'];
	// 		$guard_name = $data['guard_name'];
    //   $guard_dob = $data['guard_dob'];
	// 		$guard_phone = $data['guard_phone'];
	// 		$guard_SIALicense = $data['guard_SIALicense'];
	// 		$guard_email = $data['guard_email'];
	// 		$guardEmergenceNo = $data['guardEmergenceNo'];
	// 		$guardSIAExpire = $data['guardSIAExpire'];
    //   $guard_adress = $data['guard_adress'];
		
	// 		//echo "User Name is :".$data['user_name']."<br/>";
	// 		$tabl .= "<tr> 
	// 					<td>$id</td>
	// 					<td>$guard_name</td>
	// 					<td>$guard_dob</td>
	// 					<td>$guard_phone</td>
	// 					<td>$guard_SIALicense</td>
	// 					<td>$guard_email</td>
	// 					<td>$guardEmergenceNo</td>
	// 					<td>$guardSIAExpire</td>
	// 					<td>$guard_adress</td>
	// 					</tr>";
	// 		// print_r($data);
			
	// 	}
		
		
	// $tabl .= "</table>";
		
	// echo $tabl;	
		
	// 	die;
	// 	while($data = $res->fetch_assoc()){
	// 		print_r ($data);
	// 	}
	// }
	// echo "Connected successfully";


// $sql = "SELECT id, guard_name, guard_dob FROM guard_list";

// $result = mysqli_query($conn, $sql);

// if (mysqli_num_rows($result) > 0) {
//   // output data of each row
//   while($row = mysqli_fetch_assoc($result)) {
//     echo "id: " . $row["id"]. " - Name: " . $row["guard_name"]. " " . $row["guard_dob"]. "<br>";
//   }
// } else {
//   echo "0 results";
// }

// $sql = "SELECT * FROM  guard_list";
//         $result = mysqli_query($conn,$sql);

//         $num = mysqli_num_rows($result);
//       echo $num;

// SELECT `id`,`guard_name`,`guard_dob`,`guard_phone`,`guard_SIALicense`,`guard_email`, `guardEmergenceNo`, `guardSIAExpire`, `guard_adress` FROM `guard_list` WHERE

?>