const character = document.getElementById('character');
const block = document.getElementById('block');


window.addEventListener('keypress', e=> {
    if (e.key === ' ' || e.key === 'Spacebar') {
        // ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
        e.preventDefault()
        if(!character.classList.contains('jump')) {
            character.classList.add('jump')
        }
        setTimeout(function() {
            character.classList.remove('jump')
        },500)
      }
})

let checkDeath = setInterval(check, 10)

function check() {
    console.log('asdasd')
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'))

    if(blockLeft > 50 && blockLeft < 70 && characterTop >= 230) {
        block.style.animation = 'none';
        alert('you lose')
    }
}

 