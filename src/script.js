document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".carousel-item");
  let currentIndex = 0;
  const intervalTime = 5000; // 2 seconds

  const showNextItem = () => {
    items[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add("active");
  };

  setInterval(showNextItem, intervalTime);
});

const img = document.querySelector("#img-success-story");
const txt = document.querySelector("#text-success-story");
const img1 = document.querySelector("#img-success-story1");
const txt1 = document.querySelector("#text-success-story1");

const TL = gsap.timeline({ paused: true });
const TL1 = gsap.timeline({ paused: true });

TL.from(txt, {
  scale: 1.0,
  y: 180,
  opacity: 0,
  delay: 0.5,
  duration: 0.6,
  stagger: 0.1,
  ease: "back.out(1.7)",
});
TL1.from(txt1, {
  scale: 1.0,
  y: 180,
  opacity: 0,
  delay: 0.5,
  duration: 0.6,
  stagger: 0.1,
  ease: "back.out(1.7)",
});

img1.addEventListener("mouseenter", () => {
  TL1.play();
});

img1.addEventListener("mouseout", () => {
  TL1.reverse();
});
img.addEventListener("mouseenter", () => {
  TL.play();
});

img.addEventListener("mouseout", () => {
  TL.reverse();
});
