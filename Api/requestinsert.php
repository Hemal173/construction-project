<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

   
    $name=$_POST["name"];
    $email=$_POST["email"];
    $date=$_POST["date"];
    $time=$_POST["time"];
    $message=$_POST["message"];
      
    $con = new mysqli("localhost","id20688612_crudoperation1111","Hemal@1111","id20688612_crudoperation");
	$result= $con->query("insert into submitrequest(name,email,date,time,message)values('$name','$email','$date','$time','$message')");
	if($result)
	{
	  $result= $con->query("select * from submitrequest");
      while($r= $result->fetch_object())
          {
            $row[]=$r;
          }
      echo json_encode($row);
	  }
?>