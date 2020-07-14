const faders = document.querySelector('.fade-in')
const slide = document.querySelector('.slide-in')

option = {
    threshold : 0.4
 }

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        console.log(entry.target)
        if(!entry.isIntersecting) {
            return
        } 
        
        entry.target.classList.add('appear')
        observer.unobserve(entry.target)
        
    })
}, option)

observer.observe(faders)
observer.observe(slide)

