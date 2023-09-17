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
    let arrayCloth = []
    let clothClass = User.getUserLogged().pageLoad
    let cloth = Cloth.getCloth()
    console.log(clothClass)
    for (let i = 0; cloth.length > i; i++){
        if(cloth[i].clothClass == clothClass){
            arrayCloth.push(cloth[i])
            console.log(arrayCloth)
        }
    }

    const itemsPerPage = 15
    const totalItems = arrayCloth.length
    const totalPages = Math.ceil(totalItems / itemsPerPage)
    console.log(totalItems)
    console.log(totalPages)
    
    for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++){
        result += `<div id="grid">`
        for(let i = 0; arrayCloth.length > i; i++){
            result += `<div><img id="${arrayCloth[i].id}" class="cloth" src="${arrayCloth[i].src}"></div>`
        }
        result += `</div>`
    }

    containerBody.innerHTML = result

    let pageNavigation = '<table><tr>'
    for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
      pageNavigation += `<td><a href="#" onclick="showPage(${pageNumber})">${pageNumber}</a></td>`
    }
    pageNavigation += '</tr></table>'
  
    containerBody.insertAdjacentHTML('afterend', pageNavigation)
  
    // window.showPage = function(pageNumber) {
    //   const pages = document.querySelectorAll('.page')
    //   pages.forEach((page) => {
    //     page.style.display = 'none'
    //   });
    //   document.getElementById(`grid${pageNumber}`).style.display = 'block'
    // };
    
    // showPage(1)
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