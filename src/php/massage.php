<?php
$name = $_POST['user_name'];
$email = $_POST['user_email'];
$massage = $_POST['user_massage'];

echo 'Работает! <br>' . $name . '<br>' . $email . '<br>' . $massage;

mail('doramen379@hoxds.com', 'Заголовок', "Текст письма \n 1-ая строчка \n 2-ая строчка \n 3-ая строчка");

?>
