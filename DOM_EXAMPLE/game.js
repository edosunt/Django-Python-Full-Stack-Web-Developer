//define the var for each cell in table - array
var kotak = document.querySelectorAll("td");

//changing content function
function ubah(){
  if (this.textContent === "X") {
    this.textContent = "O";
  } else if (this.textContent === "O") {
    this.textContent = "";
  } else {
    this.textContent = "X";
  }
}

//create event listener for array
for (var i=0; i < kotak.length; i++){
  kotak[i].addEventListener("click",ubah);
}

//create refresh button variable and event listener
var tmbl = document.querySelector("#tombol");

tmbl.addEventListener("click",function(){
  for (i=0; i<kotak.length; i++){
      kotak[i].textContent = "";
  }
})
