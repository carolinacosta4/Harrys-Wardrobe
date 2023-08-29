import * as User from "./modelUsers.js"

let menu = document.getElementsByClassName("menu")
for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", function(event) {
        let clickedItemId = event.target.id
        User.changePageLoad(clickedItemId)
        window.location.href = "../html/lookbook.html"
    })
}

function fillContainerBody(){
    let result = ''
    let containerBody = document.getElementById("containerBody")

    result =`<div id="grid1"><div>
    <img id="${User.getUserLogged().pageLoad}1" class="cloth" src="../assets/${User.getUserLogged().pageLoad}/${User.getUserLogged().pageLoad}1.png"></div><div>
    <img id="${User.getUserLogged().pageLoad}2" class="cloth" src="../assets/${User.getUserLogged().pageLoad}/${User.getUserLogged().pageLoad}2.png"></div><div>
    <img id="${User.getUserLogged().pageLoad}3" class="cloth" src="../assets/${User.getUserLogged().pageLoad}/${User.getUserLogged().pageLoad}3.png"></div><div>
    <img id="${User.getUserLogged().pageLoad}4" class="cloth" src="../assets/${User.getUserLogged().pageLoad}/${User.getUserLogged().pageLoad}4.png"></div><div>
    <img id="${User.getUserLogged().pageLoad}5" class="cloth" src="../assets/${User.getUserLogged().pageLoad}/${User.getUserLogged().pageLoad}5.png"></div></div>
    <div id="grid2"><div>
    <img id="${User.getUserLogged().pageLoad}6" class="cloth" src="../assets/${User.getUserLogged().pageLoad}/${User.getUserLogged().pageLoad}6.png"></div><div>
    <img id="${User.getUserLogged().pageLoad}7" class="cloth" src="../assets/${User.getUserLogged().pageLoad}/${User.getUserLogged().pageLoad}7.png"></div><div>
    <img id="${User.getUserLogged().pageLoad}8" class="cloth" src="../assets/${User.getUserLogged().pageLoad}/${User.getUserLogged().pageLoad}8.png"></div><div>
    <img id="${User.getUserLogged().pageLoad}9" class="cloth" src="../assets/${User.getUserLogged().pageLoad}/${User.getUserLogged().pageLoad}9.png"></div><div>
    <img id="${User.getUserLogged().pageLoad}10" class="cloth" src="../assets/${User.getUserLogged().pageLoad}/${User.getUserLogged().pageLoad}10.png"></div></div>
    <div id="grid3"><div>
    <img id="${User.getUserLogged().pageLoad}11" class="cloth" src="../assets/${User.getUserLogged().pageLoad}/${User.getUserLogged().pageLoad}11.png"></div><div>
    <img id="${User.getUserLogged().pageLoad}12" class="cloth" src="../assets/${User.getUserLogged().pageLoad}/${User.getUserLogged().pageLoad}12.png"></div><div>
    <img id="${User.getUserLogged().pageLoad}13" class="cloth" src="../assets/${User.getUserLogged().pageLoad}/${User.getUserLogged().pageLoad}13.png"></div><div>
    <img id="${User.getUserLogged().pageLoad}14" class="cloth" src="../assets/${User.getUserLogged().pageLoad}/${User.getUserLogged().pageLoad}14.png"></div><div>
    <img id="${User.getUserLogged().pageLoad}15" class="cloth" src="../assets/${User.getUserLogged().pageLoad}/${User.getUserLogged().pageLoad}15.png"></div></div>`

    containerBody.innerHTML = result
}

fillContainerBody()

let cloth = document.getElementsByClassName("cloth")
for (let i = 0; i < cloth.length; i++) {
    cloth[i].addEventListener("click", function(event) {
        let clickedItemId = event.target.id
        User.changeClothLoad(clickedItemId)
        window.location.href = "../html/variety.html"
    })
}