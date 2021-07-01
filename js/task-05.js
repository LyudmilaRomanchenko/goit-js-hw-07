const inputElem = document.querySelector('#name-input');
//console.log(inputElem);

const nameElem = document.querySelector('#name-output');
//console.log(nameElem);


const onInputName = (event) => {
    const userName = event.currentTarget.value;
    console.log(userName);
    return nameElem.textContent = `${userName}`
}

inputElem.addEventListener('input', onInputName);
