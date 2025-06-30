const myLibrary = [];


Book.prototype.toggleReadStatus = function() {
    this.read = !this.read;
};

Book.prototype.getReadStatus = function() {
    return this.read ? "read" : "not read yet";
};

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.getReadStatus()}`;
};

  
function Book(title, author, pages, read){
    this.id = crypto.randomUUID();
    this.title= title;
    this.author=author;
    this.pages=pages;
    this.read=read;


}


function addBookToLibrary(title, author,pages,read) {

    const book = new Book(title,author,pages,read);
    // take params, create a book then store it in the array
    myLibrary.push(book);
    return book;
  }

  function loop(){
    const container=document.getElementById("book-list");
    container.innerHTML="";

    myLibrary.forEach((book)=>{
        const card=document.createElement("div");
        card.classList.add("book-card");
        
        card.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Status: ${book.getReadStatus()}</p>
        <button class="delete-btn" data-id="${book.id}">Remove</button>
        <button class="change-status" data-id="${book.id}">Toggle Read</button>
      `;
      container.appendChild(card);
    });
    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const bookId = e.target.dataset.id;
        removeBookFromLibrary(bookId);
        loop(); 
      });
      });

      const toggleButtons = document.querySelectorAll(".change-status");
toggleButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const bookId = e.target.dataset.id;
    const book = myLibrary.find(b => b.id === bookId);
    if (book) {
      book.toggleReadStatus();
      loop(); // rerender liste da se vidi promena
    }
  });
});
  }

  function removeBookFromLibrary(id) {
    const index = myLibrary.findIndex((book) => book.id === id);
    if (index !== -1) {
      myLibrary.splice(index, 1);
    }
  }

addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("Na Drini ćuprija", "Ivo Andrić", 412, true);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false);
addBookToLibrary("Brave New World", "Aldous Huxley", 311, true);

loop();

const showBtn= document.getElementById("add");
const dialog=document.getElementById("dialog");
const jsCloseBtn=dialog.querySelector("#js-close");
const form = document.getElementById("bookForm");

showBtn.addEventListener("click",()=>{
    dialog.showModal();
});

jsCloseBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    const title = document.getElementById("titleInput").value;
    const author = document.getElementById("authorInput").value;
    const pages = parseInt(document.getElementById("pagesInput").value);
    const read = document.getElementById("readInput").checked;

    addBookToLibrary(title,author,pages,read);

    form.reset();
    dialog.close();
    loop();
});



