export class Cloth {
    id = ""
    src = ""
    clothClass = ""

    constructor(id, src, clothClass) {
        this.id = id
        this.src = src
        this.clothClass = clothClass
    }
}

let cloth = localStorage.getItem("cloth")
if (!cloth) {
    cloth = [
        new Cloth("outfit1", "../assets/outfit/outfit1.png", "outfit"),
        new Cloth("outfit2", "../assets/outfit/outfit2.png", "outfit"),
        new Cloth("outfit3", "../assets/outfit/outfit3.png", "outfit"),
        new Cloth("outfit4", "../assets/outfit/outfit4.png", "outfit"),
        new Cloth("outfit5", "../assets/outfit/outfit5.png", "outfit"),
        new Cloth("outfit6", "../assets/outfit/outfit6.png", "outfit"),
        new Cloth("outfit7", "../assets/outfit/outfit7.png", "outfit"),
        new Cloth("outfit8", "../assets/outfit/outfit8.png", "outfit"),
        new Cloth("outfit9", "../assets/outfit/outfit9.png", "outfit"),
        new Cloth("outfit10", "../assets/outfit/outfit10.png", "outfit"),
        new Cloth("outfit11", "../assets/outfit/outfit11.png", "outfit"),
        new Cloth("outfit12", "../assets/outfit/outfit12.png", "outfit"),
        new Cloth("outfit13", "../assets/outfit/outfit13.png", "outfit"),
        new Cloth("outfit14", "../assets/outfit/outfit14.png", "outfit"),
        new Cloth("outfit15", "../assets/outfit/outfit15.png", "outfit"),
        new Cloth("bottoms1", "../assets/bottoms/bottoms1.png", "bottoms"),
        new Cloth("bottoms2", "../assets/bottoms/bottoms2.png", "bottoms"),
        new Cloth("bottoms3", "../assets/bottoms/bottoms3.png", "bottoms"),
        new Cloth("bottoms4", "../assets/bottoms/bottoms4.png", "bottoms"),
        new Cloth("bottoms5", "../assets/bottoms/bottoms5.png", "bottoms"),
        new Cloth("bottoms6", "../assets/bottoms/bottoms6.png", "bottoms"),
        new Cloth("bottoms7", "../assets/bottoms/bottoms7.png", "bottoms"),
        new Cloth("bottoms8", "../assets/bottoms/bottoms8.png", "bottoms"),
        new Cloth("bottoms9", "../assets/bottoms/bottoms9.png", "bottoms"),
        new Cloth("bottoms10", "../assets/bottoms/bottoms10.png", "bottoms"),
        new Cloth("bottoms11", "../assets/bottoms/bottoms11.png", "bottoms"),
        new Cloth("bottoms12", "../assets/bottoms/bottoms12.png", "bottoms"),
        new Cloth("bottoms13", "../assets/bottoms/bottoms13.png", "bottoms"),
        new Cloth("bottoms14", "../assets/bottoms/bottoms14.png", "bottoms"),
        new Cloth("bottoms15", "../assets/bottoms/bottoms15.png", "bottoms"),
        new Cloth("accessories1", "../assets/accessories/accessories1.png", "accessories"),
        new Cloth("accessories2", "../assets/accessories/accessories2.png", "accessories"),
        new Cloth("accessories3", "../assets/accessories/accessories3.png", "accessories"),
        new Cloth("accessories4", "../assets/accessories/accessories4.png", "accessories"),
        new Cloth("accessories5", "../assets/accessories/accessories5.png", "accessories"),
        new Cloth("accessories6", "../assets/accessories/accessories6.png", "accessories"),
        new Cloth("accessories7", "../assets/accessories/accessories7.png", "accessories"),
        new Cloth("accessories8", "../assets/accessories/accessories8.png", "accessories"),
        new Cloth("accessories9", "../assets/accessories/accessories9.png", "accessories"),
        new Cloth("accessories10", "../assets/accessories/accessories10.png", "accessories"),
        new Cloth("accessories11", "../assets/accessories/accessories11.png", "accessories"),
        new Cloth("accessories12", "../assets/accessories/accessories12.png", "accessories"),
        new Cloth("accessories13", "../assets/accessories/accessories13.png", "accessories"),
        new Cloth("accessories14", "../assets/accessories/accessories14.png", "accessories"),
        new Cloth("accessories15", "../assets/accessories/accessories15.png", "accessories"),
        new Cloth("outerwear1", "../assets/outerwear/outerwear1.png", "outerwear"),
        new Cloth("outerwear2", "../assets/outerwear/outerwear2.png", "outerwear"),
        new Cloth("outerwear3", "../assets/outerwear/outerwear3.png", "outerwear"),
        new Cloth("outerwear4", "../assets/outerwear/outerwear4.png", "outerwear"),
        new Cloth("outerwear5", "../assets/outerwear/outerwear5.png", "outerwear"),
        new Cloth("outerwear6", "../assets/outerwear/outerwear6.png", "outerwear"),
        new Cloth("outerwear7", "../assets/outerwear/outerwear7.png", "outerwear"),
        new Cloth("outerwear8", "../assets/outerwear/outerwear8.png", "outerwear"),
        new Cloth("outerwear9", "../assets/outerwear/outerwear9.png", "outerwear"),
        new Cloth("outerwear10", "../assets/outerwear/outerwear10.png", "outerwear"),
        new Cloth("outerwear11", "../assets/outerwear/outerwear11.png", "outerwear"),
        new Cloth("outerwear12", "../assets/outerwear/outerwear12.png", "outerwear"),
        new Cloth("outerwear13", "../assets/outerwear/outerwear13.png", "outerwear"),
        new Cloth("outerwear14", "../assets/outerwear/outerwear14.png", "outerwear"),
        new Cloth("outerwear15", "../assets/outerwear/outerwear15.png", "outerwear"),
        new Cloth("tops1", "../assets/tops/tops1.png", "tops"),
        new Cloth("tops2", "../assets/tops/tops2.png", "tops"),
        new Cloth("tops3", "../assets/tops/tops3.png", "tops"),
        new Cloth("tops4", "../assets/tops/tops4.png", "tops"),
        new Cloth("tops5", "../assets/tops/tops5.png", "tops"),
        new Cloth("tops6", "../assets/tops/tops6.png", "tops"),
        new Cloth("tops7", "../assets/tops/tops7.png", "tops"),
        new Cloth("tops8", "../assets/tops/tops8.png", "tops"),
        new Cloth("tops9", "../assets/tops/tops9.png", "tops"),
        new Cloth("tops10", "../assets/tops/tops10.png", "tops"),
        new Cloth("tops11", "../assets/tops/tops11.png", "tops"),
        new Cloth("tops12", "../assets/tops/tops12.png", "tops"),
        new Cloth("tops13", "../assets/tops/tops13.png", "tops"),
        new Cloth("tops14", "../assets/tops/tops14.png", "tops"),
        new Cloth("tops15", "../assets/tops/tops15.png", "tops"),
        new Cloth("shoes1", "../assets/shoes/shoes1.png", "shoes"),
        new Cloth("shoes2", "../assets/shoes/shoes2.png", "shoes"),
        new Cloth("shoes3", "../assets/shoes/shoes3.png", "shoes"),
        new Cloth("shoes4", "../assets/shoes/shoes4.png", "shoes"),
        new Cloth("shoes5", "../assets/shoes/shoes5.png", "shoes"),
        new Cloth("shoes6", "../assets/shoes/shoes6.png", "shoes"),
        new Cloth("shoes7", "../assets/shoes/shoes7.png", "shoes"),
        new Cloth("shoes8", "../assets/shoes/shoes8.png", "shoes"),
        new Cloth("shoes9", "../assets/shoes/shoes9.png", "shoes"),
        new Cloth("shoes10", "../assets/shoes/shoes10.png", "shoes"),
        new Cloth("shoes11", "../assets/shoes/shoes11.png", "shoes"),
        new Cloth("shoes12", "../assets/shoes/shoes12.png", "shoes"),
        new Cloth("shoes13", "../assets/shoes/shoes13.png", "shoes"),
        new Cloth("shoes14", "../assets/shoes/shoes14.png", "shoes"),
        new Cloth("shoes15", "../assets/shoes/shoes15.png", "shoes"),
    ]
    localStorage.setItem("cloth", JSON.stringify(cloth))
} else {
    cloth = JSON.parse(cloth)
}

export function initCloth(){
    cloth = localStorage.usersHarry ? JSON.parse(localStorage.cloth) : [];
}

export function saveCloth(idCloth, clothClass) {
    console.log(idCloth)
    const newCloth = new Cloth (
        idCloth,
        `../assets/${clothClass}/${idCloth}.png`,
        clothClass
    ) 
    cloth.push(newCloth)
    localStorage.setItem("cloth", JSON.stringify(cloth))
    return newCloth
}

export function getCloth() {
    return JSON.parse(localStorage.getItem("cloth"))
}

// localStorage.clear()