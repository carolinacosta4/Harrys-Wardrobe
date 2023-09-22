import * as User from "../Models/modelUsers.js"


function fillBodyContainer(){
    let result = ''
    let bodyContainer = document.getElementById("bodyContainer")
    let submain = User.getUserLogged().clothLoad
    let main = submain.replace(/\d+$/, '')
    result = `<div class="row"><div class="col-md-9 col-sm-10 col-11" id="containerOutfit"><img class="img-fluid" src="../assets/${main}/${User.getUserLogged().clothLoad}each.png" id="outfitImg"></div>`
    let favorites = User.getUserLogged().favorites
    if (favorites.includes(User.getUserLogged().clothLoad)){
        result += `<div class="col-md-1 col-sm-2 col-1"><i class="fa-solid fa-heart fa-2xl Fav" id="favorite"></i></div>`
    }else{
        result += `<div class="col-md-1 col-sm-2 col-1"><i id="favorite" class="fa-regular fa-heart fa-2xl notFav"></i></div>`
    }


    
    result += `<div id="containerOutfits" class="col-md-2 col-sm-12 col-12">
        <img src="../assets/${main}/${User.getUserLogged().clothLoad}closeup.png" class="thumbnail" onclick="openImage('../assets/${User.getUserLogged().pageLoad}/${User.getUserLogged().clothLoad}closeup.png')">
        <img src="../assets/${main}/${User.getUserLogged().clothLoad}closeup2.png" class="thumbnail" onclick="openImage('../assets/${User.getUserLogged().pageLoad}/${User.getUserLogged().clothLoad}closeup2.png')">
        <img src="../assets/${main}/${User.getUserLogged().clothLoad}closeup3.png" class="thumbnail" onclick="openImage('../assets/${User.getUserLogged().pageLoad}/${User.getUserLogged().clothLoad}closeup3.png')"></div>
        <div id="imageModal" class="modal">
        <span class="close" onclick="closeImage()">&times;</span>
        <img id="modalContent" src="" alt="Modal Image"></div></div>`
    bodyContainer.innerHTML = result
}

fillBodyContainer()

document.addEventListener("click", (event) => {
    const clickedElement = event.target

    if (clickedElement.classList.contains("notFav")) {
        clickedElement.classList.remove("notFav")
        clickedElement.classList.remove("fa-regular")

        clickedElement.classList.add("Fav")
        clickedElement.classList.add("fa-solid")

        User.addFavorite(User.getUserLogged().clothLoad)
    } else if (clickedElement.classList.contains("Fav")) {
        clickedElement.classList.remove("Fav")
        clickedElement.classList.remove("fa-solid")

        clickedElement.classList.add("notFav")
        clickedElement.classList.add("fa-regular")

        User.deleteFavorite(User.getUserLogged().clothLoad);
    }
});
