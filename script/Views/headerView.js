import * as User from "../Models/modelUsers.js"

function navbarView() {

  User.initUsers()

    let result = ''

    if (User.isLogged()) {
        result += `<div class="row headerRow"><div class="col-md-2 col-sm-2 col-2" id="firstOptions">
        <nav class="navbar navbar-expand-lg d-flex justify-content-center">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav1">
        <i class="fa-solid fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
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

    // <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav1" aria-controls="navbarNav1" aria-expanded="false" aria-label="Toggle navigation" id="burguerMenu">
    //               <img src="../../assets/imgs/burguer.png" alt="icon" id="burguer"></button><div class="collapse navbar-collapse justify-content-end" id="navbarNav1"><ul class="navbar-nav">
    //               <li class="nav-item"><input type="button" value="Rules" class="nav-link" id="rulesBtn" onclick="window.location.href = '../../html/rules.html'"></li><li class="nav-item">
    //               <input type="button" value="About us" class="nav-link" id="abtUsBtn" onclick="window.location.href = '../../html/aboutUs.html'"></li></ul></div></nav></div>            
    

  document.querySelector("header").innerHTML = result
}
  
navbarView()