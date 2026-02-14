<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/../../assets/css/pages/admin/pages/designSign.css">
    <title>Design sign page</title>
</head>

<body class="pageLoaded" data-page="admin">
    <main class="flex">
        <cropper-canvas background>
            <cropper-image src="../../assets/img/crop/photos/picture.jpg" alt="Picture" rotatable scalable skewable
                translatable></cropper-image>
            <cropper-shade hidden></cropper-shade>
            <cropper-handle action="select" plain></cropper-handle>
            <cropper-selection initial-coverage="0.5" movable resizable>
                <cropper-grid role="grid" covered></cropper-grid>
                <cropper-crosshair centered></cropper-crosshair>
                <cropper-handle action="move" theme-color="rgba(255, 255, 255, 0.35)"></cropper-handle>
                <cropper-handle action="n-resize"></cropper-handle>
                <cropper-handle action="e-resize"></cropper-handle>
                <cropper-handle action="s-resize"></cropper-handle>
                <cropper-handle action="w-resize"></cropper-handle>
                <cropper-handle action="ne-resize"></cropper-h andle>
                    <cropper-handle action="nw-resize"></cropper-handle>
                    <cropper-handle action="se-resize"></cropper-handle>
                    <cropper-handle action="sw-resize"></cropper-handle>
            </cropper-selection>
        </cropper-canvas>
        <div class="flex column jc-center ai-center width-100">
            <form class="width-100 jc-center flex" action="../../actions/upload.php " method="post" enctype="multipart/form-data">
                <input type="file" class="hide hidden imageUploaded" id="imageUpload" name="mp3" accept="image/png, image/jpg" />
                <label for="imageUpload" class="pointer radius-component-rounded bg-color-softLight text-color-abyssalBlack text-h1-media padding-5">Choississez un fichier</label>  
            </form>
            <p class="fileName text-color-abyssalBlack text-h2-media"></p>

        </div>
        <!-- <div class="display"></div> -->
    </main>
</body>
<script type="module" src="../../assets/js/main.js"></script>

</html>