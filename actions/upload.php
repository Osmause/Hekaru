<?php
$target_dir = "../../assets/img/admin";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;

$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

if(isset($_POST["submit"])){
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false){
        echo "file is an image - " . $check["mine"] . ".";
        $uploadOk = 1;
    } else {
        echo "file is not an image";
        $uploadOk = 0;
    }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading. . . .</title>
    <link rel="stylesheet" href="/assets/css/pages/loading.css">
</head>
<body class="">
    
</body>
</html>