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
        <div><a>
        <img src="../assets/tops/top1.png" id="top1" alt=""></a></div><div>
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
        result = `<div id="grid1">
        <div><a href="">
        <img src="../assets/bottoms/bottom1.png" alt=""></a></div><div>
        <img src="../assets/bottoms/bottom2.png" alt=""></div><div>
        <img src="../assets/bottoms/bottom3.png" alt=""></div><div>
        <img src="../assets/bottoms/bottom4.png" alt=""></div><div>
        <img src="../assets/bottoms/bottom5.png" alt=""></div></div>
        <div id="grid2"><div><a href="">
        <img src="../assets/bottoms/bottom6.png" alt=""></a></div><div>
        <img src="../assets/bottoms/bottom7.png" alt=""></div><div>
        <img src="../assets/bottoms/bottom8.png" alt=""></div><div>
        <img src="../assets/bottoms/bottom9.png" alt=""></div><div>
        <img src="../assets/bottoms/bottom10.png" alt=""></div></div>
        <div id="grid3"><div>
        <img src="../assets/bottoms/bottom11.png" alt=""></div><div>
        <img src="../assets/bottoms/bottom12.png" alt=""></div><div>
        <img src="../assets/bottoms/bottom13.png" alt=""></div><div>
        <img src="../assets/bottoms/bottom14.png" alt=""></div><div>
        <img src="../assets/bottoms/bottom15.png" alt=""></div></div>`
        containerBody.innerHTML = result
    }else if (User.getUserLogged().pageLoad == "outerwear"){
        result = `<div id="grid1">
        <div><a href="">
        <img src="../assets/outerwear/outerwear1.png" alt=""></a></div><div>
        <img src="../assets/outerwear/outerwear2.png" alt=""></div><div>
        <img src="../assets/outerwear/outerwear3.png" alt=""></div><div>
        <img src="../assets/outerwear/outerwear4.png" alt=""></div><div>
        <img src="../assets/outerwear/outerwear5.png" alt=""></div></div>
        <div id="grid2"><div><a href="">
        <img src="../assets/outerwear/outerwear6.png" alt=""></a></div><div>
        <img src="../assets/outerwear/outerwear7.png" alt=""></div><div>
        <img src="../assets/outerwear/outerwear8.png" alt=""></div><div>
        <img src="../assets/outerwear/outerwear9.png" alt=""></div><div>
        <img src="../assets/outerwear/outerwear10.png" alt=""></div></div>
        <div id="grid3"><div>
        <img src="../assets/outerwear/outerwear11.png" alt=""></div><div>
        <img src="../assets/outerwear/outerwear12.png" alt=""></div><div>
        <img src="../assets/outerwear/outerwear13.png" alt=""></div><div>
        <img src="../assets/outerwear/outerwear14.png" alt=""></div><div>
        <img src="../assets/outerwear/outerwear15.png" alt=""></div></div>`
        containerBody.innerHTML = result
    }else if (User.getUserLogged().pageLoad == "shoes"){
        result = `<div id="grid1">
        <div><a href="">
        <img src="../assets/shoes/shoes1.png" alt=""></a></div><div>
        <img src="../assets/shoes/shoes2.png" alt=""></div><div>
        <img src="../assets/shoes/shoes3.png" alt=""></div><div>
        <img src="../assets/shoes/shoes4.png" alt=""></div><div>
        <img src="../assets/shoes/shoes5.png" alt=""></div></div>
        <div id="grid2"><div><a href="">
        <img src="../assets/shoes/shoes6.png" alt=""></a></div><div>
        <img src="../assets/shoes/shoes7.png" alt=""></div><div>
        <img src="../assets/shoes/shoes8.png" alt=""></div><div>
        <img src="../assets/shoes/shoes9.png" alt=""></div><div>
        <img src="../assets/shoes/shoes10.png" alt=""></div></div>
        <div id="grid3"><div>
        <img src="../assets/shoes/shoes11.png" alt=""></div><div>
        <img src="../assets/shoes/shoes12.png" alt=""></div><div>
        <img src="../assets/shoes/shoes13.png" alt=""></div><div>
        <img src="../assets/shoes/shoes14.png" alt=""></div><div>
        <img src="../assets/shoes/shoes15.png" alt=""></div></div>`
        containerBody.innerHTML = result
    }else if (User.getUserLogged().pageLoad == "accessories"){
        result = `<div id="grid1">
        <div><a href="">
        <img src="../assets/accessories/accessories1.png" alt=""></a></div><div>
        <img src="../assets/accessories/accessories2.png" alt=""></div><div>
        <img src="../assets/accessories/accessories3.png" alt=""></div><div>
        <img src="../assets/accessories/accessories4.png" alt=""></div><div>
        <img src="../assets/accessories/accessories5.png" alt=""></div></div>
        <div id="grid2"><div><a href="">
        <img src="../assets/accessories/accessories6.png" alt=""></a></div><div>
        <img src="../assets/accessories/accessories7.png" alt=""></div><div>
        <img src="../assets/accessories/accessories8.png" alt=""></div><div>
        <img src="../assets/accessories/accessories9.png" alt=""></div><div>
        <img src="../assets/accessories/accessories10.png" alt=""></div></div>
        <div id="grid3"><div>
        <img src="../assets/accessories/accessories11.png" alt=""></div><div>
        <img src="../assets/accessories/accessories12.png" alt=""></div><div>
        <img src="../assets/accessories/accessories13.png" alt=""></div><div>
        <img src="../assets/accessories/accessories14.png" alt=""></div><div>
        <img src="../assets/accessories/accessories15.png" alt=""></div></div>`
        containerBody.innerHTML = result
    }else{
        result = `<div id="grid1">
        <div><a href="variety.html">
        <img src="../assets/outfits/outfit1.jpg" alt=""></a></div><div>
        <img src="../assets/outfits/outfit2.jpeg" alt=""></div><div>
        <img src="../assets/outfits/outfit3.jpg" alt=""></div><div>
        <img src="../assets/outfits/outfit4.jpg" alt=""></div><div>
        <img src="../assets/outfits/outfit5.jpg" alt=""></div></div>
        <div id="grid2"><div><a href="spaceboy.html">
        <img src="../assets/outfits/outfit6.jpg" alt=""></a></div><div>
        <img src="../assets/outfits/outfit7.jpg" alt=""></div><div>
        <img src="../assets/outfits/outfit8.jpg" alt=""></div><div>
        <img src="../assets/outfits/outfit9.jpg" alt=""></div><div>
        <img src="../assets/outfits/outfit10.jpg" alt=""></div></div>
        <div id="grid3"><div>
        <img src="../assets/outfits/outfit11.jpg" alt=""></div><div>
        <img src="../assets/outfits/outfit12.jpg" alt=""></div><div>
        <img src="../assets/outfits/outfit13.jpg" alt=""></div><div>
        <img src="../assets/outfits/outfit14.jpg" alt=""></div><div>
        <img src="../assets/outfits/outfit15.jpg" alt=""></div></div>`
        containerBody.innerHTML = result
    }
}

fillContainerBody()