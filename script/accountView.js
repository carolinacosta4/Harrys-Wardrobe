import * as User from "../script/modelUsers.js"

let body = document.getElementById("body")
function renderPage(){
    let code = User.getUserLogged().code
    if (code == 0){
        body.innerHTML = `<div id="profile">
        <div id="info"></div><div>
        <button id="btnEdit">Edit profile</button>
        <button id="btnFavs">Favorites</button>
        <button id="btnLogout">LOGOUT</button></div></div>
        <div id="favorites">
        <h2>Favorites</h2></div>
        <div id="editProfile">
        <h2>Edit profile</h2>
        <div id="editAvatar">
        <p>Avatar</p>
        <i data-bs-toggle="modal" data-bs-target="#editAvatarModal" class="fa-solid fa-square-pen fa-2xl editIcon" style="color: #ece4d3;"></i></div>
        <div id="editUser">
        <p>Username:</p><p id="userUsername"></p>
        <i data-bs-toggle="modal" data-bs-target="#editUsernameModal" class="fa-solid fa-square-pen fa-2xl editIcon" style="color: #ece4d3;"></i></div>
        <div id="editEmail">
        <p>Email:</p><p id="userEmail"></p>
        <i data-bs-toggle="modal" data-bs-target="#editEmailModal" class="fa-solid fa-square-pen fa-2xl editIcon" style="color: #ece4d3;"></i></div>
        <div id="editPassword">
        <p>Password</p>
        <i data-bs-toggle="modal" data-bs-target="#editPasswordModal" class="fa-solid fa-square-pen fa-2xl editIcon" style="color: #ece4d3;"></i></div></div>`
    }else{
        body.innerHTML = `<div id="profile"><div id="info"></div><div>
        <button id="btnEdit">Edit profile</button>
        <button id="btnFavs">Favorites</button>
        <button id="btnManage">Manage</button>
        <button id="btnLogout">LOGOUT</button></div></div>
        <div id="favorites"><h2>Favorites</h2></div>
        <div id="editProfile"><h2>Edit profile</h2>
        <div id="editAvatar">
        <p>Avatar</p>
        <i data-bs-toggle="modal" data-bs-target="#editAvatarModal" class="fa-solid fa-square-pen fa-2xl editIcon"></i></div>
        <div id="editUser">
        <p>Username:</p><p id="userUsername"></p>
        <i data-bs-toggle="modal" data-bs-target="#editUsernameModal" class="fa-solid fa-square-pen fa-2xl editIcon"></i></div>
        <div id="editEmail">
        <p>Email:</p><p id="userEmail"></p>
        <i data-bs-toggle="modal" data-bs-target="#editEmailModal" class="fa-solid fa-square-pen fa-2xl editIcon"></i></div>
        <div id="editPassword">
        <p>Password</p>
        <i data-bs-toggle="modal" data-bs-target="#editPasswordModal" class="fa-solid fa-square-pen fa-2xl editIcon"></i></div></div>
        <div id="manageUsers">
        <h2>Manage Users</h2><div>
        <table id="usersTable" border="1"></table></div></div>`

        let users = User.exportUsers() 
        function renderTable(users){
            let result = ""
            const usersTable = document.getElementById("usersTable")
            result = `<tr><th>Username</th><th>Email</th><th>Role</th><th colspan="3">Actions</th></tr>`
            for(let i = 0; i < users.length; i++){
                if (users[i].code == 1){
                    result += `<tr><td class="borderTable">${users[i].username}</td><td class="borderTable">${users[i].email}</td><td class="borderTable">Admin</td><td><button data-bs-toggle="modal" data-bs-target="#editRoleModal" class="edit" id="${users[i].username}">edit</button></td>`
                }else{
                    result += `<tr><td class="borderTable">${users[i].username}</td><td class="borderTable">${users[i].email}</td><td class="borderTable">User</td><td><button data-bs-toggle="modal" data-bs-target="#editRoleModal" class="edit" id="${users[i].username}">edit</button></td>`
                }
                if (User.isUserBlocked(users[i].username)){
                    result += `<td><button class="unblock" id="${users[i].username}">unblock</button></td><td><button data-bs-toggle="modal" data-bs-target="#removeUserModal" class="remove" id="${users[i].username}">remove</button></td></tr>`
                }else{
                    result += `<td><button class="block" id="${users[i].username}">block</button></td><td><button data-bs-toggle="modal" data-bs-target="#removeUserModal" class="remove" id="${users[i].username}">remove</button></td></tr>`
                }
            }

            usersTable.innerHTML = result
        }

        renderTable(users)

        let userID
        usersTable.addEventListener("click", (e) => {
            if (e.target.classList.contains("edit")){
                userID = e.target.id
            }
        })

        document.getElementById("editProfileForm").addEventListener("submit", (e) => {
            e.preventDefault()
            const newCode = document.getElementById("roleUser").value
            if(newCode != ""){
                User.editCode(userID, newCode)
                renderTable(users)
            }
        })

        usersTable.addEventListener("click", (e) => {
            if (e.target.classList.contains("block")){
                userID = e.target.id
                User.blockUser(userID)
                renderTable(users)
            }
        })
        
        usersTable.addEventListener("click", (e) => {
            if (e.target.classList.contains("unblock")){
                userID = e.target.id
                User.unblockUser(userID)
                renderTable(users)
            }
        })

        usersTable.addEventListener("click", (e) => {
            if (e.target.classList.contains("remove")){
                const userID = e.target.id
                document.getElementById("removeUserForm").addEventListener("submit", () => {
                    User.removeUser(userID)
                    renderTable(users)
                })
            }
        })
    }
}

renderPage()

document.getElementById("btnLogout").addEventListener("click", () => {
    User.logout()
    window.location.href = "../index.html"
})

document.getElementById("info").innerHTML = `<img src=${User.getUserLogged().avatar} id="pfp"><h1>${User.getUserLogged().username}</h1>`

document.getElementById("btnEdit").addEventListener("click", () => {
    document.getElementById("favorites").style.display = "none"
    document.getElementById("editProfile").style.display = "block"
    document.getElementById("btnFavs").style.display = "inline"
    document.getElementById("btnEdit").style.display = "none"
    document.getElementById("userUsername").innerHTML = `${User.getUserLogged().username}`
    document.getElementById("userEmail").innerHTML = `${User.getUserLogged().email}`
    document.getElementById("manageUsers").style.display = "none"
})

document.getElementById("btnFavs").addEventListener("click", () => {
    document.getElementById("favorites").style.display = "block"
    document.getElementById("editProfile").style.display = "none"
    document.getElementById("btnFavs").style.display = "none"
    document.getElementById("btnEdit").style.display = "inline"
    document.getElementById("manageUsers").style.display = "none"
})

document.getElementById("saveNewUser").addEventListener("click", () => {
    let newUser = document.getElementById("newUser").value
    User.editUser(newUser)
})

document.getElementById("saveNewEmail").addEventListener("click", () => {
    let newEmail = document.getElementById("newEmail").value
    User.editEmail(newEmail)
})

document.getElementById("saveNewPassword").addEventListener("click", () => {
    let oldPassword = document.getElementById("oldPassword").value
    let newPassword = document.getElementById("newPassword").value
    User.editPassword(oldPassword, newPassword)
})

document.getElementById("saveNewAvatar").addEventListener("click", () => {
    const selectedAvatar = document.querySelector(`input[name="avatar"]:checked`).value
    User.editAvatar(selectedAvatar)
})

const favoritesGrid = document.getElementById("favorites")
favoritesGrid.innerHTML += `<div id="gridFavorites"></div>`

for (let i = 0; User.getUserLogged().favorites.length > i ; i++){
    let submain = User.getUserLogged().favorites[i]
    let main = submain.replace(/\d+$/, '')
    document.getElementById("gridFavorites").innerHTML += `<img id="${User.getUserLogged().favorites[i]}" class="cloth" src="../assets/${main}/${User.getUserLogged().favorites[i]}.png">`
}

let cloth = document.getElementsByClassName("cloth")
for (let i = 0; i < cloth.length; i++) {
    cloth[i].addEventListener("click", function(event) {
        let clickedItemId = event.target.id
        User.changeClothLoad(clickedItemId)
        window.location.href = "../html/variety.html"
    })
}

document.getElementById("btnManage").addEventListener("click", () => {
    document.getElementById("manageUsers").style.display = "block"
    document.getElementById("editProfile").style.display = "none"
    document.getElementById("favorites").style.display = "none"
})