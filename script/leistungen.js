// Show hidden service photo.
document.querySelectorAll('.service__arrow').forEach(elem => {
    elem.addEventListener('click', ({target}) => {
        target.parentElement.nextElementSibling.classList.toggle('active_photo');
        target.parentElement.classList.toggle('rotate__arrow');
        target.stopImmediatePropagation();
    })
})

// Slider library logic.
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
        speed: 500,
        responsive: [
            {
                breakpoint: 1365,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});



