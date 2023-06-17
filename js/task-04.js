const spanValue = document.getElementById('value');
let counterValue = 0;

const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

incrementButton.addEventListener('click', handlerIncrement);
decrementButton.addEventListener('click', handlerDecrement);


function handlerIncrement(evt) {
    counterValue++;
    spanValue.textContent = counterValue;
};

function handlerDecrement(evt) {
    counterValue--;
    spanValue.textContent = counterValue;
};




