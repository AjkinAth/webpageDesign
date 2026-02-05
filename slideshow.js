const slideShow = document.querySelector(".slideshow");
const slideList = slideShow.querySelectorAll(".slide");
const slideInterval = setInterval(swapSlide, 2500);
const title = document.querySelector(".page-title");
const nav = document.getElementById("nav");
const menuIcon = document.querySelector(".menu-icon");
menuIcon.addEventListener("click", toggleMenu);
nav.addEventListener("click", hideMenu);
function toggleMenu() {
  nav.classList.toggle("active");
  menuIcon.classList.toggle("active");
}

function hideMenu() {
  nav.classList.remove("active");
  menuIcon.classList.remove("active");
}

function swapSlide() {
  const activeSlide = slideShow.querySelector(".active");
  const indexOfActiveSlide = Array.from(slideList).indexOf(activeSlide);
  activeSlide.classList.remove("active");
  slideList[(indexOfActiveSlide + 1) % slideList.length].classList.add(
    "active",
  );

  if (indexOfActiveSlide === slideList.length - 2) {
    clearInterval(slideInterval);
  }
}

title.addEventListener("animationend", (e) => {
  if (e.animationName === "text-flicker-in-glow") return;
  title.classList.add("animation-end-border");
  const spanSmall = document.createElement("span");
  const spanMedium = document.createElement("span");
  const spanLarge = document.createElement("span");
  spanSmall.classList.add("small", "square");
  spanMedium.classList.add("medium", "square");
  spanLarge.classList.add("large", "square");
  title.appendChild(spanMedium);
  title.appendChild(spanLarge);
  title.appendChild(spanSmall);
});

const bannerContent = document.getElementById("bannerContent");
let messageHTML =
  "<span class='contact-message'>Contact me at jas.ajk.sin@gmail.com</span>";
let repeatedMessage = messageHTML.repeat(10);

bannerContent.innerHTML = repeatedMessage + repeatedMessage;
