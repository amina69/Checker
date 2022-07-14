function block() {
    if (window.screen.width > 768) {
        document.querySelector('.js-navbar').style.display = 'block';
    }
};

function login() {
    window.setTimeout(() => {
        window.open("login.html", "_self")
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

inputClick.forEach(function (btn) {
    btn.addEventListener('click', function () {

        this.classList.add('inputClickAdd')

        setTimeout(() => {
            this.classList.remove("inputClickAdd")
        }, 400);
    })
});

let eventClick = document.querySelectorAll('.event')
let eventP = document.querySelectorAll('.event-p');

eventClick.forEach(function (evt) {
    evt.addEventListener('click', function () {
        eventP.forEach(function (ev) {
        
            ev        .classList.add('active')
                   
        })
           
})
})

const setActiveLink = () => {
    let currentUrl = window.location.pathname;
    let firstChar = currentUrl.substr(0, 1);
    if (firstChar === '/') {
        currentUrl = currentUrl.substring(1);
    }
    console.log('here ---', currentUrl);
    let a = document.querySelectorAll('a[href="' + currentUrl + '"]');
    console.log({ a });

}
setActiveLink();