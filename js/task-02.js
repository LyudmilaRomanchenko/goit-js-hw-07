const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

const ingredientsCallBack = item => {
  const elem = document.createElement('li');
  elem.textContent = item;
  return elem;
};

// ========================
// const createIngredients = ingredients.reduce((acc, ingredient) =>
//   acc + ingredientsCallBack(ingredient), "");

// console.log(createIngredients);

// ============================
const createIngredients = ingredients.map(ingredient =>
  ingredientsCallBack(ingredient));


console.log(createIngredients);


ingredientsList.append(...createIngredients);


 
