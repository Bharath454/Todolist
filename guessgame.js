var inputbox = document.getElementById ('inputbox');
var result = document.getElementById ('result');
var score=document.getElementById("score")

var random = Math.floor (Math.random () * 10) + 1;
if (random > 5) {
  random = random - 5;
}

var chances=5

function handlecheck () {
  if (inputbox.value == random) {
    alert ('you guessed the right number');
    result.textContent="You are right";
    score.style.display="none"
  } 
  else {
    chances=chances-1
    result.textContent="you are wrong"
    score.textContent="Remaining Chances:"+chances

    if(chances==0){
      alert("You lossed all chances")
    }

  }
}
