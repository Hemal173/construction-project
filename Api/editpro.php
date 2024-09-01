<?php
header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
            
      $id=$_POST["id"];
      $name=$_POST["name"];
      $email=$_POST["email"];
      $password=$_POST["password"];
      $city=$_POST["city"];
      $address=$_POST["address"];

      $con = new mysqli("localhost","id20688612_crudoperation1111","Hemal@1111","id20688612_crudoperation");
        
	  $result= $con->query("update  projectdata set name='$name',email='$email',password='$password',city='$city',address='$address' where id='$id'");
	  if($result)
	  {
	      $result= $con->query("select * from projectdata");
          while($r= $result->fetch_object())
          {
            $row[]=$r;
          }
           echo json_encode($row);
	  }
?>