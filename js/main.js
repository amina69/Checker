function login() {
    window.setTimeout(() => {
        window.open("login.html","_self")
    }, 2000)
}

window.onload = function() {
    if (window.screen.width > 768) {
        document.querySelector('.js-navbar').style.display = 'block';
    }
};

let infoButton = document.querySelector(".button-2")

infoButton.addEventListener("click", () => {
    if (window.screen.width > 768) {
        document.querySelector('.js-navbar').style.display = 'block';
    }
}

)

  

