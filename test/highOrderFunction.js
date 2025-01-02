// strict mode
'use strict'


/**
 * Higher Order Function is a function that calls function from inside of the function
 * We can pass function, obj, array from the function as argument & Parameter
 * 
 */


// It's simple function with argument and parameter
function a(b){
    console.log('hi'+ ' ' +b);
}

a('Hello')

// Let's pass object as argument and parameter
function c(d){
    console.log(d);
}

c({name: 'John', age: 25})

// Let's pass array as argument and parameter
/** 'e' is now "Higher Order Function" */
// because we are calling function through argument
function e(f){
    console.log(`This is an array: ${f}`);
    // Calling function that is defined as --> sayHi
    //console.dir(`Here it is: ${sayHi()}`);
}

e([1,2,3,4,5])

// function defined
function sayHi(){
    console.log('Hello, I am from sayHi function');
}

// here passing "sayHi" function as argument to above function --> e
// in function 'e' we are calling function 'sayHi' without creating new parameter but parameter "f" is acting as "sayHi"
e(sayHi)

// -----------------------------Anonymous Function--------------------------------
// Anonymous function is a function that has no name
// We can pass anonymous function as argument to another function
// We can also return anonymous function from another function

// Passing anonymous function as argument
function g(h){
    console.log(`${h}`); // It prints what is passed as argument
}

g(function(){
    console.log('I am anonymous function');
})

//-----------------------------Callback Function--------------------------------
// Callback function is a function that is passed as argument to another function
// It is called when the event occurs
// It is used in async programming
// It is used in event handling
// It is used in AJAX

// Example of Callback function
function i(j){
    console.log('This is i function');
    j();
}

i(function(){
    console.log('This is callback function');
})

// Example of Callback function with argument
function k(l){
    console.log('This is k function');
    l('This is argument of callback function');
}

k(function(m){
    console.log(m);
})
