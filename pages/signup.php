<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>S'inscrire</title>
    <link rel="stylesheet" href="/assets/css/pages/sign.css">
    <link rel="icon" type="image/x-icon" href="/assets/favicon.ico">

</head>

<body class="bg-color-abyssalBlack">
    <main class="flex">
        <article class="flex column jc-center width-100 height-100 logs">
            <div class="container flex column gap-15 padding-0-5">
                <span class="text-color-softLight text-h1-media as-center">Créer un compte</span>
                <form action="signup_page.php" class="flex column gap-15">
                    <label for="username" class="text-color-softLight text-h2-media">Pseudo</label>
                    <input type="text" placeholder="Pseudo" name="user"
                        class="text-color-softLight text-h2-media bg-color-oceanDepth radius-component-color padding-custom" required>
                    <label for="email" class="text-color-softLight text-h2-media">Email</label>
                    <input type="email" autocomplete="username" placeholder="example@hekaru.com" name="email"
                        class="text-color-softLight text-h2-media bg-color-oceanDepth radius-component-color padding-custom"
                        id="sign-email" required>
                    <label for="password" class="text-color-softLight text-h2-media">Mot de passe</label>
                    <input type="password" autocomplete="new-password" placeholder="Choississez votre mot de passe" name="pwd" class="text-color-softLight text-h2-media bg-color-oceanDepth radius-component-color padding-custom" id="sign-pwd" required>
                    <div class="flex column gap-10">
                        <button type="submit" id="submit" class="pointer bg-color-softLight text-h2-media text-color-abyssalBlack radius-component-rounded padding-3-15">S'inscrire</button>
                        <button class="pointer text-color-softLight text-h2-media flex ai-center jc-center radius-component-rounded-color gap-5 padding-3-15">Retour</button>
                    </div>
                </form>
                <a href="../pages/signin.php" class="pointer as-center text-color-softCyan text-h2-media text-underline">Vous avez déjà un compte ?</a>
            </div>
        </article>
        <div class="width-100 hide img-container">
            <div class="img-side width-100 animation"></div>
        </div>
    </main>
</body>
<script type="module" src="/assets/js/main.js"></script>

</html>