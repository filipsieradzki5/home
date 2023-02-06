const sections = document.querySelectorAll('.section_selector');
const nav = document.querySelector('nav');
const homeNav = document.querySelector('.home_');
const workNav = document.querySelector('.work_');
const contactNav = document.querySelector('.contact_');
const aboutNav = document.querySelector('.about_');
const image =document.querySelectorAll('.img_split');
const path = document.querySelector('path')

const wait = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount));

let observer = new IntersectionObserver(navCheck, {
    threshold: 0.2
});

function navCheck(entries) {
    entries.forEach(entry => {
        
        if (entry.isIntersecting && entry.target.classList.value.includes('home')) {
            homeNav.classList.add('red');
            console.log(entry.target.classList[0])
        } else if (entry.isIntersecting && entry.target.classList.value.includes('about')) {
            aboutNav.classList.add('red')

        } else if (entry.isIntersecting && entry.target.classList.value.includes('work')) {
            workNav.classList.add('red');
            image.forEach(image => image.classList.add('appear'));
            
        } else if (entry.isIntersecting && entry.target.classList.value.includes('contact')) {
            contactNav.classList.add('red')
            console.log(entry.target.value)
            
        } else {
            homeNav.classList.remove('red');
            workNav.classList.remove('red');
            contactNav.classList.remove('red');
            aboutNav.classList.remove('red');
        }
    })
}

sections.forEach(section => {
    observer.observe(section)
})

// line animation


// let pathLength = path.getTotalLength()
// console.dir(path)

// path.style.strokeDasharray = pathLength + ' ' + pathLength;

// path.style.strokeDashoffset = pathLength;

// console.log(pathLength)

// window.addEventListener('scroll',() => {
//     let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
//     let drawLength = pathLength * scrollPercentage;
//     path.style.strokeDashoffset = pathLength - drawLength;
    
// })
