const myLibrary = [
    {title: 'The Hobbit', author: 'J. R. R. Tolkien', imageUrl: 'https://m.media-amazon.com/images/I/61mjnP-qt6L._SL1170_.jpg', read: true},
    {title: 'The Hobbit, or there and back', author: 'J. R. R. Tolkien', imageUrl: 'https://m.media-amazon.com/images/I/51S6WnEjwrL._SY445_SX342_.jpg', read: true},
    {title: 'The Lord of the Rings', author: 'J. R. R. Tolkien', imageUrl: 'https://m.media-amazon.com/images/I/715y2x6EKBL._SL1122_.jpg', read: false},
];
const btnAddBook = document.querySelector('#btn');
const svgElement = document.querySelector('svg');
const shaddow = document.querySelector('.shaddow');
const form = document.querySelector('.form');
const addButton = document.querySelector('#addButton');
const cards = document.querySelector('#cards');


function Book(title, author, imageUrl, read=false) {
    // The contructor for a book
    this.title = title;
    this.author = author;
    this.imageUrl = imageUrl;
    this.read = read;
}


Book.prototype.info = function() {
    return `The ${this.title} by ${this.author}, ${this.read ? 'read' : 'not read yet'}.`;
}


function displayBooksOnPage() {
    cards.textContent = '';
    myLibrary.forEach((book, index) => {
        const markup = `
        <div class="card card-${index + 1}">
            <button class='remove-book'>Remove</button>
            <img src="${book.imageUrl ? book.imageUrl : 'https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png' }" alt="Girl in a jacket">
            <p class="title">${book.title}</p>
            <p class="author">${book.author}</p>
            <section>
                <p class="read">Read</p>
                <span class="switch">
                    <input id="switch-${index}" type="checkbox" ${book.read ? 'checked' : ''} />
                    <label for="switch-${index}"></label>
                </span>
            </section>
        </div>
        `;
        cards.insertAdjacentHTML('beforeend', markup);
    });

    const removeButtons = document.querySelectorAll('.remove-book')

    removeButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const card = this.closest('.card');
            console.log(button);
            card.remove();
        });
    });
}

function addBookToLibrary(event) {
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const imageUrl = document.querySelector('#image-url').value;

    const newBook = new Book(title, author, imageUrl);
    myLibrary.push(newBook);

    displayBooksOnPage();
}

btnAddBook.addEventListener('click', function(event) {
    addBookToLibrary(event);
});

svgElement.addEventListener('click', function() {
    shaddow.style.display = 'none';
    form.style.display = 'none';
})

addButton.addEventListener('click', function() {
    shaddow.style.display = 'block';
    form.style.display = 'flex';
})
displayBooksOnPage()
