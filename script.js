const sections = document.querySelectorAll('.section_selector');
const nav = document.querySelector('nav');
const homeNav = document.querySelector('.home_');
const workNav = document.querySelector('.work_');
const contactNav = document.querySelector('.contact_');
const image =document.querySelectorAll('.img_split');

const wait = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount));

let observer = new IntersectionObserver(navCheck, {
    threshold: 0.7
});

function navCheck(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.nodeName == 'MAIN') {
            homeNav.classList.add('red');
        } else if (entry.isIntersecting && entry.target.nodeName == 'DIV') {
            workNav.classList.add('red');
            image.forEach(image => image.classList.add('appear'));

        } else if (entry.isIntersecting && entry.target.nodeName == 'FOOTER') {
            contactNav.classList.add('red')

        } else {
            homeNav.classList.remove('red');
            workNav.classList.remove('red');
            contactNav.classList.remove('red');
        }
    })
}

sections.forEach(section => {
    observer.observe(section)
})