<?php
	
  $email = $_REQUEST['email'] ;
  $message = $_REQUEST['message'] ;

  mail( "kp08sk@gmail.com", "Hello",
    $message, "From: $email" );

?>