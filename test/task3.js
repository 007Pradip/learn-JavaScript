/**
 * Create a function that takes any number of arguments and returns the product of all the numbers passed using the rest operator.
 */

//creating function to get product of all numbers
function product(...args){
    return args.reduce((acc, val) => acc * val, 1);
}

//calling function
console.log(product(1, 2, 3, 4, 5));