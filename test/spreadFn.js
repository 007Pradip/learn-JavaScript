//strict mode
'strict mode'

//spread operator in function '...' denote spread operator
arr1=[1,2,3,4,5];
function xy(a,b,c){ //xy(undefined,undefined,a,b,c)
    return a+b+c;
}
xy(...arr1);
console.log(xy(...arr1));
// to add from 4th index or 6th index then use undefined primitive
