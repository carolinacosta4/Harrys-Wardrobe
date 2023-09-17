import * as Cloth from "./modelOutfits.js"

document.getElementById("addClothForm").addEventListener("submit", () => {
    let idCloth = document.getElementById("idCloth").value
    let selected = document.getElementById("forCategories").value
    if(selected != 0){
        Cloth.saveCloth(idCloth, selected)
    }
    else{
        alert("You need to choose a category!")
    }
})