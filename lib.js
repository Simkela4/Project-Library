const myLibrary = [];

function Book(title, author, pages, read){
    this.id = crypto.randomUUID();
    this.title= title;
    this.author=author;
    this.pages=pages;
    this.read=read;

    this.getReadStatus=function(){
        return this.read ? "read" : "not read yet";
      };
      this.info=function(){
        return `${this.title} by ${this.author}, ${this.pages}, ${this.getReadStatus()}`;
      }
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
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p><strong>Status:</strong> ${book.read ? "Read" : "Not read yet"}</p>
      `;
      container.appendChild(card);
    });

  }
addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("Na Drini ćuprija", "Ivo Andrić", 412, true);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false);
addBookToLibrary("Brave New World", "Aldous Huxley", 311, true);

loop();