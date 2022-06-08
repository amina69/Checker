let logout = document.querySelector(".logout");
let input = document.querySelectorAll(".input");


function login() {
    window.setTimeout(() => {
        window.open("login.html","_self")
    }, 4000)
}

logout.addEventListener("click", () => {
    window.open("index.html","_self")
})

input.addEventListener("click", () => {
    if (input.value > 0) {
    this.classList.remove("icon")
}})
