// Sticky Navigation Menu

const ball = document.getElementById("colorBall");
let direction = 1;
let position = 0;

function animateBall() {
  position += direction * 2.2; // speed
  if (position >= 90 || position <= 0) direction *= -1;

  ball.style.transform = `translate(-50%, -${position}px)`;

  requestAnimationFrame(animateBall);
}

animateBall();

const container = document.querySelector(".bubbles-container");

for (let i = 0; i < 15; i++) {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  const size = Math.random() * 20 + 10; // 10px to 30px
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;

  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.animationDuration = `${Math.random() * 5 + 5}s`; // 5s to 10s
  bubble.style.animationDelay = `${Math.random() * 5}s`;

  container.appendChild(bubble);
}

let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Close side navigation
cancelBtn.onclick = hideNavMenu;

// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});
