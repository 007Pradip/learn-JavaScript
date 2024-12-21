//strict mode
'use strict';

//spread operator in array '...' denote spread operator
// let arr1=[1,2,3,4,5];
// let arr2=['a','b','c'];
// let arr3=[true, false];
// let arr4=[...arr1,...arr2,...arr3];
// console.log(arr4);

//spread operator in object '...' denote spread operator
let obj1={
    names:"ab",
    age:22,
    married:false,
}
let obj2={
    name:"dip",
    age:12,
    married:false,
}
//if property is same then it will override
let obj3={
    ...obj1,
    caste:"hindu", //here we are adding a new key
    ...obj2
}
console.log(obj3);
