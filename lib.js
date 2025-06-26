function Book(title, author, pages, read){
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
const book2 = new Book("The Hobbit", "J.R.R. Tolkien", 310, false);
console.log(book2.info())

