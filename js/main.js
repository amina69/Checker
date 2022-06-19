let logout = document.querySelector(".logout");


function login() {
    window.setTimeout(() => {
        window.open("login.html","_self")
    }, 2000)
}

logout.addEventListener("click", () => {
    window.open("logout.html","_self");
    window.close()
})

