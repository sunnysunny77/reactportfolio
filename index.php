<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Portfolio </title>
    <link rel="stylesheet" href="css/template.css" type="text/css">
    <link rel="stylesheet" href="css/cont.css" type="text/css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto">

</head>

<body>

    <div class="outer">

        <header>

            <span role="img" aria-label="logo" class="logo"></span>

            <span role="img" aria-label="logo-text" class="logo-text"></span>            
      
            <nav>

                <ul>
                    <li>
                        <p> MENU </p>
                        <ul>
                            <li> <a href="./skills.html"> SKILLS </a> </li>
                            <li> <a href="./about.html"> ABOUT </a> </li>
                            <li>
                                <h1>
                                    <a href="./index.php">
                                        CONTACT
                                    </a>
                                </h1>
                            </li>
                            <li class="lihome">
                                <a href="./index.html"> HOME </a>
                            </li>
                        </ul>
                    </li>
                </ul>    

                <br class="clearfloat" />
            </nav>

            <br class="clearfloat" />
        </header>

        <main>

            <section class="m-logo">

                <span role="img" aria-label="globe" class="m-logo-globe"></span>

                <h2>portfolio CONTACT</h2>

                <span role="img" aria-label="divider" class="m-logo-divider"></span>

                <br class="clearfloat" />
            </section>

            <section class="template">

                <h3> Contact</h3>

                <span class="template-img-cont">

                    <span role="img" aria-label="phone contact" class="template-img"></span>

                </span>

                <div class="template-p-cont">

                    <span class="template-p-img"></span>

                    <?php
                        if (!empty($_POST))
                        {
                        $name = $_POST["name"];
                        $phone = $_POST["phone"];
                        $email = $_POST["email"];
                        $message = $_POST["message"];
                        $to_email = "shlooby07@gmail.com";
                        $subject = "New Contact Us Message";
                        $headers = "From: Contact@portfolio.com\r\n";
                        $contactus = "
                        You have a message from the contact us page on your website:
                        Name: ".$name."
                        Phone: ".$phone."
                        Email: ".$email."
                        Message: ".$message;
                        mail($to_email,$subject,$contactus,$headers);
                        }
                    ?>

                    <form class="template-p" action="index.php" method="post">

                        <fieldset>

                            <legend>Email Us:</legend>   

                            <ul>
                                <li>
                                    <br>
                                    <label for="name">Names:</label>
                                    <br>
                                    <input type="text" name="name" id="name" placeholder="First Last" maxlength="26"
                                        value="" />
                                </li>
                                <li>
                                    <br>
                                    <label for="phone">Phone:</label>
                                    <br>
                                    <input type="tel" name="phone" id="phone" placeholder="#" maxlength="11"
                                        value="" pattern="[0-9]+">
                                </li>
                                <li>
                                    <br>
                                    <label for="email">Email:</label>
                                    <br>
                                    <input type="email" name="email" id="email" placeholder="eg@example.com" maxlength="26"
                                        value="">
                                </li>
                                <li>
                                    <br>
                                    <label for="message">Message:</label>
                                    <br>
                                    <textarea name="message" id="message" maxlength="1000" rows="3"></textarea>
                                </li>
                            </ul>

                        </fieldset>

                        <input type="submit" value="Send" id="sub" />

                        <br>

                    </form> 

                </div>

                <br class="clearfloat" />
            </section>

            <span role="img" aria-label="divider" class="template-divider"></span>

            <span role="img" aria-label="phone contact img" class="template-img-bottom"></span>
          
            <br class="clearfloat" />
        </main>

        <footer>
            
            <span role="img" aria-label="web logo"></span>

            <ul>
                <li class="sm">
                    <h2>Site Map:</h2>
                </li>
                <li> <a href="./skills.html"> SKILLS </a> </li>
                <li> <a href="./about.html"> ABOUT </a> </li>
                <li> <a href="./index.php"> CONTACT </a> </li>
                <li class="lihome"> 
                    <a href="./index.html"> HOME </a> 
                </li>
            </ul>           

        </footer>

    </div>

</body>

</html>