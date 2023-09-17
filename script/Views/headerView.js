import * as User from "../Models/modelUsers.js"

function navbarView() {

  User.initUsers()

    let result = ''

    if (User.isLogged()) {
        result += `<div id="firstOptions"><p id="outfit" class="menu">LOOKBOOK</p>
        <div class="dropdown">
        <button id="menu" class="dropbtn">MENU</button>
        <div class="dropdown-content">
        <a id="tops" class="menu">TOPS</a>
        <a id="bottoms" class="menu">BOTTOMS</a>
        <a id="outerwear" class="menu">OUTERWEAR</a>
        <a id="shoes" class="menu">SHOES</a>
        <a id="accessories" class="menu">ACESSORIES</a></div></div></div>
        <p id="mainTitle" onclick="window.location.href = '../index.html'">HARRY'S WARDROBE</p>
        <a href="../html/account.html"><p id="account">ACCOUNT</p></a>`
    } else {
        result += `<div></div>
        <p id="mainTitle" onclick="window.location.href = '../index.html'">HARRY'S WARDROBE</p>
        <a href="../html/login.html">
        <p>LOGIN</p></a>`
    }
    

  document.querySelector("header").innerHTML = result
}
  
navbarView()