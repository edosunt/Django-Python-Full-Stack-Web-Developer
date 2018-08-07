//DOM Variable
var row1col1 = document.querySelector("#R1C1")
var row1col2 = document.querySelector("#R1C2")
var row1col3 = document.querySelector("#R1C3")

var row2col1 = document.querySelector("#R2C1")
var row2col2 = document.querySelector("#R2C2")
var row2col3 = document.querySelector("#R2C3")

var row3col1 = document.querySelector("#R3C1")
var row3col2 = document.querySelector("#R3C2")
var row3col3 = document.querySelector("#R3C3")

var ulang = document.querySelector("#ulangbutton")

//counter variable
var a1 = 0
var a2 = 0
var a3 = 0

var b1 = 0
var b2 = 0
var b3 = 0

var c1 = 0
var c2 = 0
var c3 = 0

//Event listener
row1col1.addEventListener("click",function(){
  if (a1 == 0) {
    row1col1.innerHTML = '<h1 align="center">X</h1>';
    a1 = a1 + 1;
  } else if (a1 == 1) {
    row1col1.innerHTML = '<h1 align="center">O</h1>';
    a1 = a1 + 1;
  } else {
    row1col1.innerHTML = '<h1 align="center"></h1>';
    a1 = 0;
  }
})

row1col2.addEventListener("click",function(){
  if (a2 == 0) {
    row1col2.innerHTML = '<h1 align="center">X</h1>';
    a2 = a2 + 1;
  } else if (a2 == 1) {
    row1col2.innerHTML = '<h1 align="center">O</h1>';
    a2 = a2 + 1;
  } else {
    row1col2.innerHTML = '<h1 align="center"></h1>';
    a2 = 0;
  }
})

row1col3.addEventListener("click",function(){
  if (a3 == 0) {
    row1col3.innerHTML = '<h1 align="center">X</h1>';
    a3 = a3 + 1;
  } else if (a3 == 1) {
    row1col3.innerHTML = '<h1 align="center">O</h1>';
    a3 = a3 + 1;
  } else {
    row1col3.innerHTML = '<h1 align="center"></h1>';
    a3 = 0;
  }
})

row2col1.addEventListener("click",function(){
  if (b1 == 0) {
    row2col1.innerHTML = '<h1 align="center">X</h1>';
    b1 = b1 + 1;
  } else if (b1 == 1) {
    row2col1.innerHTML = '<h1 align="center">O</h1>';
    b1 = b1 + 1;
  } else {
    row2col1.innerHTML = '<h1 align="center"></h1>';
    b1 = 0;
  }
})

row2col2.addEventListener("click",function(){
  if (b2 == 0) {
    row2col2.innerHTML = '<h1 align="center">X</h1>';
    b2 = b2 + 1;
  } else if (b2 == 1) {
    row2col2.innerHTML = '<h1 align="center">O</h1>';
    b2 = b2 + 1;
  } else {
    row2col2.innerHTML = '<h1 align="center"></h1>';
    b2 = 0;
  }
})

row2col3.addEventListener("click",function(){
  if (b3 == 0) {
    row2col3.innerHTML = '<h1 align="center">X</h1>';
    b3 = b3 + 1;
  } else if (b3 == 1) {
    row2col3.innerHTML = '<h1 align="center">O</h1>';
    b3 = b3 + 1;
  } else {
    row2col3.innerHTML = '<h1 align="center"></h1>';
    b3 = 0;
  }
})

row3col1.addEventListener("click",function(){
  if (c1 == 0) {
    row3col1.innerHTML = '<h1 align="center">X</h1>';
    c1 = c1 + 1;
  } else if (c1 == 1) {
    row3col1.innerHTML = '<h1 align="center">O</h1>';
    c1 = c1 + 1;
  } else {
    row3col1.innerHTML = '<h1 align="center"></h1>';
    c1 = 0;
  }
})

row3col2.addEventListener("click",function(){
  if (c2 == 0) {
    row3col2.innerHTML = '<h1 align="center">X</h1>';
    c2 = c2 + 1;
  } else if (c2 == 1) {
    row3col2.innerHTML = '<h1 align="center">O</h1>';
    c2 = c2 + 1;
  } else {
    row3col2.innerHTML = '<h1 align="center"></h1>';
    c2 = 0;
  }
})

row3col3.addEventListener("click",function(){
  if (c3 == 0) {
    row3col3.innerHTML = '<h1 align="center">X</h1>';
    c3 = c3 + 1;
  } else if (c3 == 1) {
    row3col3.innerHTML = '<h1 align="center">O</h1>';
    c3 = c3 + 1;
  } else {
    row3col3.innerHTML = '<h1 align="center"></h1>';
    c3 = 0;
  }
})

//event Listener for restart
ulang.addEventListener("click",function(){
  //reset counter variable
  a1=0; a2=0; a3=0; b1=0; b2=0; b3=0; c1=0; c2=0; c3=0;

  //reset display
  row1col1.innerHTML = '<h1 align="center"></h1>';
  row1col2.innerHTML = '<h1 align="center"></h1>';
  row1col3.innerHTML = '<h1 align="center"></h1>';
  row2col1.innerHTML = '<h1 align="center"></h1>';
  row2col2.innerHTML = '<h1 align="center"></h1>';
  row2col3.innerHTML = '<h1 align="center"></h1>';
  row3col1.innerHTML = '<h1 align="center"></h1>';
  row3col2.innerHTML = '<h1 align="center"></h1>';
  row3col3.innerHTML = '<h1 align="center"></h1>';
})
