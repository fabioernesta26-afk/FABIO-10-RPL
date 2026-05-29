<<<<<<< HEAD
<?php 

    session_start();

    echo $_SESSION['user'];

    echo '<br>';

    echo $_SESSION['nama'];

    echo '<br>';

    echo $_SESSION['alamat'];

    echo '<br>';

    foreach ($_SESSION as $key => $value) {
        echo $key.'=>'.$value.'<br>';
    }

=======
<?php 

    session_start();

    echo $_SESSION['user'];

    echo '<br>';

    echo $_SESSION['nama'];

    echo '<br>';

    echo $_SESSION['alamat'];

    echo '<br>';

    foreach ($_SESSION as $key => $value) {
        echo $key.'=>'.$value.'<br>';
    }

>>>>>>> 1345b1f95106050deba71cb1729a52547135453c
?>