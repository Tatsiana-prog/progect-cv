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

// Функция для переключения на следующий слайд
const nextSlideRev = () => {
  if (positionRev < (sliderLine.children.length - 1) * 420) {
    positionRev += 420;
  } else {
    positionRev = 0;
  }
  sliderLine.style.left = -positionRev + 'px';
};

// Функция для переключения на предыдущий слайд
const prevSlideRev = () => {
  if (positionRev > 0) {
    positionRev -= 420;
  } else {
    positionRev = (sliderLine.children.length - 1) * 420;
  }
  sliderLine.style.left = -positionRev + 'px';
};

// Обработчики событий для кликов на стрелки
nextButton.addEventListener('click', nextSlideRev);
prevButton.addEventListener('click', prevSlideRev);

//подключение карусели end





//показ окон в блоке experience
const experienceBlocks = document.querySelectorAll('.experience__row-first .experience__block, .experience__row-second .experience__block');
const experienceScrolls = document.querySelectorAll('.experience__row-first .experience__scroll, .experience__row-second .experience__scroll');
const experienceContents = document.querySelectorAll('.experience__row-first .experience__content, .experience__row-second .experience__content');

for (let i = 0; i < experienceBlocks.length; i++) {
  experienceScrolls[i].addEventListener('click', () => {
    experienceContents[i].classList.toggle('show');
  });
}