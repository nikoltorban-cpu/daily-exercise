interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string; 
}


class Library {
  private books: Book[] = [];

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public getBookDetails(isbn: string): Book | undefined {
    return this.books.find(book => book.isbn === isbn);
  }

  protected getBooks(): Book[] {
    return this.books;
  }
}

class DigitalLibrary extends Library {
  readonly website: string;

  constructor(website: string) {
    super();
    this.website = website;
  }

  public listBooks(): string[] {
    return this.getBooks().map(book => book.title);
  }
}

const myLibrary = new DigitalLibrary("www.mylibrary.com");

myLibrary.addBook({
  title: "Harry Potter",
  author: "J.K Rowling",
  isbn: "111",
  publishedYear: 1997,
  genre: "Fantasy"
});

myLibrary.addBook({
  title: "Clean Code",
  author: "Robert C. Martin",
  isbn: "222",
  publishedYear: 2008
});

const book = myLibrary.getBookDetails("111");
console.log("Book details:", book);

console.log("All books:", myLibrary.listBooks());