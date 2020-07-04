function changeColor() {
  document.querySelector(".follow-btn").style.color = "#666666";
  document.querySelector(".follow-btn").textContent = "✓ Following";
}
var colorr = document.getElementsByClassName("fa-thumbs-up")[0];
var color2 = document.getElementsByClassName("fa-thumbs-up")[1];
var color3 = document.getElementsByClassName("fa-thumbs-up")[2];
var color4 = document.getElementsByClassName("fa-thumbs-up")[3];
var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
function like1() {
  colorr.style.color = colorr.style.color === " #0077b5" ? "black" : " #0077b5";
  if (count1 === 0) {
    count1 = 1;
  } else {
    count1 = 0;
    colorr.style.color = colorr.style.color === "black" ? " #0077b5" : "black";
  }
  colorr.textContent = `${count1} Like`;
}
function like2() {
  color2.style.color = color2.style.color === " #0077b5" ? "black" : " #0077b5";
  if (count2 === 0) {
    count2 = 1;
  } else {
    count2 = 0;
    color2.style.color = color2.style.color === "black" ? " #0077b5" : "black";
  }
  color2.textContent = `${count2} Like`;
}
function like3() {
  color3.style.color = color3.style.color === " #0077b5" ? "black" : " #0077b5";
  if (count3 === 0) {
    count3 = 1;
  } else {
    count3 = 0;
    color3.style.color = color3.style.color === "black" ? " #0077b5" : "black";
  }
  color3.textContent = `${count3} Like`;
}
function like4() {
  //   color4.style.color = color4.style.color === " #0077b5" ? "black" : " #0077b5";
  if (count4 === 0) {
    count4 = 1;
    color4.style.color =
      color4.style.color === " #0077b5" ? "black" : " #0077b5";
  } else {
    count4 = 0;
    color4.style.color = color4.style.color === "black" ? " #0077b5" : "black";
  }
  color4.textContent = `${count4} Like`;
}
