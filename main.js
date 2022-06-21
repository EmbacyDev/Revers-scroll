const winHeight = window.innerHeight;
const mainBlock = document.querySelector(".panel-con");

document.addEventListener("DOMContentLoaded", () => {
  document.body.style.height = mainBlock.scrollHeight + "px";
  console.log(mainBlock.scrollHeight + "px");
});

window.addEventListener("resize", function (event) {
  mainBlock.style.height = window.innerHeight + "px";
  console.log(window.innerHeight + "px");
});

window.addEventListener("scroll", () => {
  mainBlock.style.bottom = window.pageYOffset * -1 + "px";
});
