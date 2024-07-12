document.getElementById('form').addEventListener('submit' , (event) => {
    const user = document.getElementById('user')
    const password = document.getElementById('password').value

    let isValid = false

    if (user.value === '' || user.value == null) {
        event.preventDefault()
        isValid = true 
        document.getElementById('errorname').innerHTML = 'Please fill in the required field'
        setTimeout(() => {
            document.getElementById('errorname').innerHTML = ''
        }, 2000)
    } 
    else {
        document.getElementById('errorname').innerHTML = ''
    }

    if (password.length === 0) {
        event.preventDefault()
        isValid = true
        document.getElementById('errorpassword').innerHTML = 'Please fill in the required field'
        setTimeout(() => {
            document.getElementById('errorpassword').innerHTML = ''
        }, 2000)
    }
    else {
        document.getElementById('errorpassword').innerHTML = ''
    }

    return isValid
})