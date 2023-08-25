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
    if (User.getUserLogged().pageLoad == "tops"){
        result = `<div id="grid1">
        <div><a href="">
        <img src="../assets/tops/top1.png" alt=""></a></div><div>
        <img src="../assets/tops/top2.png" alt=""></div><div>
        <img src="../assets/tops/top3.png" alt=""></div><div>
        <img src="../assets/tops/top4.png" alt=""></div><div>
        <img src="../assets/tops/top5.png" alt=""></div></div>
        <div id="grid2"><div><a href="">
        <img src="../assets/tops/top6.png" alt=""></a></div><div>
        <img src="../assets/tops/top7.png" alt=""></div><div>
        <img src="../assets/tops/top8.png" alt=""></div><div>
        <img src="../assets/tops/top9.png" alt=""></div><div>
        <img src="../assets/tops/top10.png" alt=""></div></div>
        <div id="grid3"><div>
        <img src="../assets/tops/top11.png" alt=""></div><div>
        <img src="../assets/tops/top12.png" alt=""></div><div>
        <img src="../assets/tops/top13.png" alt=""></div><div>
        <img src="../assets/tops/top14.png" alt=""></div><div>
        <a href="../html/spaceboy.html"><img src="../assets/tops/top15.png" alt=""></a></div></div>`
        containerBody.innerHTML = result
    }else if (User.getUserLogged().pageLoad == "bottoms"){
        result = `bottoms`
        containerBody.innerHTML = result
    }else if (User.getUserLogged().pageLoad == "outerwear"){
        result = `outerwear`
        containerBody.innerHTML = result
    }else if (User.getUserLogged().pageLoad == "shoes"){
        result = `shoes`
        containerBody.innerHTML = result
    }else if (User.getUserLogged().pageLoad == "accessories"){
        result = `accessories`
        containerBody.innerHTML = result
    }else{
        result = `<div id="grid1">
        <div><a href="variety.html">
        <img src="../assets/variety/varietyhs.jpg" alt=""></a></div><div>
        <img src="" alt=""></div><div>
        <img src="" alt=""></div><div>
        <img src="" alt=""></div><div>
        <img src="" alt=""></div></div>
        <div id="grid2"><div><a href="spaceboy.html">
        <img src="" alt=""></a></div><div>
        <img src="" alt=""></div><div>
        <img src="" alt=""></div><div>
        <img src="" alt=""></div><div>
        <img src="" alt=""></div></div>
        <div id="grid3"><div>
        <img src="" alt=""></div><div>
        <img src="" alt=""></div><div>
        <img src="" alt=""></div><div>
        <img src="" alt=""></div><div>
        <img src="" alt=""></div></div>`
        containerBody.innerHTML = result
    }
}

fillContainerBody()