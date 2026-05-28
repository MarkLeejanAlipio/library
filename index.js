const libraryContainer = document.querySelector('.library-container')

const myLibrary = [];

function Book(title, author, pages, readStatus, bookId) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.id = bookId;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus}`;
    };
}

function addBookToLibrary(title, author, pages, readStatus) {
    const bookId = crypto.randomUUID();
    const createBook = new Book(title, author, pages, readStatus, bookId);
    myLibrary.push(createBook);
}