function validateEmail(email){
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email.trim())
}


document.querySelector('.form')
    .addEventListener('submit',(event)=> {
        event.preventDefault()
        let inputValue = document.querySelector('.form_input').value;
        let errorMessage = document.querySelector('.form_error-message');
        errorMessage.style.visibility = validateEmail(inputValue) ?
            'hidden' : 'visible'
    })
