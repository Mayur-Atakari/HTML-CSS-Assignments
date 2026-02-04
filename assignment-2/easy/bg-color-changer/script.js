const red = document.getElementById("red");

const yellow = document.getElementById("yellow");

const blue = document.getElementById("blue");

const green = document.getElementById("green");

const purple = document.getElementById("purple");

const black = document.getElementById("black");

red.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});

yellow.addEventListener("click", function () {
  document.body.style.backgroundColor = "yellow";
});

blue.addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
});

purple.addEventListener("click", function () {
  document.body.style.backgroundColor = "purple";
});

black.addEventListener("click", function () {
  document.body.style.backgroundColor = "black";
});

green.addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
});
