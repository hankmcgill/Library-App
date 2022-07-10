let container = document.querySelector(".container");
let bookCardDiv = document.querySelector(".book-card");
let totalBooks = 0;
let myLibrary = [];

function Book(title, author, pageNumber, haveRead) {
  this.title = title;
  this.author = author;
  this.pageNumber = pageNumber;
  this.haveRead = haveRead;
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
  totalBooks++;
}

function newEntry() {
  const userBook = new Book(
    prompt("title?"),
    prompt("author?"),
    prompt("page number?")
  );
  addBookToLibrary(userBook);
  clearContainer();
  makeList();
}

function clearContainer() {
  container.innerHTML = "";
}

function makeDivContents(title, author, pages) {
  const newDiv = document.createElement("div");
  newDiv.className = "book-card";
  const deleteBook = document.createElement("button");
  deleteBook.className = "delete-button";
  deleteBook.append("X");
  newDiv.appendChild(deleteBook);
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
    // if (newBookHaveRead.className === "unread-button") {
    // newBookHaveRead.className === "read-button";
    newBookHaveRead.innerHTML = "I READ IT ALREADY!";
    console.log("test");
    // }
  };

  newDiv.appendChild(newBookHaveRead);
  container.prepend(newDiv);
}

function makeList() {
  for (i = 0; i < totalBooks; i++) {
    makeDivContents(
      myLibrary[i].title,
      myLibrary[i].author,
      myLibrary[i].pageNumber
    );
  }
}
