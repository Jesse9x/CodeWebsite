
/* Navbar Javascript */
const navLinks = document.querySelectorAll(".nav-link")

navLinks.forEach((navLink, index) => {
    navLink.onclick = function() {
        document.querySelector(".nav-link.active").classList.remove("active");

        this.classList.add("active"); 
    }
})


/* Slider Animate Javscript */

window.addEventListener("load", function() {
    const slider = document.querySelector(".slider");

    const sliderContainer = document.querySelector(".slider-container");

    const sliderItem = document.querySelectorAll(".slider-item");

    const sliderImage = document.querySelector(".slider-image");

    const nextButton = document.querySelector("#nextButton");

    const prevButton = document.querySelector("#prevButton");

    const sliderItemWidth = sliderItem[0].offsetWidth;

    const sliderLenght = sliderItem.length;

    let positonX = 0;

    index = 0;

    nextButton.addEventListener("click", function() {
        changeSlider(1);
    })

    prevButton.addEventListener("click", function() {
        changeSlider(-1);
    })

    function changeSlider(direction) {
        if (direction == 1) {
            if (index >= sliderLenght - 1) {
                return;
            }
            positonX = positonX - sliderItemWidth;
            sliderImage.style = `transform: translateX(${positonX}px)`;
            index++;
        } 
        else if (direction == -1) {
            if (index <= 0) {
                index = 0;
                return;
            }
            positonX = positonX + sliderItemWidth;
            sliderImage.style = `transform: translateX(${positonX}px)`;
            index--;
        }
    }
});


/* Javascript Navbar Mobile Responsive */

const navToggle = document.querySelector(".nav-toggle")

let navMobileClose = document.querySelector(".nav-mobile-close")

let navMobile = document.querySelector(".nav-mobile")

let navOverlay = document.querySelector(".nav-overlay")

navToggle.addEventListener("click", function() {
    navMobile.style.transform = "translateX(0)";
    navOverlay.style.display = "block";
    navMobileClose.style.display = "block";
})

navMobileClose.addEventListener("click", function() {
    navMobile.style.transform = "translateX(-100%)";
    navOverlay.style.display = "none";
    navMobileClose.style.display = "none";
    searchMenu.style.display = "none";
    formLogin.style.display = "none";
})

let navItem = document.querySelectorAll('#nav .nav-mobile li a[href*="#"]')

let subNavMobile = document.querySelector(".sub-nav-mobile")

const arrowMobile = document.querySelector(".arrow-mobile")

let arrow = document.querySelector(".fa-chevron-down")

openSubMenu = () => {
    subNavMobile.style.display = "block";
}

arrowMobile.addEventListener("click", openSubMenu);

/* Menu Javascript */
const menuLists = document.querySelectorAll(".main-menu-list")

let menuProducts = document.querySelectorAll(".menu-product")

let list2 = document.getElementById("list2");

menuLists.forEach((menuList, index) => {
    let menuProduct = menuProducts[index]

    menuList.onclick = function() {

        document.querySelector(".main-menu-list.active").classList.remove("active"); 

        document.querySelector(".menu-product.actives").classList.remove("actives");

        this.classList.add("active");
        
        menuProduct.classList.add("actives");
    }
})

const searchIcon = document.querySelector('#search-icon-navbar')

let searchMenu = document.querySelector('.search-menu-navbar')

searchIcon.addEventListener('click', function() {
    navOverlay.style.display = "block";
    navMobileClose.style.right = "-50px";
    navMobileClose.style.display = "block";
    searchMenu.style.display = "block";
})

/* Validator Form Login */
const formLogin = document.querySelector('.form-login')

const formLoginAdmin = document.querySelector('.form-login-admin')

let userName = document.getElementById('username')

let password = document.getElementById('password')

let buttonSubmit = document.getElementById('submit')

function blurInput(input, message) {
    let parent = input.parentElement
    let inputs = parent.querySelector('small')
    let valueInput = input.value;

    if (valueInput == "") {
        inputs.textContent = message;
    } else if (valueInput != "") {
        inputs.textContent = ""
    }
}

function clickInput(input, password) {
    inputValue('Please enter your account')
    passwordValue('Please enter a password')
}

function inputValue(message) {
    let parent = userName.parentElement
    let inputs = parent.querySelector('small')
    let valueInput = userName.value;

    if (valueInput == "") {
        inputs.textContent = message
    }
}

function passwordValue(message) {
    let parent = password.parentElement
    let inputs = parent.querySelector('small')
    let valuePassword = password.value;

    if (valuePassword == "") {
        inputs.textContent = message
    }
}

userName.addEventListener("blur", function() {
    blurInput(userName, 'Please enter your account')
});

password.addEventListener("blur", function() {
    blurInput(password, 'Please enter a password')
})

buttonSubmit.addEventListener("click", function() {
    clickInput(inputValue, passwordValue)
})

formLoginAdmin.addEventListener("click", function() {
    formLogin.style.display = "block";
    navMobileClose.style.display = "block";
})