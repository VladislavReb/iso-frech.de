// Service photo animation.
function comePhotoBlocks (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {






            document.querySelectorAll('.service__photo__1').forEach(elem => {
                elem.style.animation = 'block 2.5s forwards';
            })
            document.querySelectorAll('.service__photo__2').forEach(elem => {
                elem.style.animation = 'block_2 2.5s forwards';
            })
            observer.unobserve(entry.target);
        }
    });
}

const targetElem = document.querySelector('.service');
const optionsRender = {
    root: null,
    threshold: 0,
};

const observerSecond = new IntersectionObserver(comePhotoBlocks, optionsRender);

observerSecond.observe(targetElem);