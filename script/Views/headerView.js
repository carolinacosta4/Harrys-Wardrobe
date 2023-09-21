import * as User from "../Models/modelUsers.js"

function navbarView() {

  User.initUsers()

    let result = ''

    if (User.isLogged()) {
        result += `<div class="row headerRow"><div class="col-md-2 col-sm-2 col-2" id="firstOptions">
        <nav class="navbar navbar-expand-lg d-flex justify-content-center">
        <button class="navbar-toggler" id="logBtn" type="button" onclick="window.location.href = '../../html/account.html'">
        <i class="fa-solid fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav2">
        <p id="outfit" class="menu">LOOKBOOK</p>
        <div class="dropdown">
        <button id="menu" class="dropbtn">MENU</button>
        <div class="dropdown-content">
        <a id="tops" class="menu">TOPS</a>
        <a id="bottoms" class="menu">BOTTOMS</a>
        <a id="outerwear" class="menu">OUTERWEAR</a>
        <a id="shoes" class="menu">SHOES</a>
        <a id="accessories" class="menu">ACESSORIES</a></div></div></div></div></nav>
        <div class="col-md-8 col-sm-8 col-8">
        <p id="mainTitle" onclick="window.location.href = '../index.html'">HARRY'S WARDROBE</p></div>
        <div class="col-md-2 col-sm-2 col-2">
        <nav class="navbar navbar-expand-lg d-flex justify-content-center">
        <button class="navbar-toggler" id="logBtn" type="button" onclick="window.location.href = '../../html/account.html'">
        <i class="fa-solid fa-user"></i>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav2">
        <a href="../html/account.html"><p id="account">ACCOUNT</p></a></div></div></nav>`
    } else {
        result += `<div class="row"><div class="col-md-2"></div>
        <p class="col-md-8" id="mainTitle" onclick="window.location.href = '../index.html'">HARRY'S WARDROBE</p>
        <a class="col-md-2" href="../html/login.html">
        <p>LOGIN</p></a></div>`
    }

    // <nav class="navbar navbar-expand-lg navbar-light d-flex justify-content-center" id="col3">
    //                 <button class="navbar-toggler" id="logBtn" type="button" onclick="window.location.href = '../../html/account.html'">
    //                   <img src="../../assets/imgs/accountIcon.png" alt="icon" id="accountIcon">
    //                 </button>
    //                 <div class="collapse navbar-collapse justify-content-center" id="navbarNav2">
    //                   <ul class="navbar-nav">
    //                     <li class="nav-item">
    //                       <input type="button" value="${User.getUserLogged().username}" id="loginBtn" onclick="window.location.href = '../../html/account.html'">
    //                     </li>
    //                   </ul>
    //                 </div>
    //               </nav>
    

  document.querySelector("header").innerHTML = result
}
  
navbarView()