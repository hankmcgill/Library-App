let container = document.querySelector(".container");
let bookCardDiv = document.querySelector(".book-card");
let totalBooks = 0;
let myLibrary = [];

const shining = new Book("Shining", "Stephen King", 596, "have read");
const notebook = new Book("The notebook", "mike", 56, "have not read");
const bible = new Book("bible", "God", 1000, "have read");
// const userBook = new Book(
//   prompt("title?"),
//   prompt("author?"),
//   prompt("page number?"),
//   prompt("have you read it?")
// );

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

addBookToLibrary(shining);
addBookToLibrary(notebook);
addBookToLibrary(bible);
// addBookToLibrary(userBook);

//should be a nested function to create new divs within card div every time
// document.querySelector(".book-title").innerHTML =
//   "TITLE: " + myLibrary[1].title;
// document.querySelector(".book-author").innerHTML =
//   "AUTHOR: " + myLibrary[1].author;
// document.querySelector(".book-pages").innerHTML =
//   "PAGES: " + myLibrary[1].pageNumber;
// document.querySelector(".book-have-read").innerHTML =
//   "HAVE I READ IT?: " + myLibrary[1].haveRead;

for (i = 0; i < totalBooks; i++) {
  let newDiv = document.createElement("div");
  newDiv.id = "div" + i;
  newDiv.className = "book-card";
  console.log(newDiv);
  newDiv.innerHTML =
    "TITLE: " +
    myLibrary[i].title +
    "AUTHOR: " +
    myLibrary[i].author +
    "PAGES: " +
    myLibrary[i].pageNumber +
    "HAVE I READ IT?: " +
    myLibrary[i].haveRead;
  container.appendChild(newDiv);
}
