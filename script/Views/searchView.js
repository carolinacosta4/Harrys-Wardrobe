import * as User from "../Models/modelUsers.js"

document.getElementById("searchUsers").addEventListener("click", () => {
    location.href = "../../html/search.html"
})

document.getElementById("formSearch").addEventListener("submit", (e) => {
    e.preventDefault()
    let userSearch = document.getElementById("userSearch").value
    let arrayFound = User.findUser(userSearch)

    let tableFoundUsers = document.getElementById("tableFoundUsers")
    
    function renderTableFoundUsers(){
        tableFoundUsers.innerHTML = ""

        let result = ""

        if(arrayFound.length == 0){
            result = "<p>No users found :(</p>"
        }else{
            for(let i = 0; arrayFound.length > i; i++){
                result += `<div class="row foundUserRow userFollow" id="${arrayFound[i].username}">
                <a class="col-md-1" href="../html/account.html"><img class="avatar userFollow" id="${arrayFound[i].username}" src="${arrayFound[i].avatar}" alt="User avatar"></a>
                <a class="col-md-6" id="${arrayFound[i].username}" href="../html/account.html"><p class="userFollow" id="${arrayFound[i].username}">${arrayFound[i].username}</p></a>`
                let userFollowing = User.getUserLogged().following
                if(arrayFound[i].username == User.getUserLogged().username){
                    result += `<div class="own col-md-5"></div></div>`
                }else if(userFollowing.includes(arrayFound[i].username)){
                    result += `<input type="button" class="unfollow following col-md-5" id="${arrayFound[i].username}" value="UNFOLLOW"></input></div>`
                }else{
                    result += `<input type="button" class="follow following col-md-5" id="${arrayFound[i].username}" value="FOLLOW"></input></div>`
                }
                result += `<hr>`
            }
        }

        tableFoundUsers.innerHTML = result
    }

    renderTableFoundUsers()

    let userFollow = document.getElementsByClassName("userFollow")
    for (let i = 0; i < userFollow.length; i++) {
        userFollow[i].addEventListener("click", function(event) {
            let clickedItemId = event.target.id
            User.editAccountLoad(clickedItemId)
        })
    }

    let follow = document.getElementsByClassName("follow")
    for (let i = 0; i < follow.length; i++) {
        follow[i].addEventListener("click", function(event) {
            let clickedItemId = event.target.id
            User.followUser(clickedItemId)
            renderTableFoundUsers()
            updateEventListeners()
        })
    }

    let unfollow = document.getElementsByClassName("unfollow")
    for (let i = 0; i < unfollow.length; i++) {
        unfollow[i].addEventListener("click", function(event) {
            let clickedItemId = event.target.id
            User.unfollowUser(clickedItemId)
            renderTableFoundUsers()
            updateEventListeners()
        })
    }

    function updateEventListeners(){
        let follow = document.getElementsByClassName("follow")
        for (let i = 0; i < follow.length; i++) {
            follow[i].addEventListener("click", function(event) {
                let clickedItemId = event.target.id
                User.followUser(clickedItemId)
                renderTableFoundUsers()
                updateEventListeners()
            })
        }
    
        let unfollow = document.getElementsByClassName("unfollow")
        for (let i = 0; i < unfollow.length; i++) {
            unfollow[i].addEventListener("click", function(event) {
                let clickedItemId = event.target.id
                User.unfollowUser(clickedItemId)
                renderTableFoundUsers()
                updateEventListeners()
            })
        }
    }
})