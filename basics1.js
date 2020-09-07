// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  var st = "45"
  console.log("sherlock");
  var val = 45;
 // console.log(val);
//  console.log(typeof(val));
//  console.log(typeof(st));
 if (st == val){
      console.log("its true");
 }
 else{
      console.log("not true");
  }
 console.log(typeof(st));
 if (st === val){
      console.log("its true");
 }
 else{
      console.log("not true");
  } 

var arr = [34,45,32,45,234,23,45,65,834];
console.log(arr[1]);
console.log(typeof(arr));

arr.push(5432);

console.log(arr);
console.log(arr.slice(3,8), 'it slices the array');
console.log(arr.pop(), 'removes the last element of the array');
console.log(arr);
console.log(arr.length, "is its length");

console.log(arr.reverse());

new_array = arr.concat(44,66,77,33);
console.log(new_array);


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
});