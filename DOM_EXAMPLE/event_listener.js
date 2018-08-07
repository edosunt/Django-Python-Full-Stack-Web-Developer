var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");

function randomColor(){
  var huruf = "01234567890ABCDEF";
  var warna = "#";

  for (var i = 0; i < 6; i++) {
    warna += (huruf[Math.floor((Math.random())*16)]);
  }
  return(warna);
}

one.addEventListener("mouseover",function(){
  one.textContent = "NOW IT'S CHANGE";
  one.style.color = randomColor();
})

one.addEventListener("mouseout",function(){
  one.textContent = "HOVER OVER ME!!!";
  one.style.color = "Black";
})

two.addEventListener("click",function(){
  two.style.color = randomColor();
})

three.addEventListener("dblclick",function(){
  three.style.color = randomColor();
})
