var para = document.querySelector("p")
para.style.color = "blue"
var clas = document.querySelector(".myStuff")
clas.style.backgroundColor = "yellow"

var backgroundBody = document.querySelector("body")


function RandomBackgroundColor(){
  var combination = "0123456789ABCDEF"
  var color ="#"
  for (var i =0; i<6; i++){
    color += combination[Math.floor(Math.random()*16)]
  }
  return color
}

function change(){
  var Bcolor = RandomBackgroundColor()
  backgroundBody.style.backgroundColor = Bcolor
}

setInterval("change()",400);
