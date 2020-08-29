var header  = document.querySelector("body");
header.style.backgroundColor = "green";

function RandomColor(){
  var combinations  = "0123456789ABCDEF";
  var color  = "#"
  for (var i = 0; i<6; i++){
    color += combinations[Math.floor(Math.random()*16)];                       //color = color+
  }
  return color;
}

function ColorChange(){
  var change = RandomColor()
  header.style.backgroundColor = change;  // #A12E45
}
setInterval("ColorChange()",500);
