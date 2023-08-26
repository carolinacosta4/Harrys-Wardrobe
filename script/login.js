import * as User from "./modelUsers.js"

let loginBtnHome = document.getElementById("loginBtnHome")
loginBtnHome.addEventListener("click", function(){
    let containerLogin = document.getElementById("containerLogin")
    containerLogin.style.display = "grid"

    let containerHarrysHouse = document.getElementById("containerHarrysHouse")
    containerHarrysHouse.style.display = "none"
})

let signUpBtnHome = document.getElementById("signUpBtnHome")
signUpBtnHome.addEventListener("click", function(){
    let containerSignUp = document.getElementById("containerSignUp")
    containerSignUp.style.display = "grid"

    let containerHarrysHouse = document.getElementById("containerHarrysHouse")
    containerHarrysHouse.style.display = "none"
})

let smallerDevicesLogIn = document.getElementById("smallerDevicesLogIn")
smallerDevicesLogIn.addEventListener("click", function(){
    let containerLogin = document.getElementById("containerLogin")
    containerLogin.style.display = "grid"

    let containerSignUp = document.getElementById("containerSignUp")
    containerSignUp.style.display = "none"
})

let smallerDevicesSignUp = document.getElementById("smallerDevicesSignUp")
smallerDevicesSignUp.addEventListener("click", function(){
    let containerSignUp = document.getElementById("containerSignUp")
    containerSignUp.style.display = "grid"

    let containerLogin = document.getElementById("containerLogin")
    containerLogin.style.display = "none"
})

document.getElementById("signUpBtn").addEventListener("click", function(e){
    e.preventDefault()
    let usernameInputSignUp = document.getElementById("usernameInputSignUp").value
    let emailInputSignUp = document.getElementById("emailInputSignUp").value
    let passwordInputSignUp = document.getElementById("passwordInputSignUp").value

    if (usernameInputSignUp === "" || emailInputSignUp === "" || passwordInputSignUp === ""){
		const message = document.getElementById("validationMessage")
        message.textContent = "Please, fill all the fields."
		message.style.color = "red"
	} else {
		User.saveUser(usernameInputSignUp, emailInputSignUp, passwordInputSignUp)
	}

})

document.getElementById("loginBtn").addEventListener("click", function(event){
	event.preventDefault()
	let usernameToValidate = document.getElementById("usernameInputLogin").value
	let passwordToValidate = document.getElementById("passwordInputLogin").value

    if (usernameToValidate === "" || passwordToValidate === ""){
		const message = document.getElementById("validationMessageLogIn")
        message.textContent = "Please, fill all the fields."
		message.style.color = "red"
	}
	else if (User.checkLogin(usernameToValidate, passwordToValidate)) {
        User.login(usernameToValidate, passwordToValidate)
    } else {
		const message = document.getElementById("validationMessageLogIn");
        message.textContent = "Log in failed. Try again."
		message.style.color = "red"
    }
})