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
        <div class="col-md-8 col-sm-8 col-9">
        <p id="mainTitle" onclick="window.location.href = '../../index.html'">HARRY'S WARDROBE</p></div>
        <div class="col-md-1 col-sm-1 col-1">
        <i id="searchUsers" class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div class="col-md-1 col-sm-1 col-1">
        <nav class="navbar navbar-expand-lg d-flex justify-content-center">
        <button class="navbar-toggler" id="logBtn" type="button">
        <i class="fa-solid fa-user userAccount"></i>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav2">
        <a class="userAccount"><p id="account">ACCOUNT</p></a></div></div></nav></div>`
    } else {
        result += `<div class="row headerRow"><div class="col-md-2"></div>
        <p class="col-md-8 col-10" id="mainTitle" onclick="window.location.href = '../index.html'">HARRY'S WARDROBE</p>
        <div class="col-md-2 col-2"><nav class="navbar navbar-expand-lg d-flex justify-content-center">
        <button class="navbar-toggler" id="logBtn" type="button" onclick="window.location.href = '../html/login.html'">
        <i class="fa-solid fa-user"></i></button><div class="collapse navbar-collapse justify-content-center">
        <a href="../html/login.html"><p>LOGIN</p></a></div></nav></div></div>`
    }
    
  document.querySelector("header").innerHTML = result

  let userAccount = document.getElementsByClassName("userAccount")
    for (let i = 0; i < userAccount.length; i++) {
        userAccount[i].addEventListener("click", function() {
          User.editAccountLoad("ownUser")
          window.location.href = "../../html/account.html"
        })
    }
}
  
navbarView()