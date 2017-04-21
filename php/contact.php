<?php

if(isset($_POST['message'])){

	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
    
	
	$to      = 'info@musicbyariel.com';
	$subject = 'An email from your website from: '. $name .'';

	$headers = 'From: '. $email . "\r\n" .
    'Reply-To: '. $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	$status = mail($to, $subject, $message, $headers);

	if($status == TRUE){	
		$res['sendstatus'] = 'done';
	
		//Edit your message here
		$res['message'] = 'Your message has been sent.';
    }
	else{
		$res['message'] = 'Failed to send mail.';
	}
	
	
	echo json_encode($res);
}

?>