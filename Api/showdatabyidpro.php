<?php
header('Access-Control-Allow-Origin: *');
 header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
            header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
            
        $id=$_REQUEST["id"];
        $con = new mysqli("localhost","root","","id20688612_crudoperation");
        
	  $result= $con->query("select * from projectdata where id='$id'");
	  if($result)
	  {
          while($r= $result->fetch_object())
          {
            $row[]=$r;
          }
           echo json_encode($row);
	  }
?>