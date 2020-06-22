
//Getting Input
const filterInput = document.getElementById('filter')

//Adding Event Listener
filterInput.addEventListener('keyup', filter)

//filter functions
function filter() {
    //getValue of Input
    let filterValue = document.getElementById('filter').value.toUpperCase()
    
    //get names in the ul
    let ul = document.getElementById('names')

    //get item in the ul
    let li = ul.querySelectorAll('li.list-group-item')

    //lopp through collection item list
    for (let i=0; i< li.length; i++) {

        //if matched
        if(li[i].innerText.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = ''
        } else {
            li[i].style.display = 'none'
        }
    }

}