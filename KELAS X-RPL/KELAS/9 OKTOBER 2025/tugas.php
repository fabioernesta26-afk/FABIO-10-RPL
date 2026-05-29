<?php
$menu = ["profil", "kontak", "kegiatan", "jadwal"];
$berita = "Madrasah Tsanawiyah Negeri 1 Sidoarjo berhasil meraih penghargaan Adiwiyata tingkat provinsi yang diselenggarakan oleh Dinas Lingkungan Hidup (DLH) Provinsi Jawa Timur. Penyerahan penghargaan ini berlangsung pada Selasa (10/9) di Gedung Graha Wisata Surabaya, dalam acara  Sosialisasi dan Penyerahan Penghargaan Program Kampung Iklim (Proklim) Kategori Utama Sertifikat Nasional dan Sekolah Adiwiyata Tingkat Jatim 2024.";
$nama_sekolah = "MTsN 1 Siodarjo";
$img = "img/logo.jpg";
$program = ["Shalat dhuha setiap pagi", "Sholat dhuhur dan ashar berjamaah", "Pramuka 4x sebulan untuk kelas 7"];
$lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quis.";
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MTsN 1 Sidoarjo</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <img src="?=$img?>" alt="SMKN 2">
      <ul class="navbar-nav justify-content-end me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><?= $menu[0] ?></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><?= $menu[1] ?></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><?= $menu[2] ?></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><?= $menu[3] ?></a>
        </li>
      </ul>
    </div>
  </nav>
  <div>

  <div><h2>berita</h2>
<p><?=$berita ?></p>
</div>

    <div class="col-md-8">
      <div class="card">
        <div class="card-header bg-dark text-white">
          Selamat Datang
        </div>

        <div class="card-body">
          <h3><?=$nama_sekolah?></h3>
          <p><?=$lorem?></p>
          <h4><?= $program[0] ?></h4>
          <p><?=$lorem?></p>
          <br>
          <h4><?=$program[1]?></h4>
          <p><?=$lorem?></p>
          <br>
          <h4><?=$program[2]?></h4>
          <p><?=$lorem?></p>
          <a href="#" class="btn btn-dark">Info Selengkapnya</a>
        </div>
      </div>
    </div>
  </div>
  </div>
</body>

</html>