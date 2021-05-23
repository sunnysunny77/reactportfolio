<!DOCTYPE html>
<html>
<body>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_REQUEST["name"];
    $phone = $_REQUEST["phone"];
    $email = $_REQUEST["email"];
    $message = $_REQUEST["message"];
    $to_email = "@gmail.com";
    $subject = "New Contact Us Message";
    
    $contactus = "
    You have a message from the contact us page on your website:
    Name: ".$name."
    Phone: ".$phone."
    Email: ".$email."
    Message: ".$message;
    $contactus  = wordwrap($contactus ,70);
    mail($to_email,$subject,$contactus);
}
?>
   Thanks, sent to &#128231; 
</body>
</html>