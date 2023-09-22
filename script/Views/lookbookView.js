import * as User from "../Models/modelUsers.js"
import * as Cloth from "../Models/modelOutfits.js"

let menu = document.getElementsByClassName("menu")
for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", function(event) {
        let clickedItemId = event.target.id
        User.changePageLoad(clickedItemId)
        window.location.href = "../html/lookbook.html"
    })
}

function fillContainerBody() {
    let containerBody = document.getElementById("containerBody")
    let arrayCloth = []
    let clothClass = User.getUserLogged().pageLoad
    let cloth = Cloth.getCloth()
  
    for (let i = 0; cloth.length > i; i++) {
      if (cloth[i].clothClass == clothClass) {
        arrayCloth.push(cloth[i])
      }
    }
  
    const itemsPerPage = 12
    const totalItems = arrayCloth.length
    const totalPages = Math.ceil(totalItems / itemsPerPage)
  
    containerBody.innerHTML = ""

    for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
      let result = `<div id="grid${pageNumber}" class="page row" style="display: none;">`
      const startIndex = (pageNumber - 1) * itemsPerPage
      const endIndex = Math.min(startIndex + itemsPerPage, totalItems)
  
      for (let i = startIndex; i < endIndex; i++) {
        result += `<div class="col-md-3 col-sm-6 col-xs-12"><img id="${arrayCloth[i].id}" class="cloth img-fluid" src="${arrayCloth[i].src}"></div>`
      }
  
      result += `</div>`
      containerBody.insertAdjacentHTML("beforeend", result)
    }
  
    let pageNavigation = '<table id="pageNumbers"><tr>'
    for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
      pageNavigation += `<td><a href="#" onclick="showPage(${pageNumber})">${pageNumber}</a></td>`
    }
    pageNavigation += '</tr></table>'
  
    containerBody.insertAdjacentHTML("afterend", pageNavigation)
  
    window.showPage = function (pageNumber) {
      const pages = document.querySelectorAll('.page')
      pages.forEach((page) => {
        page.style.display = 'none'
      })
      document.getElementById(`grid${pageNumber}`).style.display = 'flex'
    }
  
    showPage(1)
}
  
fillContainerBody()

let cloth = document.getElementsByClassName("cloth")
for (let i = 0; i < cloth.length; i++) {
    cloth[i].addEventListener("click", function(event) {
        let clickedItemId = event.target.id
        User.changeClothLoad(clickedItemId)
        window.location.href = "../html/cloth.html"
    })
}