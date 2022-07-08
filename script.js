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
    prompt("page number?"),
    prompt("have you read it?")
  );
  addBookToLibrary(userBook);
  clearContainer();
  makeList();
}

function clearContainer() {
  container.innerHTML = "";
}

//should be a nested function to create new divs within card div every time
// document.querySelector(".book-title").innerHTML =
//   "TITLE: " + myLibrary[1].title;
// document.querySelector(".book-author").innerHTML =
//   "AUTHOR: " + myLibrary[1].author;
// document.querySelector(".book-pages").innerHTML =
//   "PAGES: " + myLibrary[1].pageNumber;
// document.querySelector(".book-have-read").innerHTML =
//   "HAVE I READ IT?: " + myLibrary[1].haveRead;

function makeList() {
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
    container.prepend(newDiv);
  }
}

// makeList();
