let bookCardDiv = document.querySelector(".book-card");
let totalBooks = 0;

const shining = new Book("Carrie", "Stephen King", 596, "have read");
const notebook = new Book("The notebook", "mike", 56, "have not read");
// const userBook = new Book(
//   prompt("title?"),
//   prompt("author?"),
//   prompt("page number?"),
//   prompt("have you read it?")
// );

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

addBookToLibrary(shining);
addBookToLibrary(notebook);
// addBookToLibrary(userBook);

document.querySelector(".book-title").innerHTML =
  "TITLE: " + myLibrary[1].title;
document.querySelector(".book-author").innerHTML =
  "AUTHOR: " + myLibrary[1].author;
document.querySelector(".book-pages").innerHTML =
  "PAGES: " + myLibrary[1].pageNumber;
document.querySelector(".book-have-read").innerHTML =
  "HAVE I READ IT?: " + myLibrary[1].haveRead;

for (i = 1; i <= totalBooks; i++) {
  console.log("yes");
  let newDiv = document.createElement("div");
  // newDiv.id = "div" + i;
  // newDiv.className = bookCardDiv;
  // document.appendChild(newDiv);
}

console.log(totalBooks);
