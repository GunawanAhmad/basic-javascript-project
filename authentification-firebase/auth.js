
auth.onAuthStateChanged(user => {
    if(user) {
        setupUI(user)
        db.collection('guides').onSnapshot(snapshot => {
            setupGuides(snapshot.docs)
        }, err => {
            console.log(err)
        }) 
    } else {
        setupUI(null)
        setupGuides([])
    }
})


const signUp = document.querySelector('#signup-form')
signUp.addEventListener('submit', function(e) {
    e.preventDefault()
    const email = signUp['signup-email'].value
    const pass = signUp['signup-password'].value

    auth.createUserWithEmailAndPassword(email, pass,).then(cred => {
        console.log('created')
        db.collection('users').doc(cred.user.uid).set({
            bio : signUp['one-line-bio'].value
        }).then(() => {
            console.log('herwr')
            const modal = document.querySelector('#modal-signup')
            M.Modal.getInstance(modal).close()
            signUp.reset()
        })
    })
})


const logOut = document.querySelector('#logout')
logOut.addEventListener('click', function(e) {
    e.preventDefault()
    auth.signOut().then(result => {
        console.log('Log Out Succes')
        location.reload(true)
    })
})


const logIn = document.querySelector('#login-form')
logIn.addEventListener('submit', function(e) {
    e.preventDefault()
    const email = logIn['login-email'].value
    const pass = logIn['login-password'].value

    auth.signInWithEmailAndPassword(email, pass).then(cred => {
        const modal = document.querySelector('#modal-login')
        M.Modal.getInstance(modal).close()
        signUp.reset()
    })
})


const createForm = document.querySelector('#create-form')
createForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const title = createForm['title'].value
    const content = createForm['content'].value

    db.collection('guides').add({title : title, content : content})
    .then(() => {
        const modal = document.querySelector('#modal-create')
        M.Modal.getInstance(modal).close()
        createForm.reset()
    })
})
