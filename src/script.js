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
