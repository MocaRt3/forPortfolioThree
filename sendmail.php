<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require  'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail ->CharSet = 'UTF-8';
	$mail ->setLanguage('ru', 'phpmailer/language/');
	$mail ->IsHTML(true);

	$mail->setFrom('sochi-jk-kislorod@s654339.smrtp.ru', 'frontend');
	$mail->addAddress('integrity.sochi@yandex.ru');
	$mail->Subject = 'Форма обратной связи';

	$body = 'Информация';
	if(trim(!empty($_POST['phone']))){
		$body.= '<p><strong>Телефон:</strong>'.$_POST['phone'].  '</p>'; 
	}
	if(trim(!empty($_POST['name']))){
		$body.= '<p><strong>Имя:</strong>'.$_POST['name'].  '</p>'; 
	}
	

	$mail->Body = $body;

	if(!$mail->send()){
		$message = 'Ошибка';
	} else{
		$message = 'данные отправленны';
	}
	$response = ['message' => $message];

	header('Content-type', 'application/json');
	echo json_encode($response);

?>