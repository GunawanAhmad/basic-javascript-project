const slide = document.querySelector('.img-slide')
const img = document.querySelectorAll('.img-slide img')

const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')

let counter = 1
const size = img[0].clientWidth

slide.style.transform = 'translateX(' + (-size * counter) + 'px)'

nextBtn.addEventListener('click', function() {
    if (counter > img.length - 2 ) return
    slide.style.transition = 'transform 0.5s ease-in-out'
    counter++;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
})
prevBtn.addEventListener('click', function() {
    if (counter <= 0) return
    slide.style.transition = 'transform 0.5s ease-in-out'
    counter--;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

slide.addEventListener('transitionend', ()=> {
    if (img[counter].id === 'last') {
        slide.style.transition = 'none'
        counter = img.length -2
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (img[counter].id === 'first') {
        slide.style.transition = 'none'
        counter = img.length - counter
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})