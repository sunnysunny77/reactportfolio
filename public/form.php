<!DOCTYPE html>
<html>
<body>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_REQUEST["name"];
    $phone = $_REQUEST["phone"];
    $email = $_REQUEST["email"];
    $message = $_REQUEST["message"];
    $to_email = "shlooby07@gmail.com";
    $subject = "New Contact Us Message";
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";  

    $contactus = "
    <html>
    <p>You have a message from the contact us page on your website:</p>
    <b>Name: </b>".$name."
    <br><b>Phone: </b>".$phone."
    <br><b>Email: </b>".$email."
    <br><b>Message: </b>".$message."
    </html>";
    $contactus  = wordwrap($contactus ,70);
    $mail = mail($to_email,$subject,$contactus,$headers);
    if (!$mail) {
      echo print_r(error_get_last()['message']);
    } else {
      echo "Thanks, sent to mail";
    }
}
?>

</body>
</html>
