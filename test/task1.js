//strict mode
'use strict';

//creating function
// function book(title, author, price) {
//     this.title = title;
//     this.author = author;
//     this.price = price;
// }

//creating function of book details
function booksdetails(book){
   const {title, author, price, genre} = book;
   return `The book name is ${title} written by author ${author} and genre is ${genre} and price is Rs. ${price}`;
}

//creating object   
let book1 = {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    price: 400, 
    book2:{
        title: 'The Secret',
        author: 'Rhonda Byrne',
        genre: 'Self-help',
        price: 500,
    }
};

console.log(booksdetails(book1));
console.log(booksdetails(book1.book2));