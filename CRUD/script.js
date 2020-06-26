const input = document.querySelector('.input')
const add = document.querySelector('.add')
const ul = document.querySelector('.ul')

add.addEventListener('click', function() {
    let value = input.value
    console.log(value)
    const li = document.createElement('li')
    ul.appendChild(li)
    const p = document.createElement('p')
    p.innerText = value
    li.appendChild(p)

    const editBtn = document.createElement('button')
    editBtn.innerHTML = '<i class="far fa-edit"></i>'
    editBtn.classList.add('edit')
    li.appendChild(editBtn)

    const delBtn = document.createElement('button')
    delBtn.classList.add('delete')
    delBtn.innerHTML = '<i class="fas fa-trash"></i>'
    li.appendChild(delBtn)
})

ul.addEventListener('click', function(e) {
    const target = e.target;
    const parent = target.parentElement;
    if(target.classList[0] === 'edit') {
        const pe = target.parentElement.childNodes;
        for(let i = 0; i < 3; i++) {
            pe[i].style.display = 'none'
        }
        const newInput = document.createElement('input')
        newInput.classList.add('newInput')
        newInput.value = pe[0].innerText
        parent.appendChild(newInput)


        const newVal = document.createElement('button')
        newVal.classList.add('newVal')
        newVal.innerHTML = '<i class="far fa-edit"></i>'
        parent.appendChild(newVal)

        const cancel = document.createElement('button')
        cancel.classList.add('cancel')
        cancel.innerHTML = '<i class="fas fa-window-close"></i>'
        parent.appendChild(cancel)
        
    }
    
    if(target.classList[0] === 'newVal') {
        const newInp = document.querySelector('.newInput').value
        const pe = target.parentElement.childNodes;
        pe[0].innerText = newInp
        for(let i = 0; i < 3; i++) {
            pe[i].style.display = ''
        }
        pe[3].remove()
        pe[3].remove()
        pe[3].remove()
    }

    if(target.classList[0] === 'delete') {
        console.log('deleted')
        target.parentElement.remove()
    }

    if(target.classList[0] === 'cancel') {
        const pe = target.parentElement.childNodes;
        for(let i = 0; i < 3; i++) {
            pe[i].style.display = ''
        }
        pe[3].remove()
        pe[3].remove()
        pe[3].remove()
    }
})
