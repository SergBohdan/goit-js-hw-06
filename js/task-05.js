// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
// підставляє його поточне значення в span#name-output. Якщо інпут порожній, 
// у спані повинен відображатися рядок "Anonymous".

const inputQuery = document.querySelector('#name-input');
const spanText = document.querySelector('#name-output');

inputQuery.addEventListener('input', handlerQuery);

function handlerQuery(evt){
    console.log(evt.currentSelector.value);
    spanText.textContent = evt.currentSelector.value;

}

