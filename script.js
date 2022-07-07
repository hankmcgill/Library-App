function makeBook(title, author, pageNumber, haveRead) {
  this.title = title;
  this.author = author;
  this.pageNumber = pageNumber;
  this.haveRead = haveRead;
  this.returnBookValues = function () {
    return (
      title +
      " by " +
      author +
      " has " +
      pageNumber +
      " pages and I " +
      haveRead +
      "it."
    );
  };
}

const shining = new makeBook("The Shining", "Stephen King", 596, "have read ");
const notebook = new makeBook("The notebook", "mike", 56, "have not read ");

console.log(shining.returnBookValues());
console.log(notebook.returnBookValues());
