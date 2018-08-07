//getting the player name
var name1 = prompt("What is the name of the first player?");
var name2 = prompt("What is the name of the second player?");

//variabel for the game status
var gameEnd = false;
var turn = 0;

//showing who's in turn
function showTurn() {
  turn++;
  if (turn%2 === 1) {
      $("h6").text(name1 + " it's your turn");
  } else {
      $("h6").text(name2 + " it's your turn");
  }
}

//change the color on the clicked column
function changeColor(){

}

//event
$(document).ready(showTurn);
$("td").click(changeColor);
