// Photo animation.
function comePhotoBoss (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.boss_1').style.animation = 'appear 1s forwards';
            document.querySelector('.boss_2').style.animation = 'appearFromRight 1.5s forwards';
            document.querySelector('.boss_3').style.animation = 'appearFromLeft 1.5s forwards';
            observer.unobserve(entry.target);
        }
    });
}

function comePhotoOffice (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.sec__office__item').forEach(elem => {
                elem.style.animation = 'appear 2s forwards';
            })
            observer.unobserve(entry.target);
        }
    });
}

function comePhotoFiliale (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.sec__filiale__item').forEach(elem => {
                elem.style.animation = 'appear 2s forwards';
            })
            observer.unobserve(entry.target);
        }
    });
}

const targetElemBoss = document.querySelector('.sec__boss');
const targetElemOffice = document.querySelector('.sec__office');
const targetElemFiliale = document.querySelector('.sec__filiale');

const optionsRender = {
    root: null,
    threshold: 1,
};

const optionsRender2 = {
    root: null,
    threshold: 0.5,
};

const observerSecond = new IntersectionObserver(comePhotoBoss, optionsRender);
const observerSecond2 = new IntersectionObserver(comePhotoOffice, optionsRender2);
const observerSecond3 = new IntersectionObserver(comePhotoFiliale, optionsRender2);

observerSecond.observe(targetElemBoss);
observerSecond2.observe(targetElemOffice);
observerSecond3.observe(targetElemFiliale);