//variabel definition
var player1 = prompt("Player 1 name?"); //player1 name
var PLAYER1COLOR = "rgb(150, 195, 255)"; //player 1 color chip

var player2 = prompt("Player 2 name?"); //player 2 name
var PLAYER2COLOR = "rgb(255, 63, 63)"; //player 2 color chip

var tempat = $("table tr");
var numberofrow = tempat.length; //total number of row in HTML
var numberofcol = $("table tr td").length / numberofrow; //total number of column in HTML

var EMPTYCOLOR = "rgb(196, 196, 196)"; //color for chip that's not played
var nowPlayer = 1; //start with player 1, and player 2 = -1
var nowPlayerName = player1;
var nowColor = PLAYER1COLOR;
var winOn = null;

//change color
function changeColor (row,col,color) {
  return tempat.eq(row).find("td").eq(col).find("button").css("background-color",color);
}

//checking color
function checkColor (row,col) {
  return tempat.eq(row).find("td").eq(col).find("button").css("background-color");
}

//check bottom
function checkBottom (col) {
  for (var i = numberofrow-1; i > -1; i--) {
    if (checkColor(i,col) === EMPTYCOLOR) {
      return(i);
    }
  }
}

//check color match
function colorMatch(one,two,three,four){
  return (one === two && one === three && one === four && one !== EMPTYCOLOR && one !== undefined);
}

//checkwin horizontal
function checkWinHor(){
  for (var row = 0; row < numberofrow; row++) {
    for (var col = 0; col < numberofcol-2; col++) {
      if (colorMatch(checkColor(row,col), checkColor(row,col+1), checkColor(row,col+2), checkColor(row,col+3))) {
        winOn = "Winning on Horizontal"
        return true;
      }
    }
  }
}

//checkwin vertical
function checkWinVer(){
  for (var col = 0; col < numberofcol; col++) {
    for (var row = 0; row < numberofrow-3; row++) {
      if(colorMatch(checkColor(row,col), checkColor(row+1,col), checkColor(row+2,col), checkColor(row+3,col))) {
        winOn = "Winning on Vertical"
        return true;
      }
    }
  }
}

//checkwin diagonal
function checkWinDiag(){
  var status1 = false;
  var status2 = false;

  for(var row = 0; row < numberofrow-3; row++) {
    for (var col = 0; col < numberofcol-3; col++) {
      if(colorMatch(checkColor(row,col), checkColor(row+1,col+1), checkColor(row+2,col+2), checkColor(row+3,col+3))) {
        winOn = "Winning on Diagonal"
        status1 = true;
      }
    }
  }
  for(var row = numberofrow-1; row > 2; row--) {
    for (var col = 0; col < numberofcol-4; col++) {
      if(colorMatch(checkColor(row,col), checkColor(row-1,col+1), checkColor(row-2,col+2), checkColor(row-3,col+3))) {
        winOn = "Winning on Diagonal"
        status2 = true;
      }
    }
  }
  return(status1 || status2);
}

//checkwin overall
function checkWin (){
  return (checkWinHor() || checkWinVer() || checkWinDiag());
}

//game Over
function gameEnd(winner) {
  var winnerName = null;

  if (winner === 1) {
    winnerName = player1;
  } else {
    winnerName = player2;
  }

  $('h6').fadeOut('fast');
  $('h1').text(winnerName +" has won! Refresh your browser to play again!").css("fontSize", "50px")
}

//event Listener
$("table button").on("click",function(){
  var col = $(this).closest("td").index();
  var bottomAvail = checkBottom(col);

  changeColor(bottomAvail,col,nowColor);

  if (checkWin()) {
    gameEnd(nowPlayer);
  } else {
    $("h6").text(nowPlayerName + " it's your turn");
    nowPlayer = nowPlayer * -1;
  }

  if (nowPlayer === 1) {
    nowPlayerName = player1;
    nowColor = PLAYER1COLOR;
  } else {
    nowPlayerName = player2;
    nowColor = PLAYER2COLOR;
  }
});

//initiating
$("h6").text(player1 + " it's your turn")
