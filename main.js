"use strict";
import "./style.scss";
import * as bootstrap from "bootstrap";
import Typed from "typed.js";
import "waypoints/lib/noframework.waypoints.min";
import ScrollReveal from "scrollreveal";
// import "./node_modules/jquery/dist/jquery.min.js";
// import "./node_modules/owl.carousel/dist/owl.carousel.min.js";

// toggle nav open, close
const btnMobile = document.querySelector(".btn-mobile");
btnMobile.addEventListener("click", function () {
  this.classList.toggle("open");
  this.closest(".myNav").classList.toggle("nav-open");
});

const tabCompo = document.querySelector(".tab-wrapper");
const tabContainer = document.querySelectorAll(".tab-container");
const tabImg = document.querySelectorAll(".tab-image-container");
tabCompo.addEventListener("click", function (e) {
  const clicked = e.target.closest(".tab-container");
  if (!clicked) return;

  // remove active class
  [...tabContainer].map((cur) => cur.classList.remove("active-tab"));

  // add active class
  clicked.classList.add("active-tab");

  // deactivate all active tab
  [...tabImg].map((cur) => cur.classList.add("d-none"));

  // activate active tab img
  document
    .querySelector(`.tab-img-${clicked.dataset.tab}`)
    .classList.remove("d-none");
});

// navigator

const showUpSec = document.querySelector(".NaviShowUp");
const navigator = document.querySelector(".navigator");
const header = document.querySelector("#header");

// scroll top
navigator.addEventListener("click", function (e) {
  e.preventDefault();
  header.scrollIntoView({ behavior: "smooth" });
});

//ani
new Waypoint({
  element: showUpSec,
  handler: function (direction) {
    if (direction === "down") navigator.classList.toggle("active-navi");

    if (direction === "up") navigator.classList.toggle("active-navi");
  },
  offset: "bottom-in-view",
});

// owl carousel
// $(document).ready(function () {
//   $(".owl-carousel").owlCarousel({
//     items: 2,
//     margin: 20,
//     nav: true,
//     navText: [
//       '<i class="bi bi-chevron-left fs-3"></i>',
//       '<i class="bi bi-chevron-right fs-3"></i>',
//     ],
//     slideBy: 1,
//     dots: false,
//     responsive: {
//       0: { items: 1 },
//       770: { items: 2 },
//     },
//   });
// });

// ani(scroll reveal )

//main content ani
const slideBot = {
  distance: "90px",
  origin: "bottom",
  duration: 600,
  interval: 100,
  cleanup: true,
  easing: "ease-out",
  delay: 200,
};
ScrollReveal().reveal(".slideBot", slideBot);

const slideBotLg = {
  distance: "90px",
  origin: "bottom",
  duration: 600,
  interval: 230,
  cleanup: true,
  easing: "ease-out",
  delay: 200,
};
ScrollReveal().reveal(".slideBotLg", slideBotLg);

// footer ani
const slideTopAtOnce = {
  distance: "50px",
  origin: "top",
  interval: 5,
  duration: 1000,
  cleanup: true,
  delay: 200,
};
ScrollReveal().reveal(".slideTopAll", slideTopAtOnce);

const slideBotAtOnce = {
  distance: "50px",
  origin: "bottom",
  interval: 5,
  duration: 1000,
  cleanup: true,
  delay: 200,
};
ScrollReveal().reveal(".slideBotAll", slideBotAtOnce);

// type footer quote
const options = {
  strings: ["team.", "startup.", "business."],
  typeSpeed: 75,
  backDelay: 2000,
  backSpeed: 30,
  loop: true,
  smartBackspace: false,
};

new Typed(".typed1", options);
