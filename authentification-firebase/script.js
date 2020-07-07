const guides = document.querySelector('.guides')
const logOutlLinks = document.querySelectorAll('.logged-out')
const logInlLinks = document.querySelectorAll('.logged-in')

const setupUI = (user) => {
  if(user) {
    const detail = document.querySelector('.account-details')
    detail.innerHTML = user.email

    logOutlLinks.forEach(elm => {
      elm.style.display = 'none'
    })
    logInlLinks.forEach(elm => {
      elm.style.display = 'block'
    })
  } else {
    const detail = document.querySelector('.account-details')
    detail.innerHTML = ''

    logOutlLinks.forEach(elm => {
      elm.style.display = 'block'
    })
    logInlLinks.forEach(elm => {
      elm.style.display = 'none'
  })
  }
}

const setupGuides = (data) => {
  let html = ''
  if(data.length ) {
    data.forEach(doc => {
      let guide = doc.data()
      let li = `<li>
      <div class="collapsible-header grey lighten-4">${guide.title}</div>
      <div class="collapsible-body white">${guide.content}</div>
    </li>`
    html += li
    })
  } else{
    html = '<h3 class="center-align">Login to see Guides</h3>'
  }
 
  guides.innerHTML = html

} 

document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });