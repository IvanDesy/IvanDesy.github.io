<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$email = $_POST['user_email'];
$massage = $_POST['user_massage'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = '***@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '***'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('***@gmail.com'); // от кого будет уходить письмо?
$mail->addAddress('***@hoxds.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = '' .$name . ' оставил заявку! <br> обратитьться к нему по почте: ' . $email . '<br> Оставил сообщение: ' . $massage;
$mail->AltBody = '';

echo 'name: ' . $name . '<br>email: ' . $email . '<br>massage: ' . $massage . '<br>';

if(!$mail->send()) {
    echo 'письмо не отправлено';
    return false;
} else {
    echo 'письмо отправлено';
    return true;
}
?>