<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $from = 'From: Karan Patel - Portfolio'; 
    $to = 'kp08sk@gmail.com'; 
    $subject = 'Hello';

     $body = "From: $name\n E-Mail: $email\n Message:\n $message";
				
    if ($_POST['submit'] {				 
        if (mail ($to, $subject, $body, $from)) { 
	    echo '<p>Your message has been sent!</p>';
	} 

?>

