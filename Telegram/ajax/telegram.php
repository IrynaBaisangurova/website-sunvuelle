<?php
$email = $_POST['email'];
$token = "5068944020:AAGMQk47qVyjDCwQI1Uf2-f-7Oo3MLSoRiM";
$chat_id = "-431428840";


  //Собираем в массив то, что будет передаваться боту
$arr = array(
  'user name:' => $name,
  'user email:' => $email,
);

//Настраиваем внешний вид сообщения в телеграме

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."";
};
//Передаем данные боту

$website="https://api.telegram.org/bot".$token;
  $params=[
      'chat_id'=>$chat_id, 
      'text'=> $txt,
  ];

  $ch = curl_init($website . '/sendMessage');
  curl_setopt($ch, CURLOPT_HEADER, false);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_POSTFIELDS, ($params));
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
  $result = curl_exec($ch);
  curl_close($ch);
  echo $result;

?>
