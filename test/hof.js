// hof(higher order function)
// inbuild
// custom

// function hof(a,b,cd){
//     return cb(a,b);
// }

// function add(a,b){
//     return a+b;
// }

// console.log(hof(1,2,add));
// function hof(a,b,cb){
//     return cb(a,b);
// }

// function mul(a,b){
//     return a*b;
// }   

// console.log(hof(1,2,mul));

//inbuild function set time out function
function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
      console.log("Data fetched!");
      callback();
    }, 2000);
  }
  
  function processData() {
    setTimeout(()=>{console.log("Processing data...")},2000)
}
  
  fetchData(processData);
  
