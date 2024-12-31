// use strict mode
'use strict'

function addTwoNumbers(){
   // console.log(5 + 9);
    return 5 + 9 
}

const result = addTwoNumbers()
console.log(result);


// ----------------------------------------------------

// function with parameter along with return
function add(a, b){
    return (a+b, a*b)
}

const resultOfadd = add(add(1,2), add(4,5))
console.log(resultOfadd);



// --------------------------next function-----------------------
function add2(a, b){
    return (a+b)
}

const resultOfadd2 = add2(add2(1,2), add2(4,5))
console.log(resultOfadd2); // 3 + 9 = 12 