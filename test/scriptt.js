//strict mode
'use strict';
//destructuring in js
// let arr1=[1,2,3,4,5];
// let [a,b,c,d,e]=arr1;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

//skipping elements in destructuring
// let [, , , d, e]=arr1;
// console.log(d);
// console.log(e);

//arrays inside arrays
// let arr2=[[1,2,3],[4,5,6]];
// let [a,b]=[1,2,3,4,5];
// console.log(a);
// console.log(b);

//create object and destructuring in object
// let obj1 = {
//     names:"pradip",
//     age:22,
//     married:false,
// }
// let{names,age,married}=obj1;
// console.log(names,married);

//Object destructuring and renaming variables, nested destructuring
//in object while assigning value there will be ":" not "="
// let obj1 = {
//     nm:"pradip",
//     age:22,
//     married:false,
// }
// let{nm:names,age,married}=obj1;
// console.log(names,married);

//nested destructuring
// let obj1 = {
//     nm:"pradip",
//     age:22,
//     married:false,
//     std:{
//         sid:1,
//         sname:"pradip mandal",
//         srn:false
//     }
// }
// let{married,std,std:{sid}}=obj1;
// console.log(std,sid);
// console.log(married);

//rest operator and spread operator ???