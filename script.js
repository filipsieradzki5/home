const sections = document.querySelectorAll('.section_selector');
const nav = document.querySelector('nav');
const homeNav = document.querySelector('.home_');
const workNav = document.querySelector('.work_');
const contactNav = document.querySelector('.contact_');
const aboutNav = document.querySelector('.about_');
const image =document.querySelectorAll('.img_split');
const path = document.querySelector('path');
const svg = document.querySelector('svg');

const wait = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount));

let observer = new IntersectionObserver(navCheck, {
    threshold: [0.3, 0.8]
});

function navCheck(entries) {
    entries.forEach(entry => {
        
        if (entry.isIntersecting && entry.target.classList.value.includes('home')) {
            homeNav.classList.add('red');
            workNav.classList.remove('red');
            contactNav.classList.remove('red');
            aboutNav.classList.remove('red');
        } else if (entry.isIntersecting && entry.target.classList.value.includes('about')) {
            aboutNav.classList.add('red');
            svg.classList.add('path');
            homeNav.classList.remove('red');
            workNav.classList.remove('red');
            contactNav.classList.remove('red');
        } else if (entry.isIntersecting && entry.target.classList.value.includes('project')) {
            workNav.classList.add('red');
            image.forEach(image => image.classList.add('appear'));
            homeNav.classList.remove('red');
            contactNav.classList.remove('red');
            aboutNav.classList.remove('red');
        } else if (entry.isIntersecting && entry.target.classList.value.includes('contact')) {
            contactNav.classList.add('red')
            homeNav.classList.remove('red');
            workNav.classList.remove('red');
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


// smooth scroll

const homeScroll = () => {
    document.querySelector('.home').scrollIntoView({ 
        behavior: 'smooth' 
      });
}

const aboutScroll = () => {
    document.querySelector('.about').scrollIntoView({ 
        behavior: 'smooth' 
      });
}

const workScroll = () => {
    document.querySelector('.work').scrollIntoView({ 
        behavior: 'smooth' 
      });
}

const contactScroll = () => {
    document.querySelector('.contact').scrollIntoView({ 
        behavior: 'smooth' 
      });
}
