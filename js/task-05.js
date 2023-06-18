// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
// підставляє його поточне значення в span#name-output. Якщо інпут порожній, 
// у спані повинен відображатися рядок "Anonymous".

const inputQuery = document.querySelector('#name-input');
const spanText = document.querySelector('#name-output');
let previousValue = spanText.textContent;

inputQuery.addEventListener('input', handlerQuery);

function handlerQuery(evt) {

    const inputText = evt.currentTarget.value;

    if (inputText.trim() !== '') {
        spanText.textContent = inputText;
      } else {
        spanText.textContent = previousValue;
      }
  
  }

   



