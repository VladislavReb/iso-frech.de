// Show hidden service photo.
document.querySelectorAll('.service__arrow').forEach(elem => {
    elem.addEventListener('click', ({target}) => {
        target.parentElement.nextElementSibling.classList.toggle('active_photo');
        target.classList.toggle('rotate__arrow');
        target.stopImmediatePropagation();
    })
})


// Referenzen carousel.
const boxServices = document.querySelector('.image_slider');

const nextButton = document.querySelector('.array');
nextButton.addEventListener("click", () => {
    return boxServices.scrollBy(425, 0);
});

const prevButton = document.querySelector('.array_2');
prevButton.addEventListener("click", () => {
    return boxServices.scrollBy(-425, 0);
});