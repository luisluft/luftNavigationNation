const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");

function toggleNavigation() {
  // toggle menu bars
  menuBars.classList.toggle("change");
  // toggle overlay
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    // animate in overlay
    overlay.classList.remove("overlay-slide-left");
    overlay.classList.add("overlay-slide-right");
  } else {
    // animate out overlay
    overlay.classList.remove("overlay-slide-right");
    overlay.classList.add("overlay-slide-left");
  }
}

// Event listeners
menuBars.addEventListener("click", toggleNavigation);
nav1.addEventListener("click", toggleNavigation);
nav2.addEventListener("click", toggleNavigation);
nav3.addEventListener("click", toggleNavigation);
nav4.addEventListener("click", toggleNavigation);
nav5.addEventListener("click", toggleNavigation);
