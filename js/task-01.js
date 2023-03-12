const listItemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${listItemEl.length}`);


listItemEl.forEach(listEl => {
    console.log("");

    console.log(`Category: ${listEl.firstElementChild.textContent}`);
    console.log(`Elements: ${listEl.lastElementChild.querySelectorAll('li').length}`);
})

