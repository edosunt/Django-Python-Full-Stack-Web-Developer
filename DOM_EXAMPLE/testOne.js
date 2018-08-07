//grab the h1 and put it into variable for further modification
var header = document.querySelector("h1");

//create function to randomize color hex
function randomColor(){
  var huruf = "01234567890ABCDEF";
  var warna = "#";

  for (var i = 0; i < 6; i++) {
    warna += (huruf[Math.floor((Math.random())*16)]);
  }
  return(warna);
}

//create funtion to change header with randomColor Function
function gantiWarna(){
  header.style.color = randomColor();
}

//create interval timer
window.setInterval("gantiWarna()",500);
