const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.createElement('ul');
ingredients.forEach(value => {
  const listItem = document.createElement('li');
  listItem.textContent = value;
  list.append(listItem);
  listItem.classList.add('item')
});
const lastEnd = document.querySelector('ul#ingredients');
lastEnd.append(list);