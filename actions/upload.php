<?php
$target_dir = "../../assets/img/admin";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;

$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
echo $imageFileType . PHP_EOL;
echo $target_file;
var_dump($_FILES["fileToUpload"]);
die;

if (isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if ($check !== false) {
        echo "file is an image - " . $check["mine"] . ".";
        $uploadOk = 1;
    } else {
        echo "file is not an image";
        $uploadOk = 0;
    }
}

if (file_exists($target_file)) {
    echo "Sorry, file already exist";
    $uploadOk = 0;
}

if ($_FILES["fileToUpload"]["size"] > 2320000) {
    echo "Sorry, your file is too large";
    $uploadOk = 0;
}

if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType = "jpeg" && $imageFileType = "gif") {
    echo "Sorry, only JPG, JPEG, PNG & gif  files are allowed ";
    $uploadOk = 0;
}

if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded ";
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "The file" . htmlspecialchars(basename($_FILES["fileToUpload"]["name"])) . " has been uploaded";
    } else {
        echo "Sorry, there was an error uploading your file.";
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

<body class="text-color-softLight">

</body>

</html>