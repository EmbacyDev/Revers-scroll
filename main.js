const winHeight = window.innerHeight;
const mainBlock = document.querySelector(".panel-con");

function sizeMainblock() {
  document.body.style.height = mainBlock.scrollHeight + "px";
}

document.addEventListener("DOMContentLoaded", () => {
  sizeMainblock();
  console.log(mainBlock.scrollHeight + "px");
});

window.addEventListener("resize", function (event) {
  sizeMainblock();
  console.log(window.innerHeight + "px");
});

window.addEventListener("scroll", () => {
  mainBlock.style.bottom = window.pageYOffset * -1 + "px";
});
