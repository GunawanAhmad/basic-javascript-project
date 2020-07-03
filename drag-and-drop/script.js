const listItem = document.querySelectorAll('.list-item')
const lists = document.querySelectorAll('.list')

let draggedItem = null;

for(let i = 0; i < listItem.length; i++) {
    let item = listItem[i]
    item.addEventListener('dragstart', function() {
        draggedItem = item;
        setTimeout(function(){
            item.style.display = 'none'
        },0)
    })

    item.addEventListener('dragend', function() {
        setTimeout(function() {
            draggedItem.style.display = 'block';
            draggedItem = null;
        },0)
    })


    for(let j = 0; j < lists.length; j++) {
        let list = lists[j]


        list.addEventListener('dragover', function(e) {
            e.preventDefault()
        })
        list.addEventListener('dragenter', function(e) {
            list.style.backgroundColor = 'rgba(0,0,0,0.5)'
            e.preventDefault()
        })
        list.addEventListener('dragleave', function() {
            list.style.backgroundColor = 'rgba(0,0,0,0.3)'
        })
        list.addEventListener('drop', function() {
            list.append(draggedItem)
            list.style.backgroundColor = 'rgba(0,0,0,0.3)'
        })
    }
}
