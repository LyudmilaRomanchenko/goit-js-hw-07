const inputElem = document.querySelector('input');
console.log(inputElem);
const renderElem = document.querySelector('[data-action="render"]');
console.log(renderElem);
const destroyElem = document.querySelector('[data-action="destroy"]');
console.log(destroyElem);
const boxesElem = document.querySelector('#boxes');
console.log(boxesElem);

const onCreateBoxes = (event) => {
    //return console.log('Создать');
    console.log('Создать');
    const createBoxes = (amount) => {
        console.log(amount);
    let elem;
    while (amount > 0) {
        elem = document.createElement('div');
        elem.textContent = 'fffffffff';
        boxesElem.appendChild(elem);
        amount -= 1;
    }
    return elem;
    
}
}



//let amount = 0;
const onInputQuantity = (event) => {
    
    const amount = Number(event.currentTarget.value);
    //return console.log(amount);
   
    renderElem.addEventListener('click', onCreateBoxes);
}

//===============
// const createBoxes = (amount) => {
//     let elem;
//     while (amount > 0) {
//         elem = document.createElement('div');
//         boxesElem.appendChild(elem);
//         amount -= 1;
//     }
//     return elem;
    
// }
//console.log(createBoxes(5));
//===============

inputElem.addEventListener('input', onInputQuantity);

// const onCreateBoxes = (event) => {
//     return console.log('Создать');
// }

//renderElem.addEventListener('click', onCreateBoxes);

const onDestroyElem = (event) => {
    return console.log('Очистить');
}

destroyElem.addEventListener('click', onDestroyElem);

//=============================================================================
//console.log(amount);
// const createBoxes = (amount) => {
//     const onInputQuantity = (event) => {
//     const quantity = Number(event.currentTarget.value);
//     console.log(quantity);
//    return quantity;
//     }
    


//     //=========
//     console.log(amount);

// };

// const onCreateBoxes = (event) => createBoxes(amount);
//     // const a = 5;
//     // createBoxes(a);

    




//renderElem.addEventListener('click', onCreateBoxes);
//console.log(onInputQuantity(event));