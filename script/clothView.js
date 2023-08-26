import * as User from "./modelUsers.js"

let menu = document.getElementsByClassName("menu")
for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", function(event) {
        let clickedItemId = event.target.id
        User.changeClothLoad(clickedItemId)
        window.location.href = "../html/lookbook.html"
    })
}

function fillBodyContainer(){
    let result = ''
    let containerBody = document.getElementById("containerBody")
    if (User.getUserLogged().clothLoad == "tops"){
        result = ``
        containerBody.innerHTML = result
    }
}

fillBodyContainer()