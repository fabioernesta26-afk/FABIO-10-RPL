<<<<<<< HEAD
<nav>
    <ul>
        <li><a href="?menu=Kontak">kontak</a></li>
        <li><a href="?menu=Sejarah">sejarah</a></li>
        <li><a href="?menu=Jurusan">Jurusan</a></li>
    </ul>
</nav>

<?php 

  if (isset($_GET['menu'])) {
    
    $menu = $_GET['menu'];
   
    require_once $menu.'.php';
  }
    

=======
<nav>
    <ul>
        <li><a href="?menu=Kontak">kontak</a></li>
        <li><a href="?menu=Sejarah">sejarah</a></li>
        <li><a href="?menu=Jurusan">Jurusan</a></li>
    </ul>
</nav>

<?php 

  if (isset($_GET['menu'])) {
    
    $menu = $_GET['menu'];
   
    require_once $menu.'.php';
  }
    

>>>>>>> 1345b1f95106050deba71cb1729a52547135453c
?>