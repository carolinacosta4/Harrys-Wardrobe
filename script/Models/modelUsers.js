export class Users {
    username = "";
    email = "";
    password = "";
    avatar = "";
    code = 0;
    isBlocked = false;
    pageLoad = "";
    clothLoad = "";
    favorites = [];
    following = [];
    followers = [];
    openAccount = ""

    constructor(username, email, password, avatar, code, isBlocked, pageLoad, clothLoad, favorites, following, followers, openAccount){
        this.username = username
        this.email = email
        this.password = password
        this.avatar = avatar
        this.code = code
        this.isBlocked = isBlocked
        this.pageLoad = pageLoad
        this.clothLoad = clothLoad
        this.favorites = favorites
        this.following = following
        this.followers = followers
        this.openAccount = openAccount
    }
}

export function initUsers(){
    usersHarry = localStorage.usersHarry ? JSON.parse(localStorage.usersHarry) : []
}

let usersHarry = localStorage.usersHarry ? JSON.parse(localStorage.usersHarry) : []

export function userExists(username, email) {
    if (usersHarry.some(user => user.email === email)){
        return "email"
    }
    else if (usersHarry.some(user => user.username === username)){
        return "username"
    }
}

export function checkLogin(usernameToValidate,passwordToValidate){
    if (usersHarry.some(user => user.username === usernameToValidate && user.password === passwordToValidate)){
        return true
    }
}

export function login(usernameToValidate, passwordToValidate){
    const user = usersHarry.find((user) => user.username === usernameToValidate && user.password === passwordToValidate);
    const validationMessage = document.getElementById("validationMessageLogIn")
    if(user.isBlocked){
        validationMessage.textContent = "Your account is blocked."
        validationMessage.style.color = "red"
    }else{
        sessionStorage.setItem("loggedUser", JSON.stringify(user))
        let usersstr = JSON.stringify(usersHarry)
        window.location.href = "../index.html"
    }
}

export function saveUser(username, email, password) {
    const newUser = new Users ( 
        username,
        email,
        password,
        "../assets/avatar1.jpg",
        0,
        false,
        "",
        "",
        [],
        [],
        [],
        ""
    )
    if (userExists(username, email) === "email"){
        validationMessage.textContent = "Email already in use. Try another one!"
        validationMessage.style.color = "red"
    }
    else if (userExists(username, email) === "username"){
        validationMessage.textContent = "This username already exists. Try another one!"
        validationMessage.style.color = "red"
    }
    else {
        usersHarry.push(newUser)
        localStorage.setItem("usersHarry", JSON.stringify(usersHarry))
        validationMessage.textContent = "User successfully created!"
        validationMessage.style.color = "green"
    }   
}

export function isLogged() {
    return sessionStorage.getItem("loggedUser") ? true : false
}
  
export function getUserLogged() {
    return JSON.parse(sessionStorage.getItem("loggedUser"))
}

export function logout() {
    sessionStorage.removeItem("loggedUser")
}

export function editUser(username){
    const validationMessageUser = document.getElementById("validationMessageUser")
    if (usersHarry.some(user => user.username === username)){
        validationMessageUser.textContent = "This username already exists. Try another one!"
        validationMessageUser.style.color = "red"
    }
    else {
        const loggedUser = getUserLogged()
        const updatedUser = new Users(username, loggedUser.email, loggedUser.password, loggedUser.avatar, loggedUser.code, loggedUser.isBlocked, loggedUser.pageLoad, loggedUser.clothLoad, loggedUser.favorites, loggedUser.following, loggedUser.followers, loggedUser.openAccount)
        const index  = usersHarry.findIndex(user => user.username === loggedUser.username)
        usersHarry[index] =  updatedUser
        sessionStorage.setItem("loggedUser", JSON.stringify(updatedUser))
        localStorage.setItem("usersHarry", JSON.stringify(usersHarry))
        location.reload()
    }
}

export function editEmail(email){
    const validationMessageEmail = document.getElementById("validationMessageEmail")
    if (usersHarry.some(user => user.email === email)){
        validationMessageEmail.textContent = "Email already in use. Try another one!"
        validationMessageEmail.style.color = "red"
    }
    else {
        const loggedUser = getUserLogged()
        const updatedUser = new Users(loggedUser.username, email, loggedUser.password, loggedUser.avatar, loggedUser.code, loggedUser.isBlocked, loggedUser.pageLoad, loggedUser.clothLoad, loggedUser.favorites, loggedUser.following, loggedUser.followers, loggedUser.openAccount)
        const index  = usersHarry.findIndex(user => user.username === loggedUser.username)
        usersHarry[index] =  updatedUser
        sessionStorage.setItem("loggedUser", JSON.stringify(updatedUser))
        localStorage.setItem("usersHarry", JSON.stringify(usersHarry))
        location.reload()
    }
}

export function editPassword(oldPassword, newPassword){
    const validationMessagePassword = document.getElementById("validationMessagePassword")
    const loggedUser = getUserLogged()
    if (oldPassword === loggedUser.password){
        const updatedUser = new Users(loggedUser.username, loggedUser.email, newPassword, loggedUser.avatar, loggedUser.code, loggedUser.isBlocked, loggedUser.pageLoad, loggedUser.clothLoad, loggedUser.favorites, loggedUser.following, loggedUser.followers, loggedUser.openAccount)
        const index  = usersHarry.findIndex(user => user.username === loggedUser.username)
        usersHarry[index] =  updatedUser
        sessionStorage.setItem("loggedUser", JSON.stringify(updatedUser))
        localStorage.setItem("usersHarry", JSON.stringify(usersHarry))
        location.reload()
    }else{
        validationMessagePassword.textContent = "Old password incorrect!";
        validationMessagePassword.style.color = "red";
    }
}

export function exportUsers(){
    return usersHarry
}

export function removeUser(userID){
    const index  = usersHarry.findIndex(user => user.username === userID)
    usersHarry.splice(index, 1)
    localStorage.setItem('usersHarry', JSON.stringify(usersHarry))
}

export function isUserBlocked(userID){
    const userFound  = usersHarry.find(user => user.username == userID)
    if (userFound.isBlocked == true){
        return true
    }else{
        return false
    }
}

export function blockUser(userID){
    const block = true
    const user  = usersHarry.find(user => user.username === userID)
    const updatedUser = new Users(user.username, user.email, user.password, user.avatar,user.code, block, user.pageLoad, user.clothLoad, user.favorites, user.following, user.followers, user.openAccount)
    const index  = usersHarry.findIndex(user => user.username === userID)
    usersHarry[index] =  updatedUser
    localStorage.setItem("usersHarry", JSON.stringify(usersHarry))
}

export function unblockUser(userID){
    const block = false
    const user  = usersHarry.find(user => user.username === userID)
    const updatedUser = new Users(user.username, user.email, user.password, user.avatar, user.code, block, user.pageLoad, user.clothLoad, user.favorites, user.following, user.followers, user.openAccount)
    const index  = usersHarry.findIndex(user => user.username === userID)
    usersHarry[index] =  updatedUser
    localStorage.setItem("usersHarry", JSON.stringify(usersHarry))
}

export function exportBlockedUsers(){
    const blockedUsers = JSON.parse(localStorage.getItem("blockedUsers")) || []
    return blockedUsers
}

export function changePageLoad(pageLoad){
    const loggedUser = getUserLogged()
    const updatedUser = new Users(loggedUser.username, loggedUser.email, loggedUser.password, loggedUser.avatar, loggedUser.code, loggedUser.isBlocked, pageLoad, loggedUser.clothLoad, loggedUser.favorites, loggedUser.following, loggedUser.followers, loggedUser.openAccount)
    const index  = usersHarry.findIndex(user => user.username === loggedUser.username)
    usersHarry[index] =  updatedUser
    sessionStorage.setItem("loggedUser", JSON.stringify(updatedUser))
    localStorage.setItem("usersHarry", JSON.stringify(usersHarry))
}

export function changeClothLoad(clothLoad){
    const loggedUser = getUserLogged()
    const updatedUser = new Users(loggedUser.username, loggedUser.email, loggedUser.password, loggedUser.avatar, loggedUser.code, loggedUser.isBlocked, loggedUser.pageLoad, clothLoad, loggedUser.favorites, loggedUser.following, loggedUser.followers, loggedUser.openAccount)
    const index  = usersHarry.findIndex(user => user.username === loggedUser.username)
    usersHarry[index] =  updatedUser
    sessionStorage.setItem("loggedUser", JSON.stringify(updatedUser))
    localStorage.setItem("usersHarry", JSON.stringify(usersHarry))
}

export function addFavorite(clothID){
    const loggedUser = getUserLogged()
    let favorites = loggedUser.favorites
    favorites.push(clothID)
    const updatedUser = new Users(loggedUser.username, loggedUser.email, loggedUser.password, loggedUser.avatar, loggedUser.code, loggedUser.isBlocked, loggedUser.pageLoad, loggedUser.clothLoad, favorites, loggedUser.following, loggedUser.followers, loggedUser.openAccount)
    const index  = usersHarry.findIndex(user => user.username === loggedUser.username)
    usersHarry[index] =  updatedUser
    sessionStorage.setItem("loggedUser", JSON.stringify(updatedUser))
    localStorage.setItem("usersHarry", JSON.stringify(usersHarry))
}

export function deleteFavorite(clothID){
    const loggedUser = getUserLogged()
    let favorites = loggedUser.favorites
    let indexRem = favorites.indexOf(clothID)
    favorites.splice(indexRem, 1)
    const updatedUser = new Users(loggedUser.username, loggedUser.email, loggedUser.password, loggedUser.avatar, loggedUser.code, loggedUser.isBlocked, loggedUser.pageLoad, loggedUser.clothLoad, favorites, loggedUser.following, loggedUser.followers, loggedUser.openAccount)
    const index  = usersHarry.findIndex(user => user.username === loggedUser.username)
    usersHarry[index] =  updatedUser
    sessionStorage.setItem("loggedUser", JSON.stringify(updatedUser))
    localStorage.setItem("usersHarry", JSON.stringify(usersHarry))
}

export function editAvatar(selectedAvatar){
    const loggedUser = getUserLogged()
    const updatedUser = new Users(loggedUser.username, loggedUser.email, loggedUser.password, selectedAvatar, loggedUser.code, loggedUser.isBlocked, loggedUser.pageLoad, loggedUser.clothLoad, loggedUser.favorites, loggedUser.following, loggedUser.followers, loggedUser.openAccount)
    const index  = usersHarry.findIndex(user => user.username === loggedUser.username)
    usersHarry[index] =  updatedUser
    sessionStorage.setItem("loggedUser", JSON.stringify(updatedUser))
    localStorage.setItem("usersHarry", JSON.stringify(usersHarry))
    location.reload()
}

export function editCode(userID, newCode){
    const user  = usersHarry.find(user => user.username === userID)
    const updatedUser = new Users(user.username, user.email, user.password, user.avatar, newCode, user.block, user.pageLoad, user.clothLoad, user.favorites, user.following, user.followers, user.openAccount)
    const index  = usersHarry.findIndex(user => user.username === userID)
    usersHarry[index] =  updatedUser
    localStorage.setItem("usersHarry", JSON.stringify(usersHarry))
}

export function findUser(userID){
    const matchingUsers = usersHarry.filter(user => user.username.includes(userID))
    return matchingUsers
}

export function editAccountLoad(newAccountLoad){
    const loggedUser = getUserLogged()
    const updatedUser = new Users(loggedUser.username, loggedUser.email, loggedUser.password, loggedUser.avatar, loggedUser.code, loggedUser.isBlocked, loggedUser.pageLoad, loggedUser.clothLoad, loggedUser.favorites, loggedUser.following, loggedUser.followers, newAccountLoad)
    const index  = usersHarry.findIndex(user => user.username === loggedUser.username)
    usersHarry[index] =  updatedUser
    sessionStorage.setItem("loggedUser", JSON.stringify(updatedUser))
    localStorage.setItem("usersHarry", JSON.stringify(usersHarry))
    location.reload()
}

export function accountLoad(){
    let userName = getUserLogged().openAccount
    const index = usersHarry.findIndex(user => user.username == userName)
    let user = usersHarry[index]
    return user
}

export function followUser(userID){
    const loggedUser = getUserLogged()
    let following = loggedUser.following
    following.push(userID)
    const updatedUser = new Users(loggedUser.username, loggedUser.email, loggedUser.password, loggedUser.avatar, loggedUser.code, loggedUser.isBlocked, loggedUser.pageLoad, loggedUser.clothLoad, loggedUser.favorites, following, loggedUser.followers, loggedUser.openAccount)
    const index  = usersHarry.findIndex(user => user.username === loggedUser.username)
    usersHarry[index] =  updatedUser
    sessionStorage.setItem("loggedUser", JSON.stringify(updatedUser))
    localStorage.setItem("usersHarry", JSON.stringify(usersHarry))

    let followers = loggedUser.followers
    followers.push(loggedUser.username)
    const user  = usersHarry.find(user => user.username === userID)
    const followedUser = new Users(user.username, user.email, user.password, user.avatar, user.code, user.isBlocked, user.pageLoad, user.clothLoad, user.favorites, user.following, followers, user.newAccountLoad)
    const followedIndex = usersHarry.findIndex(user => user.username === userID)
    usersHarry[followedIndex] = followedUser
    localStorage.setItem("usersHarry", JSON.stringify(usersHarry))
}

export function unfollowUser(userID){
    const loggedUser = getUserLogged()
    let following = loggedUser.following
    let indexRem = following.indexOf(userID)
    following.splice(indexRem, 1)
    const updatedUser = new Users(loggedUser.username, loggedUser.email, loggedUser.password, loggedUser.avatar, loggedUser.code, loggedUser.isBlocked, loggedUser.pageLoad, loggedUser.clothLoad, loggedUser.favorites, following, loggedUser.followers, loggedUser.openAccount)
    const index  = usersHarry.findIndex(user => user.username === loggedUser.username)
    usersHarry[index] =  updatedUser
    sessionStorage.setItem("loggedUser", JSON.stringify(updatedUser))
    localStorage.setItem("usersHarry", JSON.stringify(usersHarry))

    let followers = loggedUser.followers
    let indexRemFollowers = following.indexOf(userID)
    followers.splice(indexRemFollowers, 1)
    const user  = usersHarry.find(user => user.username === userID)
    const followedUser = new Users(user.username, user.email, user.password, user.avatar, user.code, user.isBlocked, user.pageLoad, user.clothLoad, user.favorites, user.following, followers, user.newAccountLoad)
    const followedIndex = usersHarry.findIndex(user => user.username === userID)
    usersHarry[followedIndex] = followedUser
    localStorage.setItem("usersHarry", JSON.stringify(usersHarry))
}

// localStorage.clear()
// sessionStorage.clear()