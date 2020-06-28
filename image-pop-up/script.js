const modal = document.querySelector('.modal')
const previews = document.querySelectorAll('.gallery img')
const original = document.querySelector('.full-img')
const imgText = document.querySelector('.caption')


previews.forEach(preview => {
    preview.addEventListener('click', function() {
        modal.classList.add('open')
        original.classList.add('open')
        const originalSrc = preview.getAttribute('data-original')
        const capt = preview.getAttribute('caption')
        imgText.innerText = capt
        original.src = `./img/full/${originalSrc}`

    })
})
modal.addEventListener('click', function(e) {
    if(e.target.classList.contains('modal')) {
        e.target.classList.remove('open')
        original.classList.remove('open')
    }
})