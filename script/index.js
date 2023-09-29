// Home page, service hover logic.
const serviceCards = document.querySelectorAll('.ts__service');

serviceCards.forEach((elem) => {
    elem.addEventListener('mouseover', ({target}) => {
        target.querySelectorAll('.active').forEach(elem => elem.style.display = 'block');
    })
    for (let node of elem.children) {
        node.addEventListener('mouseover', ({target}) => {
            elem.querySelectorAll('.active').forEach(elem => elem.style.display = 'block');
        })
    }
})

serviceCards.forEach((elem) => {
    elem.addEventListener('mouseout', ({target}) => {
        document.querySelectorAll('.active').forEach(elem => elem.style.display = 'none');
    })
})



// Home page, photo animation.
function comePhotoBlocks (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.fs__img__1').style.animation = 'block 2.5s forwards';
            document.querySelector('.fs__img__2').style.animation = 'block_2 2.5s forwards';
            observer.unobserve(entry.target);
        }
    });
}

const targetElem = document.querySelector('.fs__img');
const optionsRender = {
    root: null,
    threshold: 0,
};

const observerSecond = new IntersectionObserver(comePhotoBlocks, optionsRender);

observerSecond.observe(targetElem);