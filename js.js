const text = document.querySelector(".textA");
const text1 = document.querySelectorAll("ul > li > ul");

text.onclick = function textOnOff() {
  text1.forEach((elem) => (elem.style.display = "block"));
};
