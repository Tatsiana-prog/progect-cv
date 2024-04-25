document.addEventListener("DOMContentLoaded", function() {
  const cardContainer = document.querySelector(".skills__row");
  const softSkillsBtn = document.querySelector(".arrow-right");
  const hardSkillsBtn = document.querySelector(".arrow-left");
  const slideWidth = document.querySelector(".column__wrapper").offsetWidth;

  let currentSlide = 0;

  softSkillsBtn.addEventListener("click", function() {
    currentSlide++;
    if (currentSlide >= cardContainer.childElementCount) {
      currentSlide = 0;
    }
    cardContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  });

  hardSkillsBtn.addEventListener("click", function() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = cardContainer.childElementCount - 1;
    }
    cardContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  });
});