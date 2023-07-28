<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require  'phpmailer/src/PHPMailer.php';

	$mailThree = new PHPMailer(true);
	$mailThree ->CharSet = 'UTF-8';
	$mailThree ->setLanguage('ru', 'phpmailer/language/');
	$mailThree ->IsHTML(true);

	$mailThree->setFrom('sochi-jk-kislorod@s654339.smrtp.ru', 'frontend');
	$mailThree->addAddress('integrity.sochi@yandex.ru');
	$mailThree->Subject = 'Форма обратной связи';

	$bodyThree = 'Информация';
	if(trim(!empty($_POST['phoneThree']))){
		$bodyThree.= '<p><strong>Телефон:</strong>'.$_POST['phoneThree'].  '</p>'; 
	}

	

	$mailThree->Body = $bodyThree;

	if(!$mailThree->send()){
		$messageThree = 'Ошибка';
	} else{
		$messageThree = 'данные отправленны';
	}
	$responseThree = ['message' => $messageThree];

	header('Content-type', 'application/json');
	echo json_encode($responseThree);

?>