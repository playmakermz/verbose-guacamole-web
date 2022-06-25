// disable sidebar 
function disSidebar(a1, a2, a3, a4, a5, a6, a7, a8) {
       document.getElementById(a1).classList.remove("w3-show")
       document.getElementById(a2).classList.remove("w3-show")
       document.getElementById(a3).classList.remove("w3-show")

       document.getElementById(a4).classList.remove("w3-show")
       document.getElementById(a5).classList.remove("w3-show")
       document.getElementById(a6).classList.remove("w3-show")

       document.getElementById(a7).classList.remove("w3-show")
       document.getElementById(a8).classList.remove("w3-show")
}

// list all dropshow 
// demoAcc, drop-show-02, drop-show-03, drop-show-04, drop-show-05, drop-show-06, drop-show-07, drop-show-08, drop-show-09

// Accordion dropdown sidebar 01
 function myAccFunc() {
        let x = document.getElementById("demoAcc");
        let result = x.classList.contains("w3-show")

        if (result === false) {
              x.className += " w3-show"
              disSidebar('drop-show-02', 'drop-show-03', 'drop-show-04', 'drop-show-05', 'drop-show-06', 'drop-show-07', 'drop-show-08', 'drop-show-09')
        } else {
               x.classList.remove("w3-show")
        }
 }
 // dropdown sidebar 02

 function dropShow() {
        // get dropdown 02
        let x = document.getElementById("drop-show-02");
        // check class in dropdown 02
        let result = x.classList.contains("w3-show")

        if (result === false) {
               // enable dropdown 02
               x.className += " w3-show"
               // disable dropdown 01 and others
               
              disSidebar('drop-show-03', 'drop-show-04', 'drop-show-05', 'drop-show-06', 'drop-show-07', 'drop-show-08', 'drop-show-09', 'demoAcc')
        } else {
               // disable dropdown 02
               x.classList.remove("w3-show")
        }
 }

// dropdown sidebar 03
function dropShow03() {
        // get dropdown 03
        let x = document.getElementById("drop-show-03");
        // check class in dropdown 03
        let result = x.classList.contains("w3-show")

        if (result === false) {
               // enable dropdown 03
               x.className += " w3-show"
               // disable dropdown 01 an others
               
              disSidebar('drop-show-02', 'drop-show-04', 'drop-show-05', 'drop-show-06', 'drop-show-07', 'drop-show-08', 'drop-show-09', 'demoAcc')
        } else {
               // disable dropdown 03
               x.classList.remove("w3-show")
        }
}
 
// dropdown sidebar 04
function dropShow04() {
        let x = document.getElementById("drop-show-04");
        let result = x.classList.contains("w3-show")

        if (result === false) {
               x.className += " w3-show"
               
              disSidebar('drop-show-03', 'drop-show-02', 'drop-show-05', 'drop-show-06', 'drop-show-07', 'drop-show-08', 'drop-show-09', 'demoAcc')
        } else {
               x.classList.remove("w3-show")
        }
}
 
// dropdown sidebar 05
function dropShow05() {
        let x = document.getElementById("drop-show-05");
        let result = x.classList.contains("w3-show")

        if (result === false) {
               x.className += " w3-show"
               
              disSidebar('drop-show-03', 'drop-show-04', 'drop-show-02', 'drop-show-06', 'drop-show-07', 'drop-show-08', 'drop-show-09', 'demoAcc')
        } else {
               x.classList.remove("w3-show")
        }
 }

 // dropdown sidebar 06
function dropShow06() {
        let x = document.getElementById("drop-show-06");
        let result = x.classList.contains("w3-show")

        if (result === false) {
               x.className += " w3-show"
               
              disSidebar('drop-show-03', 'drop-show-04', 'drop-show-05', 'drop-show-02', 'drop-show-07', 'drop-show-08', 'drop-show-09', 'demoAcc')
        } else {
               x.classList.remove("w3-show")
        }
}
 
 // dropdown sidebar 07
function dropShow07() {
        let x = document.getElementById("drop-show-07");
        let result = x.classList.contains("w3-show")

        if (result === false) {
               x.className += " w3-show"
               
              disSidebar('drop-show-03', 'drop-show-04', 'drop-show-05', 'drop-show-06', 'drop-show-02', 'drop-show-08', 'drop-show-09', 'demoAcc')
        } else {
               x.classList.remove("w3-show")
        }
 }

  // dropdown sidebar 08
function dropShow08() {
        let x = document.getElementById("drop-show-08");
        let result = x.classList.contains("w3-show")

        if (result === false) {
               x.className += " w3-show"
               
              disSidebar('drop-show-03', 'drop-show-04', 'drop-show-05', 'drop-show-06', 'drop-show-07', 'drop-show-02', 'drop-show-09', 'demoAcc')
        } else {
               x.classList.remove("w3-show")
        }
 }

  // dropdown sidebar 09
function dropShow09() {
        let x = document.getElementById("drop-show-09");
        let result = x.classList.contains("w3-show")

        if (result === false) {
               x.className += " w3-show"
               
              disSidebar('drop-show-03', 'drop-show-04', 'drop-show-05', 'drop-show-06', 'drop-show-07', 'drop-show-08', 'drop-show-02', 'demoAcc')
        } else {
               x.classList.remove("w3-show")
        }
 }
