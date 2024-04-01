const myLibrary = []; // Array where the books go
const booksDisplayElement = document.getElementById("books-display"); // The container for the books-display



// Constructor for books
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.toggleRead = function() {
        this.read = !this.read;
    };
   
}

// The title, author, pages and read are retrieved from the values in the form, then a new Book is created and added to the library array. The library is then displayed and the form is closed.
function addBookToLibrary(title, author, pages, read) {
    const bookTitle = document.getElementById("title").value;
    const bookAuthor = document.getElementById("author").value;
    const bookPages = document.getElementById("pages").value;
    const bookRead = document.getElementById("read").checked;
  

    let book = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    myLibrary.push(book);
    displayLibrary();
    document.getElementById("new-book-form").reset();
    document.getElementById("book-form").close();

}

// Displays a book in the container for the library. For each book an item is created, which is appended to the container.
function displayLibrary() {
    booksDisplayElement.innerHTML = "";
    myLibrary.forEach((book, index) => {
        const bookItem = document.createElement("div");
        bookItem.classList.add("book-item");
        bookItem.dataset.index = index;
        bookItem.innerHTML = `
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p>${book.pages}</p>
            <p>${book.read}</p>
            <button class="toggle-read">Read status</button>
            <button class="remove-btn">Remove book</button>
        
        `;
        booksDisplayElement.appendChild(bookItem);
    });


   

}

// Removes one book from the array, then re-renders the library.
function removeBookFromLibrary(index) {
    myLibrary.splice(index, 1);
    displayLibrary();

}

// Event listener for adding a new book. When user clicks the specific button, the modal which contains the form is displayed.
document.getElementById("new-book-btn").addEventListener('click', () => {
    document.getElementById("book-form").showModal();
});

// Event listener for submitting the book to the library. 
document.getElementById("new-book-form").addEventListener('submit', (event) => {
    event.preventDefault();
    addBookToLibrary();

});

// Adds an event listener on buttons, with which the user can remove the specific book. Each time user clicks the button, the function for removing book is called.
booksDisplayElement.addEventListener('click', function(event) {
    if(event.target.classList.contains('remove-btn')) {
        const index = event.target.dataset.index;
        removeBookFromLibrary();
    }
});

// Event listener added to enable toggling of read status. Re-renders the library afterwards. 
booksDisplayElement.addEventListener('click', function(event) {
    if(event.target.classList.contains('toggle-read')) {
        const index = event.target.parentElement.dataset.index;
        myLibrary[index].toggleRead();
        displayLibrary();
    }
})