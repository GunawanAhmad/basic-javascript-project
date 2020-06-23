const burger = document.querySelector('.menu-toogle input');
const nav = document.querySelector('nav ul')

burger.addEventListener('click', ()=> {
    nav.classList.toggle('slide')
})