const img = document.querySelectorAll('.container img')

option = {
    threshold : 0.4
}

function imgAppear(img) {
    const str =  img.getAttribute('data-src')
    img.src = str
    img.classList.add('fade')
}

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return
        }

        imgAppear(entry.target)
        observer.unobserve(entry.target)
    })
}, option)

img.forEach(i => {
    observer.observe(i)
})