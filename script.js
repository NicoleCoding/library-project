const myLibrary = []; // Array where the books go
const booksDisplayElement = document.getElementById("books-display"); // The container for the books-display




// Constructor for books
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}


function addBookToLibrary(title, author, pages, read) {
  

    let book = new Book(title, author, pages, read);
    myLibrary.push(book);

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
}

function displayLibrary() {

}

function removeBookFromLibrary() {

}




