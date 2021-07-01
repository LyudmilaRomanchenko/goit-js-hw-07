const spanElem = document.querySelector('#value');

let counterValue = Number(spanElem.textContent);

//console.log(counterValue);

const btnIncrement = document.querySelector('[data-action="increment"]');

const btnDecrement = document.querySelector('[data-action="decrement"]');

//console.log(btnIncrement, btnDecrement);

const increment = () => {
    for (let i = 0; i !== undefined; i += 1) {
        counterValue += 1;
        console.log(counterValue);
        return spanElem.textContent = `${counterValue}`;
    }
};

const decrement = () => {
    for (let i = 0; i !== undefined; i += 1) {
        counterValue -= 1;
        console.log(counterValue);
        return spanElem.textContent = `${counterValue}`;
    }
}


const btnIncrementEvent = btnIncrement.addEventListener('click', increment);

const btnDecrementEvent = btnDecrement.addEventListener('click', decrement);

//console.log(counterValue);