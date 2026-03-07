const allBooks = [
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        image: "https://img1.od-cdn.com/ImageType-400/3450-1/%7B622708F6-78D7-453A-A7C5-3FE6853F3167%7DIMG400.JPG",
        alreadyRead: true,
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1612238791i/56916837.jpg",
        alreadyRead: false,
    },
    {
        title:"1984",
        author:"George Orwell",
        image: "https://imgv2-1-f.scribdassets.com/img/word_document/623620045/original/b058cd709b/1?v=1",
        alreadyRead:true,
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        image: "https://www.epubbooks.com/images/covers/th/the-great-gatsby-4efc66.jpg",
        alreadyRead: false,
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: "https://m.media-amazon.com/images/I/81-JdmZeA9L._AC_UF1000,1000_QL80_.jpg",
        alreadyRead: false,
    }]


const classDiv = document.querySelector(".listBooks");
for(let i = 0; i < allBooks.length; i++){

    const parent = document.createElement('div');
    const name = document.createElement('h2');
    const author = document.createElement('h5');
    const image = document.createElement('img');

    name.innerText = allBooks[i].title;
    author.innerText = `by ${allBooks[i].author} author`;
    name.style.border = "2px solid white";
    name.style.borderRadius = "8px"
    name.style.backgroundColor = "#ccc";
    image.src = allBooks[i].image;
    image.style.width = "100px";
    parent.style.backgroundColor = "#bbfad5";
    
    if(allBooks[i].alreadyRead === true){
        name.style.color ='red';
    }

    parent.appendChild(name);
    parent.appendChild(author);
    parent.appendChild(image);
    classDiv.appendChild(parent);
}