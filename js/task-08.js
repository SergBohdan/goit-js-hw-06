const loginForm = document.querySelector('.login-form');
   

loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();
    const { email, password } = event.currentTarget.elements

        if(!email.value || !password.value){
        alert('Insert all fields in the form!')
    } else {
        const dataValue = {
            email: email.value,
            password: password.value,
        }
        console.log(dataValue);
    }
    loginForm.reset();
};



