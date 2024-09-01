<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

   
    $name=$_POST["name"];
    $email=$_POST["email"];
    $website=$_POST["website"];
    $comment=$_POST["comment"];
      
    $con = new mysqli("localhost","id20688612_crudoperation1111","P@tel1111","id20688612_crudoperation");
	$result= $con->query("insert into leavecomment(name,email,website,comment)values('$name','$email','$website','$comment')");
	if($result)
	{
	  $result= $con->query("select * from leavecomment");
      while($r= $result->fetch_object())
          {
            $row[]=$r;
          }
      echo json_encode($row);
	  }
?>