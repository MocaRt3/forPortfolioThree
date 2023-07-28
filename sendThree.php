<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require  'phpmailer/src/PHPMailer.php';

	$mailFour = new PHPMailer(true);
	$mailFour ->CharSet = 'UTF-8';
	$mailFour ->setLanguage('ru', 'phpmailer/language/');
	$mailFour ->IsHTML(true);

	$mailFour->setFrom('sochi-jk-kislorod@s654339.smrtp.ru', 'frontend');
	$mailFour->addAddress('integrity.sochi@yandex.ru');
	$mailFour->Subject = 'Форма обратной связи';

	$bodyFour = 'Информация';
	if(trim(!empty($_POST['phoneFour']))){
		$bodyFour.= '<p><strong>Телефон:</strong>'.$_POST['phoneFour'].  '</p>'; 
	}

	

	$mailFour->Body = $bodyFour;

	if(!$mailFour->send()){
		$messageFour = 'Ошибка';
	} else{
		$messageFour = 'данные отправленны';
	}
	$responseFour = ['message' => $messageFour];

	header('Content-type', 'application/json');
	echo json_encode($responseFour);

?>