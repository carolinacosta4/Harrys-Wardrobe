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

export function initCloth(){
    cloth = localStorage.cloth ? JSON.parse(localStorage.cloth) : [];
}

export function saveCloth(idCloth, clothClass) {
    console.log(idCloth)
    const newCloth = new Cloth (
        idCloth,
        `../assets/${clothClass}/${idCloth}.png`,
        clothClass
    ) 

    if(cloth.find(clot => clot.id == idCloth)){
        alert(`ID = ${idCloth} is already existent.`)
    }else{
        cloth.push(newCloth)
        localStorage.setItem("cloth", JSON.stringify(cloth))
        return newCloth
    }
}

export function getCloth() {
    return JSON.parse(localStorage.getItem("cloth"))
}

// localStorage.clear()