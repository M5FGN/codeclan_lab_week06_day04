document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', addBook);
});

const addBook = function(event) {
  event.preventDefault();
  
  const title = event.target.title.value;
  console.log(title);

  const author = event.target.author.value;
  console.log(author);

  const category = event.target.category.value;
  console.log(category);


  const readingList = document.createElement('li');
    readingList.textContent = `${title} - ${author} (${category})`
    const list = document.querySelector('#reading-list');
      list.appendChild(readingList);
      event.target.reset();
}
