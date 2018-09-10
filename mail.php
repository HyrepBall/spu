<?php
	
	echo var_dump($_POST['formname']);

	if(isset($_POST['formname'])) {
	
		$to = "reklamavalexfitness@gmail.com"; // Почта получателя
		$from = "info@buduumnee.ru";
		$sitename = "Студия повышения успеваемости";
		$pagetitle = "Новая заявка с сайта " . $sitename;
	
		$formname = $_POST['formname'];
		$name = strip_tags($_POST["name"]);
		$phone = strip_tags($_POST["phone"]);
		$email = strip_tags($_POST["email"]);
		$usertype = strip_tags($_POST["usertype"]);	
		$time = strip_tags($_POST["time"]);
	
		$headers = "From: " . $from . "\r\n";
		$headers .= "Reply-To: ". $to . "\r\n";
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
	
	
		$message = "На сайте заполнена форма заявки\r\n";
		$message .= "Форма: " . $formname . "\r\n";
		$message .= "Имя:" . $name . "\r\n";
		$message .= "Телефон: " . $phone . "\r\n";
		$message .= "E-mai: " . $email . "\r\n";
		$message .= "Заявку оставил: " . $usertype . "\r\n";
		$message .= "Удобное время для звонка: " . $time . "\r\n";
	
		mail($to, $pagetitle, $message, $headers);
	
	}
