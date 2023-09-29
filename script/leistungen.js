// Service photo animation.
const optionsRender = {
    root: null,
    threshold: 0,
};

//1. wärmeschutz
function comePhotoWarm (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.wärmeschutz_1').style.animation = 'block 2.5s forwards';
            document.querySelector('.wärmeschutz_2').style.animation = 'block_2 2.5s forwards';
            observer.unobserve(entry.target);
        }
    });
}

const targetElem = document.getElementById('wärmeschutz');
const observerSecond = new IntersectionObserver(comePhotoWarm, optionsRender);

observerSecond.observe(targetElem);

//2. kälteschutz
function comePhotoKalt (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.kälteschutz_1').style.animation = 'block 2.5s forwards';
            document.querySelector('.kälteschutz_2').style.animation = 'block_2 2.5s forwards';
            observer.unobserve(entry.target);
        }
    });
}

const targetElemKalt = document.getElementById('kälteschutz');
const observerSecondKalt = new IntersectionObserver(comePhotoKalt, optionsRender);

observerSecondKalt.observe(targetElemKalt);

//3. schallschutz
function comePhotoSchall (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.schallschutz_1').style.animation = 'block 2.5s forwards';
            document.querySelector('.schallschutz_2').style.animation = 'block_2 2.5s forwards';
            observer.unobserve(entry.target);
        }
    });
}

const targetElemSchall = document.getElementById('schallschutz');
const observerSecondSchall = new IntersectionObserver(comePhotoSchall, optionsRender);

observerSecondSchall.observe(targetElemSchall);

//4.
function comePhotoBrand (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.brandschutzauflagen_1').style.animation = 'block 2.5s forwards';
            document.querySelector('.brandschutzauflagen_2').style.animation = 'block_2 2.5s forwards';
            observer.unobserve(entry.target);
        }
    });
}

const targetElemBrand = document.getElementById('brandschutzauflagen');
const observerSecondBrand = new IntersectionObserver(comePhotoBrand, optionsRender);

observerSecondBrand.observe(targetElemBrand);