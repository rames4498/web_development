var header = document.querySelector("body");
header.style.color = "red";

function RandomColor(){
  var letters = "0123456789ABCD";
  var color = "#"
  for (var i= 0; i<6; i++){
    color += letters[Math.floor(Math.random()*16)]
  }
  return color;
}
function change(){
  var newColor = RandomColor();
  header.style.color = newColor;
}
setInterval("change()",300);
