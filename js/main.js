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

let closeToggle = document.querySelector('nav');
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

let inputClick = document.querySelectorAll('.button-click')

inputClick.forEach(function(btn) {
btn.addEventListener('click', function() {

    this.classList.add('inputClickAdd')

    setTimeout(() => {
        this.classList.remove("inputClickAdd")
    }, 400);
})
});


/*inputClick.addEventListener('click', () => {
    let selectInput = document.querySelector(".row .input");
    selectInput.classList.add('inputClickAdd')

    setTimeout(() => {
        selectInput.classList.remove("inputClickAdd")
    }, 400);
});*/
