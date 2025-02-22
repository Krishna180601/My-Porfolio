// Typed.js
var typed = new Typed(".auto-type", {
  strings: [
    "Appian Developer",
    "Web Developer",
    "UI/UX Designer",
    "Freelancer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Tab Functionality
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Landing Page Animation
VANTA.DOTS({
  el: "#header",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0xff004f,
  color2: 0xff004f,
  backgroundColor: 0x080808,
  showLines: false,
});

// Scroll Reveal
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 80,
});
ScrollReveal().reveal(".header_text, .subtitle", { origin: "top" });
ScrollReveal().reveal(
  ".about-col-2, .col-1, .services-list, .work-list, .contact-right",
  { origin: "bottom" }
);
ScrollReveal().reveal(".contact-left,.about-col-1, nav img, .header_text h3", {
  origin: "left",
});
ScrollReveal().reveal(".bio, nav ul, .quot, .gif", { origin: "right" });

// Side Navigation
var sideMenu = document.getElementById("sideMenu");
function openMenu() {
  sideMenu.style.right = "0";
}
function closeMenu() {
  sideMenu.style.right = "-200px";
}
