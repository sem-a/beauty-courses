<?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $messenger = $_POST['messenger'];

    $message = 'Имя: ' . $name . "\n" . 'Телефон: ' . $phone . "\n" . $messenger; 
    $subject = 'Заявка на курс маникюра';
    $to = "Hochukrasivospb@gmail.com";
    if(mail($to, $subject, $message)) {
        header('Location: https://хочукрасиво.рф');
    } else {
        header('Location: https://хочукрасиво.рф');
    };
?>