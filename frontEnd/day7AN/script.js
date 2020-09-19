var live = document.querySelector("#b1");
var mom = document.querySelector("#b2");
var hScore = document.querySelector("#b3");
var hWickets = document.querySelector("#b4");
var pCap = document.querySelector("#b5");
var oCap = document.querySelector("#b6");

var score = document.querySelector("#score");

live.addEventListener('click',function(){
  score.textContent = "MI 156/4 in 18 overs"
  score.style.backgroundColor = "yellow";
})
mom.addEventListener('click',function(){
  score.textContent = "Jaspreth Bumra"
  score.style.backgroundColor = "yellow";
})
hScore.addEventListener('click',function(){
  score.textContent = "Dhoni 45 runs"
  score.style.backgroundColor = "yellow";
})
hWickets.addEventListener('click',function(){
  score.textContent = "Bumra 4 wickets"
  score.style.backgroundColor = "yellow";
})
pCap.addEventListener('click',function(){
  score.textContent = "Pollard"
  score.style.backgroundColor = "yellow";
})
oCap.addEventListener('click',function(){
  score.textContent = "Dale Styn"
  score.style.backgroundColor = "yellow";
})
