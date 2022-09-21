let myLibrary = [
  new Book('The Mother', 'Jane Caro', '200 pages', true),
  new Book('Dear Edward', 'Ann Napolitano', '215 pages', true),
  new Book('The Mother', 'Jane Caro', '200 pages', true),
  new Book('The Hobbit', 'J. R. R. Tolkien', '320 pages', true),
  new Book('All the light we cannot see', 'Anthony Doerr', '350 pages', false),
];

//constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function renderBookList() {
  const cards = document.getElementById('cards');
  myLibrary.forEach((book, index) => {
    cards.appendChild(renderBook(book, index));
  });
}

function renderBook(book, index) {
  //create parent div.
  const card = document.createElement('div');
  card.classList.add('card');

  //render title.
  const title = document.createElement('h3');
  title.classList.add('title');
  title.appendChild(document.createTextNode(book.title));
  card.appendChild(title);

  //render author.
  const author = document.createElement('h4');
  author.classList.add('author');
  author.appendChild(document.createTextNode(book.author));
  card.appendChild(author);

  //render pages.
  const pages = document.createElement('h5');
  pages.classList.add('pages');
  pages.appendChild(document.createTextNode(book.pages));
  card.appendChild(pages);

  const statusId = 'status' + index;
  //render read status label.
  const readStatus = document.createElement('label');
  readStatus.classList.add('status');
  readStatus.setAttribute('for', statusId);
  readStatus.appendChild(document.createTextNode('Read status:'));
  card.appendChild(readStatus);

  //render read status checkbox.
  const checkbox = document.createElement('input');
  checkbox.id = statusId;
  checkbox.setAttribute('type', 'checkbox');
  if (book.read) {
    checkbox.setAttribute('checked', 'true');
  }
  checkbox.appendChild(document.createTextNode(book.checkbox));
  card.appendChild(checkbox);

  //render remove button.
  const removeBtn = document.createElement('button');
  removeBtn.classList.add('delete-btn');
  removeBtn.appendChild(document.createTextNode('🗑'));
  card.appendChild(removeBtn);

  return card;
}
renderBookList();

function addButtonHandler() {
  const formContainer = document.getElementById('form-container');

  if (formContainer.classList.contains('active')) {
    formContainer.classList.remove('active');
  } else {
    formContainer.classList.add('active');
  }
}

function submitHandler(e) {
  console.log(e);
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  console.log(formProps);
}
const form = document.getElementById('form');
form.addEventListener('submit', submitHandler);
