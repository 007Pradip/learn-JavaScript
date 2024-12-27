/*An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage: */

//Syntax
/*
        () => expression

        param => expression

        (param) => expression

        (param1, paramN) => expression

        () => {
        statements
        }

        param => {
        statements
        }
*/


/*Write a function to filter out all the numbers greater than 10 from an array using an arrow function. */
//creating function to filter out numbers greater than 10
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let filterNumbers = arr1.filter(num => num > 10);


console.log(filterNumbers);

//const filterNumbers = (arr) => arr.filter(num => num < 10);
//console.log(filterNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]));


