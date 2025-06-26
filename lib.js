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