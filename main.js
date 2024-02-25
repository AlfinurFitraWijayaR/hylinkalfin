const body = document.body;
const mode = document.querySelector("#mode");
const icon = document.querySelectorAll(".icon");
const iconMoon = document.querySelector(".fa-moon");
const iconSun = document.querySelector(".fa-sun");
iconSun.style.display = "none";
let light = true;

mode.addEventListener("click", () => {
  body.classList.toggle("active");
  body.classList.add("effect");
  const swap = body.classList.contains("active");
  if (light && swap) {
    // jika dark mode, swap ke sun
    iconMoon.style.display = "none";
    iconSun.style.display = "block";
    mode.style.backgroundColor = "white";
    iconSun.style.color = "black";
  } else {
    // jika light mode, swap ke moon
    iconMoon.style.display = "block";
    iconSun.style.display = "none";
    mode.style.backgroundColor = "black";
  }
  light = !light;
});
