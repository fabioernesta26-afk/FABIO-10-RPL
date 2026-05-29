<<<<<<< HEAD
<?php 

    $coookie_name = 'user';
    $coookie_value = 'joni';

    setcookie($cookie_name, $cookie_value);


    $cookie_value = 'tejo';

    setcookie($cookie_name, $cookie_value);

    echo $_COOKIE[$cookie_name];

    setcookie("user", "", time() - 3600);

    echo '</br>';

    var_dump($_COOKIE);

=======
<?php 

    $coookie_name = 'user';
    $coookie_value = 'joni';

    setcookie($cookie_name, $cookie_value);


    $cookie_value = 'tejo';

    setcookie($cookie_name, $cookie_value);

    echo $_COOKIE[$cookie_name];

    setcookie("user", "", time() - 3600);

    echo '</br>';

    var_dump($_COOKIE);

>>>>>>> 1345b1f95106050deba71cb1729a52547135453c
?>