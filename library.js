const myLibrary = ["Perfect Veil",
                     "The Sunken Mirror",
                     "Wild and Wicked",
                     "Prince Charmer",
                     "Rich Young Boy"];

function Book(title, author, pages, isRead) {
    //constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(newBook){

    myLibrary.push(newBook);
    displayBooks();
}

function displayBooks(){
    const container = document.getElementById("container");
    myLibrary.forEach(function(book){
        const div = document.createElement("div");
        div.textContent = book;
        div.className = "bookDiv";
        container.appendChild(div);
    })
}

displayBooks();
