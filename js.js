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
