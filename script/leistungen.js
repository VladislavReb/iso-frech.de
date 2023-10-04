// Show hidden service photo.
document.querySelectorAll('.service__arrow').forEach(elem => {
    elem.addEventListener('click', ({target}) => {
        target.parentElement.nextElementSibling.classList.toggle('active_photo');
        target.classList.toggle('rotate__arrow');
        target.stopImmediatePropagation();
    })
})

$(document).ready(function(){
    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: 0,
        nextArrow: '.array',
        prevArrow: '.array_2',
        variableWidth: true,
    });
});



