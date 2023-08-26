import * as User from "./modelUsers.js"

function navbarView() {

  User.initUsers()

    let result = ''

    if (User.isLogged()) {
        result += `<p id="mainTitle" onclick="window.location.href = '../index.html'">HARRY'S WARDROBE</p>
        <a id="outfits" class="menu" href="../html/lookbook.html"><p>LOOKBOOK</p></a>
        <div class="dropdown">
        <button class="dropbtn">MENU</button>
        <div class="dropdown-content">
        <a id="tops" class="menu">TOPS</a>
        <a id="bottoms" class="menu">BOTTOMS</a>
        <a id="outerwear" class="menu">OUTERWEAR</a>
        <a id="shoes" class="menu">SHOES</a>
        <a id="acessories" class="menu">ACESSORIES</a></div></div>
        <a href="../html/account.html"><p>ACCOUNT</p></a>`
    } else {
        result += `<p id="mainTitle" onclick="window.location.href = '../index.html'">HARRY'S WARDROBE</p>
        <a href="../html/login.html">
        <p>LOGIN</p></a>`
    }
    

  document.querySelector("header").innerHTML = result
}
  
navbarView()