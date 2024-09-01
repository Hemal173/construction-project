<?php
header('Access-Control-Allow-Origin: *');
           header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
            header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
            
         $con = new mysqli("localhost","id20688612_crudoperation1111","P@tel1111","id20688612_crudoperation");
	    $result= $con->query("select * from dreamproject");
          while($r= $result->fetch_object())
          {
            $row[]=$r;
          }
           echo json_encode($row);
?>