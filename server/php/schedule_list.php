<?php

include "config.php";
include "config1.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-with");

$schedulData = json_decode(file_get_contents("php://input"));
$nameMailHandl = json_decode(file_get_contents("php://input"));
$dd = json_decode(file_get_contents("php://input"));


        $sql = "SELECT * FROM schedule";
        $result = mysqli_query($con , $sql);
      $json_arrary = array();
      // $data = mysqli_fetch_assoc($result);
      // print_r($data);
      // exit();
      while ($row = mysqli_fetch_assoc($result))
      {
        $item = [
          "id" =>  $row["id"],
          "gName" =>  $row["gName"],
          "g_Email" =>  $row["g_Email"],
          "jName" =>  $row["jName"],
          "lName" =>  $row["lName"],
          "sTime" =>  $row["sTime"],
          "eTime" =>  $row["eTime"],
          "break" =>  $row["break"],
          "dates" => $row["dates"],
          "month" =>  date("M",strtotime($row["dates"])),
          "year" =>  date("Y",strtotime($row["dates"])),
          "day" =>  date("d",strtotime($row["dates"]))
        ];
      $json_array [] = $item;
      }
      echo json_encode($json_array);


?>