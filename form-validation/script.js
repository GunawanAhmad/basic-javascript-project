const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const retype = document.getElementById('retype')
const form = document.getElementById('form')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkInput();
})

function checkInput() {
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim()
    const passwordVal = password.value.trim()
    const retypeVal = retype.value.trim()


    if (usernameVal === '') {
        //show error and add error class
        setErrorFor(username, 'Username cannot be empty')
    } else {
        //adds succes class
        setSuccesFor(username)
    }

    if (emailVal === '') {
        setErrorFor(email, 'Email cannot be empty')
    } else {
        if(!ValidateEmail(emailVal)) {
            setErrorFor(email, 'Email is invalid')
        } else {
            setSuccesFor(email)
        }
    }

    if (passwordVal === '') {
        setErrorFor(password, 'Password cannot be empty')
    } else {
        if(passwordVal.length < 8) {
            setErrorFor(password, 'Password must be at least 8 character')
        } else {
            setSuccesFor(password)
        }
    }


    if(retypeVal === '') {
        setErrorFor(retype, 'Retype password cannot be empty')
    } else {
        if(retypeVal !== passwordVal) {
            setErrorFor(retype, 'Password must be the same')
        } else {
            setSuccesFor(retype)
        }
    }
    


    
}

function setErrorFor(target, massage) {
    const formControl = target.parentElement
    const errorMsg = formControl.querySelector('small')
    formControl.className = 'form-control error'
    errorMsg.innerText = massage;
    

}

function setSuccesFor(target) {
    const formControl = target.parentElement
    formControl.className = 'form-control succes'
}


function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  } else {
      return false;
  }
}
