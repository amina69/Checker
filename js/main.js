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

let closeToggle = document.querySelector('.nav-background');

closeToggle.addEventListener("click", () => {
    toggleCollapse('navbarSupportedContent', 'hide');
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

let closeToggleNav = document.querySelector('nav');

closeToggleNav.addEventListener("click", () => {
    toggleCollapseNav('nav-menu', 'hide');
});

const toggleCollapseNav = (elemIdNav, actionNav = false) => {
    let elemNav = document.getElementById(elemIdNav);
    switch (actionNav) {
        case 'hide':
            $("#" + elemIdNav).collapse('hide');
            break;
    
        default:
            $("#" + elemIdNav).collapse('toggle');
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
        let activePage = document.querySelectorAll('.activePage').getAttribute('href')
        let home = document.querySelector('.homePage')
        
        switch (activePage) {
            case 'homePage.html':
                this.classList.add('sidenav active')
                break;
            case 'events.html':
                this.classList.add('sidenav active')
                break;
            case 'profile.html':
                this.classList.add('sidenav active')
                break;
            case 'programme.html':
                this.classList.add('sidenav active')
                break;
            case 'services.html':
                this.classList.add('sidenav active')
                break;
            case 'about.html':
                this.classList.add('sidenav active')
                break;
        
            default :
                console.log(this)
                break;
        }
    })
})

