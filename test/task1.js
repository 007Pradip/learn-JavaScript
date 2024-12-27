//strict mode
'use strict';

//creating function
// function book(title, author, price) {
//     this.title = title;
//     this.author = author;
//     this.price = price;
// }




/*Write a function that takes an object representing a book (with properties title, author, year, and genre) and returns a string formatted as:
"The book <title> by <author> was published in <year>. It falls under <genre>." */
//creating function of book details
function booksdetails(book){
   //const {title, author, price, genre, year} = book;

   //either use above line or below line
   //but while using above we don't need to use book.title, book.author, book.price, book.genre, book.year
   return `The book name is ${book.title} written by author ${book.author} and genre is ${book.genre} and price is Rs. ${book.price}. It was published in ${book.year}.`;
}

//creating object   
let book1 = {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    price: 400, 
    year: 1988,
    book2:{
        title: 'The Secret',
        author: 'Rhonda Byrne',
        genre: 'Self-help',
        price: 500,
        year: 2006,
    }
};

let book3 = {
    title: 'Harry Potter',
    author: 'J.K Rowling',
    genre: 'fantasy',
    price: 500,
    year: 2006,
};

//calling function
console.log(booksdetails(book1));
console.log(booksdetails(book3));
console.log(booksdetails(book1.book2));





