document.write(`
<!-- side bar -->
<nav class="w3-sidebar w3-bar-block w3-white w3-collapse w3-top" style="z-index:3" id="mySidebar">
    <div class="w3-container w3-display-container w3-padding-16">
        <i onclick="w3_close()" class="fa fa-remove w3-hide-large w3-button w3-display-topright"></i>
        <h3 class="w3-wide"><b>LOGO</b></h3>
    </div>
    <div class="w3-padding-64 w3-large w3-text-grey" style="font-weight:bold">


        <a href="#" class="w3-bar-item w3-button">Shirts</a>
        <a href="#" class="w3-bar-item w3-button">Dresses</a>
        <a onclick="myAccFunc()" href="javascript:void(0)" class="w3-button w3-block w3-white w3-left-align">
            Jeans <i class="fa fa-caret-down"></i>
        </a>
        <div id="demoAcc" class="w3-bar-block w3-hide w3-padding-large w3-medium">
            <a href="#" class="w3-bar-item w3-button w3-light-grey"><i
                    class="fa fa-caret-right w3-margin-right"></i>Skinny</a>
            <a href="#" class="w3-bar-item w3-button">Relaxed</a>
            <a href="#" class="w3-bar-item w3-button">Bootcut</a>
            <a href="#" class="w3-bar-item w3-button">Straight</a>
        </div>
        <a href="#" class="w3-bar-item w3-button">Jackets</a>
        <a href="#" class="w3-bar-item w3-button">Gymwear</a>
        <a href="#" class="w3-bar-item w3-button">Blazers</a>
        <a href="#" class="w3-bar-item w3-button">Shoes</a>
    </div>
    <a href="#footer" class="w3-bar-item w3-button w3-padding">Contact</a>
    <a href="javascript:void(0)" class="w3-bar-item w3-button w3-padding"
        onclick="document.getElementById('newsletter').style.display='block'">Newsletter</a>
    <a href="#footer" class="w3-bar-item w3-button w3-padding">Subscribe</a>
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