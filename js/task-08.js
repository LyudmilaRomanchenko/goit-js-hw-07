const inputElem = document.querySelector('input');
console.log(inputElem);
const renderElem = document.querySelector('[data-action="render"]');
console.log(renderElem);
const destroyElem = document.querySelector('[data-action="destroy"]');
console.log(destroyElem);
const boxesElem = document.querySelector('#boxes');
console.log(boxesElem);

//============================ Работает ====================================
let elem = 0;
const createBoxes = (amount) => {
    while (amount > 0) {
        console.log(amount);
         elem = document.createElement('div');
        elem.style.width = '300px';
        elem.style.height = '100px';
        elem.style.backgroundColor = 'teal';
        elem.style.borderRadius = '10px';
        elem.style.borderStyle = 'double';
        elem.style.borderColor = 'tomato';
        boxesElem.appendChild(elem);
        amount -= 1;
    }
    return console.log(boxesElem);
    
}

const onCreateBoxes = () => {
    const amount = Number(inputElem.value);
    console.log(amount);
    createBoxes(amount);
    //return console.log('Создать');
}

const onInputQuantity = () => {
   renderElem.addEventListener('click', onCreateBoxes);
}

inputElem.addEventListener('input', onInputQuantity);

const onDestroyElem = () => {
    //return console.log('Очистить');
    elem.remove();

}

destroyElem.addEventListener('click', onDestroyElem);


// const onCreateBoxes = (event) => {
//     //return console.log('Создать');
//     console.log('Создать');
//     const createBoxes = (amount) => {
//         console.log(amount);
//     let elem;
//     while (amount > 0) {
//         elem = document.createElement('div');
//         elem.textContent = 'fffffffff';
//         boxesElem.appendChild(elem);
//         amount -= 1;
//     }
//     return elem;
    
// }
// }



//let amount = 0;
// const onInputQuantity = (event) => {
    
//     const amount = Number(event.currentTarget.value);
//     //return console.log(amount);
   
//     renderElem.addEventListener('click', onCreateBoxes);
// }

//========

//let amount = 0;

// const createBoxes = (amount) => {
//         console.log(` ggggggg${amount}`);
//     }



//console.log(amount);
//======


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



// const onCreateBoxes = (event) => {
//     return console.log('Создать');
// }

//renderElem.addEventListener('click', onCreateBoxes);
//////////////////////////////////////////////////////////////////////////////вернуть!!!!!!!!!!!!!!!!!!!!!!!
// const onDestroyElem = (event) => {
//     return console.log('Очистить');
// }

// destroyElem.addEventListener('click', onDestroyElem);
///////////////////////////////////////////////////////////////////////////
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