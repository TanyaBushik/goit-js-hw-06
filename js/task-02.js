const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector("#ingredients");

// let ingredientsListArr = [];

// ingredients.forEach(function (ingredient) {
//   const listItem = document.createElement("li");
//   listItem.textContent = ingredient;
//   listItem.classList = 'item';
//   return ingredientsListArr.push(listItem);
// });

const ingredientsListArr = ingredients.map(ingredient => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  listItem.classList = 'item';
  return listItem;
})

ingredientsListEl.append(...ingredientsListArr);

console.log(ingredientsListEl);