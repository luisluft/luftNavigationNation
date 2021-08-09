const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

function controlNavAnimation(firstDirection, secondDirection) {
  navItems.forEach((navItem, index) => {
    navItem.classList.replace(`slide-${firstDirection}-${index + 1}`, `slide-${secondDirection}-${index + 1}`);
  });
}

function toggleNavigation() {
  // toggle menu bars
  menuBars.classList.toggle("change");
  // toggle overlay
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    // animate in overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    // animate in nav items
    controlNavAnimation("out", "in");
  } else {
    // animate out overlay
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    // animate out nav items
    controlNavAnimation("in", "out");
  }
}

// Event listeners
menuBars.addEventListener("click", toggleNavigation);
navItems.forEach((navItem) => {
  navItem.addEventListener("click", toggleNavigation);
});
