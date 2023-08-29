import * as User from "./modelUsers.js"


function fillBodyContainer(){
    let result = ''
    let bodyContainer = document.getElementById("bodyContainer")
    result = `<div id="containerOutfit">
        <img src="../assets/${User.getUserLogged().pageLoad}/${User.getUserLogged().clothLoad}each.png" id="outfitImg"></div>
        <div id="containerOutfits" class="container">
        <img src="../assets/${User.getUserLogged().pageLoad}/${User.getUserLogged().clothLoad}closeup.png" class="thumbnail" onclick="openImage('../assets/${User.getUserLogged().pageLoad}/${User.getUserLogged().clothLoad}closeup.png')">
        <img src="../assets/${User.getUserLogged().pageLoad}/${User.getUserLogged().clothLoad}closeup2.png" class="thumbnail" onclick="openImage('../assets/${User.getUserLogged().pageLoad}/${User.getUserLogged().clothLoad}closeup2.png')">
        <img src="../assets/${User.getUserLogged().pageLoad}/${User.getUserLogged().clothLoad}closeup3.png" class="thumbnail" onclick="openImage('../assets/${User.getUserLogged().pageLoad}/${User.getUserLogged().clothLoad}closeup3.png')"></div>
        <div id="imageModal" class="modal">
        <span class="close" onclick="closeImage()">&times;</span>
        <img id="modalContent" src="" alt="Modal Image"></div>`
    bodyContainer.innerHTML = result
}

fillBodyContainer()