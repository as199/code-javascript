<?php
use PHPMailer\PHPMailer\PHPMailer;

require_once 'phpmailer/Exception.php';
require_once 'phpmailer/PHPMailer.php';
require_once 'phpmailer/SMTP.php';

$mail = new PHPMailer(true);

$alert = '';

  const USERNAME ="dioneassane0290@gmail.com";
  const PASSWORD ="youngmoney12345"; 
  private $dsn = "mysql:host=localhost;dbname=administration";
if(isset($_POST['submit'])){
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  try{
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'tonadresse@gmail.com'; // Gmail address which you want to use as SMTP server
    $mail->Password = 'tonmotdepasse'; // Gmail address Password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = '465';
    /* infos sur  https://www.hostinger.fr/tutoriels/utiliser-serveur-smtp-gmail/#Etape-1-8211-Parametres-du-serveur-SMTP-Gmail */
    $mail->setFrom('tonadresse@gmail.com'); // Gmail address which you used as SMTP server
    $mail->addAddress('tonadresse@gmail.com'); // Email address where you want to receive emails (you can use any of your gmail address including the gmail address which you used as SMTP server)

    $mail->isHTML(true);
    $mail->Subject = 'Message Received (Contact Page)';
    $mail->Body = "<h3>Name : $name <br>Email: $email <br>Message : $message</h3>";

    $mail->send();
    $alert = '<div class="alert-success">
                 <span>Message Sent! Thank you for contacting us.</span>
                </div>';
  } catch (Exception $e){
    $alert = '<div class="alert-error">
                <span>'.$e->getMessage().'</span>
              </div>';
  }
}
?>
