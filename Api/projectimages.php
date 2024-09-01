<?php
header('Access-Control-Allow-Origin: *');
           header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
            header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
            
         $con = new mysqli("localhost","id20688612_krinapatel","Hemal@1111","id20688612_krina");
	    $result= $con->query("select * from projectimages");
          while($r= $result->fetch_object())
          {
            $row[]=$r;
          }
           echo json_encode($row);
?>