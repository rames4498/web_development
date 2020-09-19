var live = document.querySelector("#b1");
var liveScore = document.querySelector("#score");

function change(){
  liveScore.style.backgroundColor = "green"
  liveScore.textContent = "MI won by 70 runs"
}

live.addEventListener('click',change);
