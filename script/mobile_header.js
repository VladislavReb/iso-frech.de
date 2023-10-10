// Home page mobile header menu.
const menuButton = document.querySelector(".mob_header__dash");
menuButton.addEventListener('click', () => {
    document.querySelector(".mob_header__content").style.animation = 'block 2s forwards';
})

const crossButton = document.querySelector(".mobile__links__cross");
crossButton.addEventListener('click', () =>{
    document.querySelector(".mob_header__content").style.animation = 'blockBack 2s forwards';
})

const mobileLinks = document.querySelectorAll(".mobile__link");
mobileLinks.forEach(elem => {
    elem.addEventListener('click', () => {
        document.querySelector(".mob_header__content").style.animation = 'blockBack 2s forwards';
    })
})