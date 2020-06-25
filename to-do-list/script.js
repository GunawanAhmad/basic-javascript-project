//Selector 
const input = document.querySelector('.input input')
const add = document.querySelector('.add')
const ul = document.querySelector('ul')

//add Event Listener 
add.addEventListener('click', addTodo)
ul.addEventListener('click', functionality)



//Function 
function addTodo(event) {
    event.preventDefault()

    //create div
    if(input.value !== '') {
        const div = document.createElement('div')
        const li = document.createElement('li')
        li.innerText = input.value
        div.appendChild(li)

        //Complete Button
        const completedButton = document.createElement('button')
        completedButton.innerHTML = '<i class="fas fa-check"></i>'
        completedButton.classList.add('complete-btn')
        div.appendChild(completedButton)

        //Trash Button
        const trashButton = document.createElement('button')
        trashButton.innerHTML = '<i class="fas fa-trash"></i>'
        trashButton.classList.add('trash-btn')
        div.appendChild(trashButton)

        //append to ul
        ul.appendChild(div)
        input.value = ''
        
    } 
    
    
}

function functionality(e) {
    const target = e.target
    if (target.classList[0] === 'trash-btn') {
        const elemt = target.parentElement
        elemt.classList.add('fall')
        elemt.addEventListener('transitionend', function() {
            elemt.remove()
        })
    }
    if(target.classList[0] === 'complete-btn') {
        let todo = target.parentElement
        todo.classList.toggle('completed')
    }
}