const signUp = document.querySelector('#signup-form')
signUp.addEventListener('submit', function(e) {
    e.preventDefault()
    const email = signUp['signup-email'].value
    const pass = signUp['signup-password'].value
   

    auth.createUserWithEmailAndPassword(email, pass,).then(cred => {
        const modal = document.querySelector('#modal-signup')
        M.Modal.getInstance(modal).close()
        signUp.reset()
    })
    
})
