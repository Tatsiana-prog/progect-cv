const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav');

navIcon.addEventListener('click', function () {
	this.classList.toggle('nav-icon--active');
	nav.classList.toggle('nav--active');
  nav.classList.add('fade-in');
});

// Находим ссылки внутри мобильной навигации
const navLinks = document.querySelectorAll('.nav a');

// Обходим ссылки методом forEach
navLinks.forEach(function (item) {
	// Для каждой ссылки добавляем прослушку по событию "Клик"
	item.addEventListener('click', function () {
		navIcon.classList.remove('nav-icon--active'); // Убираем активный класс у иконки моб. навигации
		nav.classList.remove('nav--active'); // Убираем активный класс у блока моб. навигации
  })
})


//подключение карусели begin
const sliderLine = document.querySelector('.slider-line');
const prevButton = document.querySelector('.button-prev');
const nextButton = document.querySelector('.button-next');
let positionRev = 0;
let touchStartX = 0;
let touchMoveX = 0;

const nextSlideRev = () => {
  if (positionRev < (sliderLine.children.length - 1) * 420) {
    positionRev += 420;
  } else {
    positionRev = 0;
  }
  sliderLine.style.left = -positionRev + 'px';
};

const prevSlideRev = () => {
  if (positionRev > 0) {
    positionRev -= 420;
  } else {
    positionRev = (sliderLine.children.length - 1) * 420;
  }
  sliderLine.style.left = -positionRev + 'px';
};

const handleTouchStart = (event) => {
  touchStartX = event.touches[0].clientX;
};

const handleTouchMove = (event) => {
  touchMoveX = event.touches[0].clientX;
};

const handleTouchEnd = () => {
  const difference = touchStartX - touchMoveX;
  if (difference > 0) {
    nextSlideRev();
  } else if (difference < 0) {
    prevSlideRev();
  }
};

nextButton.addEventListener('click', nextSlideRev);
prevButton.addEventListener('click', prevSlideRev);

sliderLine.addEventListener('touchstart', handleTouchStart);
sliderLine.addEventListener('touchmove', handleTouchMove);
sliderLine.addEventListener('touchend', handleTouchEnd);
//подключение карусели end

//копирование ссылки в буфер обмена
function copyToClipboard() {
  var link = "https://www.example.com"; // Здесь ты можешь указать свою ссылку
  var tempInput = document.createElement("input");
  tempInput.value = link;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert("Ссылка скопирована в буфер обмена!");}

  
  document.addEventListener('DOMContentLoaded', function() {
    const experienceBlocks = document.querySelectorAll('.experience__block');
    const lastExperienceBlock = experienceBlocks[experienceBlocks.length - 1];
    const lastExperienceContent = lastExperienceBlock.querySelector('.experience__content');
    const boxElement1 = lastExperienceBlock.querySelector('.box-element1');
    const boxElement2 = lastExperienceBlock.querySelector('.box-element2');
  
    lastExperienceContent.classList.add('show');
    boxElement1.classList.add('accent-element');
    boxElement2.style.display = "block";
  
    const experienceScrolls = document.querySelectorAll('.question__icon');
  
    experienceScrolls.forEach((scroll, index) => {
      scroll.addEventListener('click', () => {
        const experienceBlock = scroll.closest('.experience__block');
        const experienceContent = experienceBlock.querySelector('.experience__content');
  
        experienceContent.classList.toggle('show');
  
        if (experienceContent.classList.contains('show')) {
          const boxElement1 = experienceBlock.querySelector('.box-element1');
          const boxElement2 = experienceBlock.querySelector('.box-element2');
          boxElement1.classList.add('accent-element');
          boxElement2.style.display = "block";
        } else {
          const boxElement1 = experienceBlock.querySelector('.box-element1');
          const boxElement2 = experienceBlock.querySelector('.box-element2');
          boxElement1.classList.remove('accent-element');
          boxElement2.style.display = "none";
        }
      });
    });
  });