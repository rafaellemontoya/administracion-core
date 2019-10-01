<?php
header("Access-Control-Allow-Origin: *");


$connect = new mysqli("localhost", "themytco_userreg", "R3gistr0Ev3ntoS", "themytco_registro_eventos" );

$query = "SELECT COUNT(id) FROM `registro_IBF2019` where  `id_taller` = 1";
$result= mysqli_query($connect, $query);
$row= mysqli_fetch_assoc($result);

$querySIN = "SELECT COUNT(id) FROM `registro_IBF2019` where `id_taller` = 2";
$resultSIN= mysqli_query($connect, $querySIN);
$rowSIN= mysqli_fetch_assoc($resultSIN);


print json_encode(
  array(
      'taller1'=>$row['COUNT(id)'],
      'taller2'=>$rowSIN['COUNT(id)'],

  ));


 ?>
