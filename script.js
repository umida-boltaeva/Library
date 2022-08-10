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
  const container = document.getElementById('container');
  myLibrary.forEach((book) => {
    const node = document.createElement('div');
    const textnode = document.createTextNode(book.title);
    node.appendChild(textnode);
    container.appendChild(node);
  });
}
renderBookList();
