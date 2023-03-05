const loginform = document.getElementById('login')
const loginInput = document.querySelector("#login input");
const loginBtn = document.querySelector('#login button');
const welcomemsg = document.querySelector("h3")
const username_key = "username"


function onLoginBtn(e) {
    e.preventDefault()
    loginform.classList.add("hidden");
    const loginId = loginInput.value;
    localStorage.setItem(username_key, loginId);
    paintingGreeting(loginId);
} 

function paintingGreeting(username) {
    welcomemsg.innerText = `환영합니다. ${username} 님`;
    welcomemsg.classList.remove("hidden");
}

const savedusername = localStorage.getItem(username_key);

if (savedusername === null) {
    loginform.classList.remove("hidden");
    loginform.addEventListener("submit", onLoginBtn);
} else {
    paintingGreeting(savedusername);
}

loginBtn.addEventListener('click', onLoginBtn)