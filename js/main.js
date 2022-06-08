let logout = document.querySelector(".logout");
let input = document.querySelector(".input");


function login() {
    window.setTimeout(() => {
        window.open("login.html","_self")
    }, 4000)
}

logout.addEventListener("click", () => {
    window.open("index.html","_self")
})

input.addEventListener("click", () => {
    alert("work")
})

