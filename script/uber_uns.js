// Text animation on family photo.
function comePhotoBlocks (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.ts__img__text').style.animation = 'magic_txt 4s forwards';
            observer.unobserve(entry.target);
        }
    });
}

const targetElem = document.querySelector('.ts__img__photo');
const optionsRender = {
    root: null,
    threshold: 0,
};

const observerSecond = new IntersectionObserver(comePhotoBlocks, optionsRender);

observerSecond.observe(targetElem);