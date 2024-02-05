"use strict";

let menuText = document.querySelectorAll(".menu");
function displayNone() {
  menuText.forEach(function addDisplay(i) {
    i.firstElementChild.style.display = "none";
  });
}

menuText.forEach(function clickEvent(i) {
  i.addEventListener("click", function message() {
    displayNone();
    i.firstElementChild.style.display = "block";
  });
});

// Проверка

function testFunc() {
  let a = document.querySelector(this);
  a.style.display = "none";
}

function get_this() {
  return this;
}

get_this();
