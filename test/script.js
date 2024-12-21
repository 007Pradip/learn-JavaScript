//strict mode 
'use strict';
//  y="ab";
// console.log(y);

// //array
// let arr1=[1,2,3,4,5];
//array of methods with examples

let arr1=[1,2,3,4,5];
console.log(arr1);
//arr1.unshift(0);
//arr1.shift();
//arr1.push("pradip");
//arr1.pop();
//let arr = new Array(5); //through this we can create an array
let strA=['a','b','c'];
//console.log(strA.join('kj'));
let strB=['d','e','f'];
let strD=[1,2,3];
let strE=['j','k','l'];
//let strC=strA.concat(strB).concat(strD).concat(strE);
//next way is given below:-
let strC=strA.concat(strB,strD,strE);
console.log(strC);


//let arr6=[1,2,3,4,5,6,7,8,9,10];
//let arr=arr6.slice(1,3);
//console.log(arr);

// let arr6=[1,2,3,4,5,6,7,8,9,10];
// let arr=arr6.splice(1,3);
// console.log(arr);
let arr9=['pradip','mandal','pradipmandal','mandal'];
console.log(arr9.includes('pradi'));
console.log(arr9.indexOf('mandal'));
console.log(arr9.lastIndexOf('mandal'));

 let arru=[1,2,3,4,5,6,7,8,9,10];
 console.log(arru.toString());
 console.log(typeof arru);