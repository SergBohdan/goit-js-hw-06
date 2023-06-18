const inputQuery = document.querySelector('#validation-input');
const inputValueLength =inputQuery.getAttribute('data-length');

inputQuery.addEventListener('blur', handlerCheckInput);

function handlerCheckInput(evt){
    const inputText = evt.currentTarget.value;
    if (Number(inputValueLength) === Number(inputText.length)){
        inputQuery.classList.add('valid');
    } else{
        inputQuery.classList.add('invalid');
    }
}