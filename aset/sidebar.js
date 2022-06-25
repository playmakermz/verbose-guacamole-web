document.write(`
<!-- side bar -->
<nav class="w3-sidebar w3-bar-block w3-white w3-collapse w3-top" style="z-index:3" id="mySidebar">
    <div class="w3-container w3-display-container w3-padding-16">
        <i onclick="w3_close()" class="fa fa-remove w3-hide-large w3-button w3-display-topright"></i>
        <img src="/aset/atas-bawah.png" alt="Logo">
        <hr>
    </div>
    <div class="w3-padding-64 w3-large w3-text-grey" style="font-weight:bold">

        <!-- sub menu 01 -->
        <a onclick="myAccFunc()" href="javascript:void(0)" class="w3-button w3-block w3-white w3-left-align">
            Kelola Admin 
            <snap id="arrow-d-01"><i class="bi bi-arrow-right" style="float:right;"></i></snap>
            <snap id="arrow-n-01" class="arrow-miss"><i class="bi bi-arrow-down" style="float:right;"></i></snap>
            
        </a>
        <div id="demoAcc" class="w3-bar-block w3-hide w3-padding-large w3-medium">
            <a href="#" class="w3-bar-item w3-button">Tambah Admin</a>
            <a href="#" class="w3-bar-item w3-button">Daftar Admin</a>
            <a href="#" class="w3-bar-item w3-button">Hak Akses</a>
        </div>

        <!-- sub menu 02 -->
        <a onclick="dropShow()" href="javascript:void(0)" class="w3-button w3-block w3-white w3-left-align">
            kelola jemaat <i class="fa fa-caret-down"></i>
        </a>
        <div id="drop-show-02" class="w3-bar-block w3-hide w3-padding-large w3-medium">
            <a href="#" class="w3-bar-item w3-button">Tambah Admin</a>
            <a href="#" class="w3-bar-item w3-button">Daftar Admin</a>
            <a href="#" class="w3-bar-item w3-button">Hak Akses</a>
        </div>

        <a href="#" class="w3-bar-item w3-button">Iuran</a>
        <a href="#" class="w3-bar-item w3-button">Jadwalkan Kegiatan</a>
        <a href="#" class="w3-bar-item w3-button">Detail Kegiatan</a>

        <!-- sub menu 03 -->
        <a onclick="dropShow03()" href="javascript:void(0)" class="w3-button w3-block w3-white w3-left-align">
            kelola barang <i class="fa fa-caret-down"></i>
        </a>
        <div id="drop-show-03" class="w3-bar-block w3-hide w3-padding-large w3-medium">
           <a href="#" class="w3-bar-item w3-button">Tambah Admin</a>
            <a href="#" class="w3-bar-item w3-button">Daftar Admin</a>
            <a href="#" class="w3-bar-item w3-button">Hak Akses</a>
        </div>

        <!-- sub menu 04 -->
        <a onclick="dropShow04()" href="javascript:void(0)" class="w3-button w3-block w3-white w3-left-align">
            kelola Transaksi <i class="fa fa-caret-down"></i>
        </a>
        <div id="drop-show-04" class="w3-bar-block w3-hide w3-padding-large w3-medium">
            <a href="#" class="w3-bar-item w3-button">Tambah Admin</a>
            <a href="#" class="w3-bar-item w3-button">Daftar Admin</a>
            <a href="#" class="w3-bar-item w3-button">Hak Akses</a>
        </div>

        <!-- sub menu 05 -->
        <a onclick="dropShow05()" href="javascript:void(0)" class="w3-button w3-block w3-white w3-left-align">
            kelola laporan <i class="fa fa-caret-down"></i>
        </a>
        <div id="drop-show-05" class="w3-bar-block w3-hide w3-padding-large w3-medium">
           <a href="#" class="w3-bar-item w3-button">Tambah Admin</a>
            <a href="#" class="w3-bar-item w3-button">Daftar Admin</a>
            <a href="#" class="w3-bar-item w3-button">Hak Akses</a>
        </div>

        <!-- sub menu 06 -->
        <a onclick="dropShow06()" href="javascript:void(0)" class="w3-button w3-block w3-white w3-left-align">
            Akun <i class="fa fa-caret-down"></i>
        </a>
        <div id="drop-show-06" class="w3-bar-block w3-hide w3-padding-large w3-medium">
            <a href="#" class="w3-bar-item w3-button">Tambah Admin</a>
            <a href="#" class="w3-bar-item w3-button">Daftar Admin</a>
            <a href="#" class="w3-bar-item w3-button">Hak Akses</a>
        </div>

        <!-- sub menu 07 -->
        <a onclick="dropShow07()" href="javascript:void(0)" class="w3-button w3-block w3-white w3-left-align">
            Aktiva <i class="fa fa-caret-down"></i>
        </a>
        <div id="drop-show-07" class="w3-bar-block w3-hide w3-padding-large w3-medium">
            <a href="#" class="w3-bar-item w3-button">Tambah Admin</a>
            <a href="#" class="w3-bar-item w3-button">Daftar Admin</a>
            <a href="#" class="w3-bar-item w3-button">Hak Akses</a>
        </div>


        <!-- sub menu 08 -->
        <a onclick="dropShow08()" href="javascript:void(0)" class="w3-button w3-block w3-white w3-left-align">
            kas <i class="fa fa-caret-down"></i>
        </a>
        <div id="drop-show-08" class="w3-bar-block w3-hide w3-padding-large w3-medium">
            <a href="#" class="w3-bar-item w3-button">Tambah Admin</a>
            <a href="#" class="w3-bar-item w3-button">Daftar Admin</a>
            <a href="#" class="w3-bar-item w3-button">Hak Akses</a>
        </div>

        <a href="#" class="w3-bar-item w3-button">Bank</a>

        <!-- sub menu 09 -->
        <a onclick="dropShow09()" href="javascript:void(0)" class="w3-button w3-block w3-white w3-left-align">
            Laporan Keuangan <i class="fa fa-caret-down"></i>
        </a>
        <div id="drop-show-09" class="w3-bar-block w3-hide w3-padding-large w3-medium">
            <a href="#" class="w3-bar-item w3-button">Tambah Admin</a>
            <a href="#" class="w3-bar-item w3-button">Daftar Admin</a>
            <a href="#" class="w3-bar-item w3-button">Hak Akses</a>
        </div>


    </div>
 
</nav>

 <div class="w3-overlay w3-hide-large" onclick="w3_close()" style="cursor:pointer" title="close side menu"
        id="myOverlay"></div>

    <!-- !PAGE CONTENT! / default-->
    <div class="w3-main" style="margin-left:250px">

        <script src="/aset/header.js"></script>

        <!-- Push down content on small screens / default-->
        <div class="w3-hide-large" style="margin-top:83px"></div>

        <!-- Top header / default-->
        <header class="w3-container w3-xlarge">
            <p class="w3-left">Jeans</p>
            <p class="w3-right">
                <i class="fa fa-shopping-cart w3-margin-right"></i>
                <i class="fa fa-search"></i>
            </p>
        </header>

        <!-- Top menu small screen / default-->
        <!-- Top menu on small screens -->
        <header class="w3-bar w3-top w3-hide-large w3-black w3-xlarge">
            <div class="w3-bar-item w3-padding-24 w3-wide">LOGO</div>
            <a href="javascript:void(0)" class="w3-bar-item w3-button w3-padding-24 w3-right" onclick="w3_open()"><i
                    class="fa fa-bars"></i></a>
        </header>
    </div>
`)

// How to include Html to other Html file; https://stackoverflow.com/questions/8988855/include-another-html-file-in-a-html-file