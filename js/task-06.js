const input = document.querySelector('#validation-input');

input.addEventListener('blur', handleInputBlur);

function handleInputBlur(event) {
  const inputValue = event.target.value;
  const expectedLength = Number(input.getAttribute('data-length'));

  if (inputValue.length === expectedLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}