// Main page, service hover logic.
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