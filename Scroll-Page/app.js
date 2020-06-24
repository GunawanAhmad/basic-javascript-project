const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()

const pages = document.querySelectorAll('.page-scroll')

for (let i=0; i<pages.length; i++) {
    pages[i].addEventListener('click', function(event) {
        const href = pages[i].getAttribute('href')
        const elementHref = document.querySelector(`${href}`)  
        window.scrollTo({
            top : elementHref.offsetTop - 50,
            behavior : 'smooth'
        })
        event.preventDefault()
    })
}



const burger = document.querySelector('.menu-toogle input');
const nav = document.querySelector('nav ul')

burger.addEventListener('click', ()=> {
    nav.classList.toggle('slide')
})