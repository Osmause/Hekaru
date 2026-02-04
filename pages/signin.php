<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Se connecter </title>
    <link rel="stylesheet" href="/assets/css/pages/sign.css">
    <link rel="icon" type="image/x-icon" href="/assets/favicon.ico">
</head>

<body class="bg-color-abyssalBlack">
    <main class="flex">
        <article class="flex column jc-center width-100 height-100 logs">
            <div class="container flex column gap-15 padding-0-5">
                <span class="text-color-softLight text-h1-media as-center">Se connecter</span>
                <form action="signin_page.php" class="flex column gap-15">
                    <label for="username" class="text-color-softLight text-h2-media">Identifiant</label>
                    <input type="text" autocomplete="username" placeholder="Email ou pseudo" name="user" class="text-color-softLight text-h2-media bg-color-oceanDepth radius-component-color padding-custom" required>
                    <label for="password" class="text-color-softLight text-h2-media">Mot de passe</label>
                    <input type="password" autocomplete="current-password" placeholder="Tapez votre mot de passe" name="pwd" class="text-color-softLight text-h2-media bg-color-oceanDepth radius-component-color padding-custom" id="sign-pwd" required>
                    <div class="flex column gap-10">
                        <button type="submit" id="submit" class="pointer bg-color-softLight text-h2-media text-color-abyssalBlack radius-component-rounded padding-3-15">Se connecter</button>
                        <button class="pointer text-color-softLight text-h2-media flex ai-center jc-center radius-component-rounded-color gap-5 padding-3-15">Retour</button>
                    </div>
                </form>
                <a href="../pages/signup.php" class="pointer as-center text-color-softCyan text-h2-media text-underline">Vous n'avez pas de compte ?</a>
            </div>
        </article>
        <div class="width-100 hide img-container">
            <div class="img-side width-100 animation"></div>
        </div>
    </main>
</body>
<script type="module" src="/assets/js/main.js"></script>

</html>