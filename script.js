let container = document.querySelector(".container");
let bookCardDiv = document.querySelector(".book-card");
let currentBookTotal = 0;
let allTimeBookTotal = 0;
let myLibrary = [];

function Book(title, author, pageNumber, haveRead) {
  this.title = title;
  this.author = author;
  this.pageNumber = pageNumber;
  this.haveRead = haveRead;
  allTimeBookTotal++;
  this.id = allTimeBookTotal;
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
  currentBookTotal++;
}

function subtractBookFromLibrary(value) {
  let bookToDelete = myLibrary.findIndex((book) => book.id === value);
  myLibrary.splice(bookToDelete, 1);
  currentBookTotal--;
  makeList();
}

function newEntry() {
  const userBook = new Book(
    prompt("title?"),
    prompt("author?"),
    prompt("page number?")
  );
  addBookToLibrary(userBook);
  makeList();
}

function makeDivContents(id, title, author, pages) {
  const newDiv = document.createElement("div");
  newDiv.className = "book-card";
  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.onclick = function () {
    subtractBookFromLibrary(id);
  };
  deleteButton.append("X");
  newDiv.appendChild(deleteButton);
  const newBookTitle = document.createElement("h2");
  newBookTitle.className = "book-text";
  newBookTitle.append(title);
  newDiv.appendChild(newBookTitle);
  const newBookAuthor = document.createElement("div");
  newBookAuthor.className = "book-text";
  newBookAuthor.append("AUTHOR: " + author);
  newDiv.appendChild(newBookAuthor);
  const newBookPageNumber = document.createElement("div");
  newBookPageNumber.className = "book-text";
  newBookPageNumber.append("PAGE NUMBER: " + pages);
  newDiv.appendChild(newBookPageNumber);
  const newBookHaveRead = document.createElement("button");
  newBookHaveRead.className = "unread-button";
  newBookHaveRead.className = "book-text";
  newBookHaveRead.append("I HAVEN'T READ THIS!");
  newBookHaveRead.onclick = function () {
    newBookHaveRead.innerHTML = "I READ IT ALREADY!";
  };
  newDiv.appendChild(newBookHaveRead);
  container.append(newDiv);
}

function makeList() {
  container.innerHTML = "";
  for (i = 0; i < currentBookTotal; i++) {
    makeDivContents(
      myLibrary[i].id,
      myLibrary[i].title,
      myLibrary[i].author,
      myLibrary[i].pageNumber
    );
  }
}
