//Synchrouns programming......?
/*Synchronous programming is a programming paradigm where tasks are executed one after the other, in a sequential manner. Each task must complete before the next task can start. The program waits for each task to finish before moving on to the next one.

In synchronous programming, the program executes tasks in a linear sequence, like a recipe:
Do step 1
Wait for step 1 to finish
Do step 2
Wait for step 2 to finish
Do step 3
...
Synchronous programming is often used when tasks are dependent on each other, and the outcome of one task affects the next task. */

// let a = prompt("What is your name?");
// let b = prompt("What is your age?");
// let c = prompt("Are you married?");
// console.log("Your name is "+a);
// console.log("Your age is "+b);
// console.log("Are you married "+c);
// console.log(a + " is " + b + " years old and is " + c + " married");

/*Above code ther will be error because prompt is a synchronous function. This is because prompt is a function that is typically used in a browser environment, not in a Node.js environment.

In Node.js, you can use the readline module to read input from the user.  */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (a) => {
  rl.question('What is your age? ', (b) => {
    rl.question('Are you married? ', (c) => {
      console.log(`Your name is ${a}`);
      console.log(`Your age is ${b}`);
      console.log(`Are you married ${c}`);
      console.log(`${a} is ${b} years old and is ${c} married`);
      rl.close();
    });
  });
});

//Asynchronous programming......?
/*Asynchronouns actions are the actions that we initiate now and they finish laters. e.g. SetTimeout function in javascript. */

console.log("Start");
setTimeout(function(){
    console.log("This is shown after 3 seconds");
}, 1000);
console.log("End");