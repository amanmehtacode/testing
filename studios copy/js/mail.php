<?php 

if (isset($_POST['submit'])) {
    $name = $_POST['name']; 
    $from = $_POST['email'];
    $message = $_POST[ 'comments' ];

    $mailto="codesolutionscare@gmail.com";
    $headers = "From:" . $from;
    $txt = "You have received an e-mail from".$name.".\n\n".$message;

    (mail($to, $subject, $message, $headers));
    header("Location: index.html");

}

?>