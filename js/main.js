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
    toggleCollapse('navbarSupportedContent', 'hide');
    toggleCollapse('nav-menu', 'hide');
});

const toggleCollapse = (elemId, action = false) => {
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

let navActive = document.querySelectorAll('.active')

navActive.forEach(function(link) {
    link.addEventListener('click', function() {
        this.classList.add('sidenav active')
    })
})

