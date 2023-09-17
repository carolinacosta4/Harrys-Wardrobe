import * as Cloth from "./modelOutfits.js"

document.getElementById("addClothForm").addEventListener("submit", () => {
    let idCloth = document.getElementById("idCloth").value
    let selected = document.getElementById("forCategories").value
    Cloth.saveCloth(idCloth, selected)
})