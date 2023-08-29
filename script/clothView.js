import * as User from "./modelUsers.js"


function fillBodyContainer(){
    let result = ''
    let bodyContainer = document.getElementById("bodyContainer")
    result = `<div id="containerOutfit">
        <img src="../assets/outfits/${User.getUserLogged().clothLoad}each.png" id="outfitImg"></div>
        <div id="containerOutfits" class="container">
        <img src="../assets/outfits/${User.getUserLogged().clothLoad}closeup.jpg" class="thumbnail" onclick="openImage('../assets/outfits/${User.getUserLogged().clothLoad}closeup.jpg')" alt="SpaceBoy 1">
        <img src="../assets/outfits/${User.getUserLogged().clothLoad}closeup2.png" class="thumbnail" onclick="openImage('../assets/outfits/${User.getUserLogged().clothLoad}closeup2.png')" alt="SpaceBoy 2">
        <img src="../assets/outfits/${User.getUserLogged().clothLoad}closeup3.jpg" class="thumbnail" onclick="openImage('../assets/outfits/${User.getUserLogged().clothLoad}closeup3.jpg')" alt="SpaceBoy 3"></div>
        <div id="imageModal" class="modal">
        <span class="close" onclick="closeImage()">&times;</span>
        <img id="modalContent" src="" alt="Modal Image"></div>`
    bodyContainer.innerHTML = result
}

fillBodyContainer()