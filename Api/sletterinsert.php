<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

   
   
    $email=$_POST["email"];
      
    $con = new mysqli("localhost","id20688612_crudoperation1111","Hemal@1111","id20688612_crudoperation");
	$result= $con->query("insert into newsletter(email)values('$email')");
	if($result)
	{
	  $result= $con->query("select * from newsletter");
      while($r= $result->fetch_object())
          {
            $row[]=$r;
          }
      echo json_encode($row);
	  }
?>