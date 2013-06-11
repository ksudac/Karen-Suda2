<?php

if(isset($_POST['email'])) {
     
	$email_to = "ksudac@gmail.com";
	$email_name = $_POST['name'];
	$email_address = $_POST['email'];
	$email_subject  = $_POST['subject'];
	$email_message = $_POST['message']; 

     
	function clean_string($string) {
	  $bad = array("content-type","bcc:","to:","cc:","href");
	  return str_replace($bad,"",$string);
	}
    
	$email_message = "Client Message: " . $email_message ."\r\n";
	$email_message .= "Client Name: " . $email_name ."\r\n";
	$email_message .= "Client Email Address: " . $email_address ."\r\n";
	$email_message .= "Email Subject: " . $email_subject ."\r\n";

	// create email headers
	$headers = 'From: '.$email_address."\r\n".
	'Reply-To: '.$email_address."\r\n" .
	'X-Mailer: PHP/' . phpversion();

	@mail($email_to, $email_subject, $email_message, $headers);  

}


?>