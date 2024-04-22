document.addEventListener("DOMContentLoaded", function() {
  const cardContainer = document.querySelector(".skills__row");

  // Прокрутка к началу слайдера при загрузке страницы
  cardContainer.scrollLeft = 0;

  let startX;
  let scrollLeft;
  let isDown = false;

  cardContainer.addEventListener("mousedown", function(e) {
    isDown = true;
    startX = e.pageX - cardContainer.offsetLeft;
    scrollLeft = cardContainer.scrollLeft;
  });

  cardContainer.addEventListener("mouseleave", function() {
    isDown = false;
  });

  cardContainer.addEventListener("mouseup", function() {
    isDown = false;
  });

  cardContainer.addEventListener("mousemove", function(e) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - cardContainer.offsetLeft;
    const walk = (x - startX) * 3; // Множитель для скорости движения
    cardContainer.scrollLeft = scrollLeft - walk;
  });
});
