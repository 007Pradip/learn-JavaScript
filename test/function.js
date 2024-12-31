// use strict mode
'use strict'

/**
 * ----------------Simple Function----------------
 * // function definition
    function introduceMe(){
        console.log('Hello, my name is John Doe');
        console.log('I am 20 years old');
        console.log('I am a student');
    }

    // function calling
    introduceMe()
*/

/**
 * ----------------Function with Parameter 'username' ----------------
 * // function definition 
    function introduceMe(username){
        console.log('Hello, my name is ' +username);
    }

    introduceMe('Pradip Mandal');
*/

/**
 * ----------------Function with Multiple Parameters 'username' and 'age' ----------------
 * // And also with String Template Literals `${}`
    function introduceMe(username, age){
        console.log(`Hello, my name is ${username}`);
        console.log('I am ' +age+ ' years old');
    }

    introduceMe('Pradip Mandal', 20);
*/


// ----------------Function with Coders----------------
function introduceMe(username = 'default parameter', age){
    console.log(`Hello, my name is ${username}`);
    console.log('I am ' +age+ ' years old');
}

introduceMe('Pradip Mandal', 20);
console.log('-------------------\n');
introduceMe()

console.log('###############################################\n');


// ----------------Function with Default Parameters using OR operator----------------
// If while calling the function, the parameter is not passed, then the default value will be set as 'Coder'
function intro(u_name, u_age){
    console.log("Hello, Let's use OR operator to set default value");
    u_name = u_name || 'Coder';
    u_age = u_age || 18;
    console.log(`Hello, my name is ${u_name}`);
    console.log(`I am ${u_age} years old`);
}

intro() // output: Hello, Let's use OR operator to set default value
intro('Pradip Mandal', 21) // output: Hello, Let's use OR operator to set default value