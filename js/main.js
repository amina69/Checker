function block() {
    if (window.screen.width > 768) {
        document.querySelector('.js-navbar').style.display = 'block';
    }
};

function login() {
    window.setTimeout(() => {
        window.open("login.html","_self")
    }, 3000)
}

let closeToggle = document.querySelector("body");
closeToggle.addEventListener("click", () => {
    toggleCallapse('navbarSupportedContent', 'hide');
    toggleCallapse('nav-menu', 'hide');
});

const toggleCallapse = (elemId, action = false) => {
    let elem = document.getElementById(elemId);
    switch (action) {
        case 'hide':
            $("#" + elemId).collapse('hide');
            break;
    
        default:
            $("#" + elemId).collapse('toggle');
            break;
    }
}
