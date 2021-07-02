const inputElem = document.querySelector('input');
console.log(inputElem);
const renderElem = document.querySelector('[data-action="render"]');
console.log(renderElem);
const destroyElem = document.querySelector('[data-action="destroy"]');
console.log(destroyElem);
const boxesElem = document.querySelector('#boxes');
console.log(boxesElem);

const createBoxes = (amount) => {
    const arrayElem = [];
    for (let i = 0; i < amount * 10; i += 10) {
        const randomColor = () => {
            let col = Math.round(255.0*Math.random());
            const r = col.toString(16);
            col = Math.round(255.0*Math.random());
            const g=col.toString(16);
            col = Math.round(255.0*Math.random());
            const  d=col.toString(16);
            col=r+g+d;
            return col;
        }
       let elem = document.createElement('div');
        elem.style.width = `${30+i}px`;
        elem.style.height = `${30+i}px`;
        elem.style.backgroundColor = `#${randomColor()}`;
        elem.style.borderRadius = '10px';
        elem.style.margin = '5px';
        elem.style.borderStyle = 'solid';
        elem.style.borderColor = '#a0a0a0';
        elem.classList = 'box-element';
        arrayElem.push(elem);
        //boxesElem.appendChild(elem);
    }
    console.log(arrayElem);
    boxesElem.append(...arrayElem);
    //return console.log(boxesElem);
}

const onInputQuantity = () => {
   renderElem.addEventListener('click', onCreateElem);
}

inputElem.addEventListener('input', onInputQuantity);

const onCreateElem = () => {
    const amount = Number(inputElem.value);
    createBoxes(amount);
    //console.log(amount);
    //console.log('Создать');
}

const onDestroyElem = () => {
    boxesElem.textContent = '';
    //console.log('Очистить');
}

destroyElem.addEventListener('click', onDestroyElem);



























/////////////////////////////// ПРОБЫ ///////////////////////////////////////////////////////////////////////
// while (amount > 0) {
    //     console.log(amount);
    //      elem = document.createElement('div');
    //     elem.style.width = '300px';
    //     elem.style.height = '100px';
    //     elem.style.backgroundColor = 'teal';
    //     elem.style.borderRadius = '10px';
    //     elem.style.borderStyle = 'double';
    //     elem.style.borderColor = 'tomato';
    //     boxesElem.appendChild(elem);
    //     amount -= 1;
    // }

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