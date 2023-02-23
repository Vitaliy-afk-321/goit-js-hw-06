const categoriesList = document.querySelectorAll('.item').length;
console.log('Number of categories:' + categoriesList);

const itemLi = document.querySelectorAll('li.item');

itemLi.forEach(element => {
console.log('Category:' + element.firstElementChild.textContent);
console.log('Elements:' + element.lastElementChild.children.length)
})


