

let hasFlipped = false;
let firstcard, secondcard;
function flip() {
    this.classList.toggle('flip')
    if(!hasFlipped) {
        hasFlipped = true;
        firstcard = this;
    } else {
        hasFlipped  = false;
        secondcard = this;
    }
    if(firstcard.getAttribute('data-value') === secondcard.getAttribute('data-value')) {
        console.log('matched')
        firstcard.removeEventListener('click', flip)
        secondcard.removeEventListener('click', flip)
        firstcard = undefined;
        secondcard = undefined;
        
    } else {
        setTimeout(()=> {
            firstcard.classList.remove('flip')
            secondcard.classList.remove('flip')
        }, 1500)
    }
}


const cards = document.querySelectorAll('.card')
cards.forEach(card => {
    card.addEventListener('click', flip)
})
