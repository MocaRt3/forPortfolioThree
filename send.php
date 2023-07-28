<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require  'phpmailer/src/PHPMailer.php';

	$mailTwo = new PHPMailer(true);
	$mailTwo ->CharSet = 'UTF-8';
	$mailTwo ->setLanguage('ru', 'phpmailer/language/');
	$mailTwo ->IsHTML(true);

	$mailTwo->setFrom('sochi-jk-kislorod@s654339.smrtp.ru', 'frontend');
	$mailTwo->addAddress('integrity.sochi@yandex.ru');
	$mailTwo->Subject = 'Форма обратной связи';

	$bodyTwo = 'Информация';
	if(trim(!empty($_POST['phoneTwo']))){
		$bodyTwo.= '<p><strong>Телефон:</strong>'.$_POST['phoneTwo'].  '</p>'; 
	}

	

	$mailTwo->Body = $bodyTwo;

	if(!$mailTwo->send()){
		$messageTwo = 'Ошибка';
	} else{
		$messageTwo = 'данные отправленны';
	}
	$responseTwo = ['message' => $messageTwo];

	header('Content-type', 'application/json');
	echo json_encode($responseTwo);

?>