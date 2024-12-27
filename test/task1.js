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
   const {title, author, price, genre, year} = book;
   return `The book name is ${title} written by author ${author} and genre is ${genre} and price is Rs. ${price}. It was published in ${year}.`;
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

console.log(booksdetails(book1));
console.log(booksdetails(book1.book2));





