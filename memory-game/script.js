

let hasFlipped = false;
let firstcard, secondcard;
let arr =  []
function flip() {
    // if(firstcard === this || secondcard === this) {
    //     this.classList.toggle('flip')
    //     return;
    // }
    
    // this.classList.toggle('flip')
    // if(!hasFlipped) {
    //     hasFlipped = true;
    //     firstcard = this;
    // } else {
    //     hasFlipped  = false;
    //     secondcard = this;
    // }
    
    // if(firstcard.getAttribute('data-value') === secondcard.getAttribute('data-value')) {
    //     console.log('matched')
    //     firstcard.removeEventListener('click', flip)
    //     secondcard.removeEventListener('click', flip)
        
    // } else {
    //     setTimeout(()=> {
    //         firstcard.classList.remove('flip')
    //         secondcard.classList.remove('flip')
    //     }, 3500)
    // }
    this.classList.toggle('flip')
    
    if(this === arr[0] || this === arr[1]) {
        this.classList.toggle('flip')
        return;
    }

    if(arr.length >= 2) {
        arr[0].classList.remove('flip')
        arr[1].classList.remove('flip')
        arr = []
    }
    arr.push(this)
    if(arr[0].getAttribute('data-value') === arr[1].getAttribute('data-value')) {
        arr[0].removeEventListener('click', flip)
        arr[1].removeEventListener('click', flip)
        arr = []
    // } else {
    //     setTimeout(()=> {
    //         arr[0].classList.remove('flip')
    //         arr[1].classList.remove('flip')
    //     },1500)
    }
    
    
}


const cards = document.querySelectorAll('.card')
cards.forEach(card => {
    card.addEventListener('click', flip)
})
