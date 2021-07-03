const getInput = document.querySelector('#validation-input');

const getDataLength = Number(getInput.getAttribute('data-length'));

const inputIsValid = getInput.addEventListener('input', onFormInput);

function onFormInput(event) {

  const getInputValue = event.currentTarget.value;

  if (getInputValue.length === getDataLength) {
    getInput.classList.add('valid');
    getInput.classList.remove('invalid');
  }
  else {
    getInput.classList.remove('valid');
    getInput.classList.add('invalid');
  }
};
