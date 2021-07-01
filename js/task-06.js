const getInput = document.querySelector('#validation-input');

const getDataLength = Number(getInput.getAttribute('data-length'));

const inputIsValid = getInput.addEventListener('focus', onFormInput);

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

// console.log(getInput);

// // getInput.classList.add('valid');

// console.log(getInput.getAttribute('data-length'));

//=============== было внутри функции
 // console.dir(event.currentTarget);
  // 
  // console.dir(getInputValue);
  // console.log(getInputValue.length);
  // console.log(getDataLength);
  // console.log(getInputValue.length === getDataLength);