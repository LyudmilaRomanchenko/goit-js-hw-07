const inputElem = document.querySelector('#font-size-control');
console.log(inputElem);

const textElem = document.querySelector('#text');
console.log(textElem);

console.log(inputElem.value);
inputElem.addEventListener('input', function() {            
        text.style.fontSize = inputElem.value + 'px'           
});
console.log(inputElem.value);




      //=================================

      // textElem.style.fontSize ='30px';
// textElem.style.backgroundColor = 'teal';
// textElem.style.fontSize = '16px';
// const a = textElem.style.fontSize;
// console.log(a);
// const b = Number.parseInt(a);
// console.log(b);
 


// const onInputChange = (event) => {
//     let inputValue = Number(event.currentTarget.value);
//     console.log(inputValue);
//     // for (let i = inputValue; i > 0; i = i - 3) {
//     //     return textElem.style.fontSize = `${b - 1}px`;
//     // }
    
//    // if (inputValue < 50) {
//         for (let i = inputValue; i >0; i -= 3) {
//              //inputValue -= 3;
//         return textElem.style.fontSize = `${b - 1}px`;
        
       
//     }

    // }
    // else {
    //     for (let i = inputValue; i <100; i += 3) {
    //          //inputValue += 3;
    //     return textElem.style.fontSize = `${b + 1}px`;
        
       
    // }

    
    
//}