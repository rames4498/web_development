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
  //start-here
  //Your code goes here … replace the below line with your code logic 
var a = parseInt(userInput[0]);
var b = userInput[1].split(" ").map(Number);
var max = b[0]
var min = b[0]
var p,q;
var z;
for (i=0; i<b.length ; i++){
    if (max <= b[i]){
    max = b[i]
    p = i
    }
    if (min >= b[i]){
    min = b[i]
    q = i
    }
}
z = p - q
console.log(z);

  //end-here
});
