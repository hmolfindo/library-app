const myLibrary = [
                    {
                        title: "The Great Gatsby",
                        author: "F. Scott Fitzgerald",
                        pages: "213",
                        status: "Not read yet"
                    },
                    {
                        title: "1984",
                        author: "George Orwell",
                        pages: "322",
                        status: "Read"
                    },
                    {
                        title: "Don Quixote",
                        author: "Miguel de Cervantes",
                        pages: "180",
                        status: "Not read yet"
                    },
                    {
                        title: "To Kill A Mockingbird",
                        author: "Harper Lee",
                        pages: "169",
                        status: "Read"
                    },
                    {
                        title: "Pride and Prejudice",
                        author: "Jane Austen",
                        pages: "158",
                        status: "Not read yet"
                    }];

function Book(title, author, pages, isRead) {
    //constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.status = isRead != "on" ? "Read" : "Not read yet";
}

function addBookToLibrary(newBook){
    myLibrary.push(newBook);
    displayBooks();
}

//Update library
function displayBooks(){
    const container = document.getElementById("container");
    container.textContent = "";
    myLibrary.forEach(function(book){
        const div = document.createElement("div");
        const title = document.createElement("h3");
        const author = document.createElement("p");
        const pages = document.createElement("p");
        const read = document.createElement("p");
        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        read.textContent = book.status;
        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(pages);
        div.appendChild(read);
        // div.textContent = book.title + "" +
        //                     book.author +
        //                     book.pages +
        //                     book.status;
        div.className = "bookDiv";
        container.appendChild(div);
    })
}

const dialog = document.getElementById("form-dialog");
const newBook = document.getElementById("newBook");
const closeBtn = document.getElementById("closeBtn");
const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("form-dialog");

//Open add book form
newBook.addEventListener("click", () => {
    dialog.showModal();
})

//Close add book form
closeBtn.addEventListener("click", () => {
    dialog.close();
})

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const isRead = document.getElementById("isRead");

//Submit new book
form.addEventListener("submit", (event) => {
    //Take input content and make properties of new object
    event.preventDefault();
    const bookTitle = title.value;
    const bookAuthor = author.value;
    const bookPages = pages.value;
    const bookStatus = isRead.checked;
    const book = new Book(bookTitle, bookAuthor, bookPages, bookStatus);
    addBookToLibrary(book);
    title.value = "";
    author.value = "";
    pages.value = "";
    isRead.checked = false;
    dialog.close();
})

displayBooks();
