let myLibrary = [
  new Book('The Mother', 'Jane Caro', 200, true),
  new Book('The Father', 'Jane Caro', 200, true),
  new Book('The Child', 'Jane Caro', 200, false),
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

  return card;
}
renderBookList();
