const libraryContainer = document.querySelector('.library-container')

const myLibrary = [];
console.log(myLibrary)
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

// Example Books
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, 'read');
addBookToLibrary('Dune', 'Frank Herbert', 412, 'not read');
addBookToLibrary('The Left Hand of Darkness', 'Ursula K. Le Guin', 304, 'read');

function displayBook() {
    for (let book of myLibrary) {
        const bookModal = document.createElement('div');
        const upperBookModal = document.createElement('div');
        const lowerBookModal = document.createElement('div');
        const bookTitle = document.createElement('h2');
        const bookAuthor = document.createElement('p');
        const bookPages = document.createElement('p');
        const readStatusBtn = document.createElement('button');
        const removeBtn = document.createElement('button');

        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookPages.textContent = book.pages;
        readStatusBtn.textContent = book.readStatus;
        removeBtn.textContent = 'Remove';

        upperBookModal.append(bookTitle, bookAuthor, bookPages);
        lowerBookModal.append(readStatusBtn, removeBtn);
        bookModal.append(upperBookModal, lowerBookModal);

        libraryContainer.appendChild(bookModal);
    }
}

displayBook();