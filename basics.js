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


for(var i = 0; i<arr.length; i++){
    //console.log(arr[i]);
}

var stg = "I am Sherlock Holmes";
//console.log(stg[2]);
var s = "67,32,43,23,65,7634,54";  // string to array
//console.log(s[0]);
//console.log(s[1]);
//console.log(s[2]);
console.log(s.split());
var arr2 = s.split(','); //[ '67,', '2,4', ',2', ',65,76', '4,54' ]
var l;
console.log(s.split('3'));
console.log(arr2);
var intArr = [];

for (var k=0; k<arr2.length; k++){
    l = parseInt(arr2[k]);
    //console.log(l);
    intArr.push(l);
}
console.log(intArr);

var intArr2 = s.split(",").map(Number);
console.log(intArr2);

console.log(userInput[1]);  //first line //"78 34 23 56"

var user = userInput[1].split(" ").map(Number);

console.log(user);

var stArr = stg.split(" ");
console.log(stArr);
//array to string  // join  
console.log(user.join(" "));
console.log(user.join("-")); //"78-34-23-56"
console.log(stArr.join(" "));
console.log(stArr.join(""));


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
});