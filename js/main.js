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




//показ окон в блоке experience
const experienceBlocks = document.querySelectorAll('.experience__column .experience__block');
const experienceScrolls = document.querySelectorAll('.experience__column .experience__scroll');
const experienceContents = document.querySelectorAll('.experience__column .experience__content');

for (let i = 0; i < experienceBlocks.length; i++) {
  experienceScrolls[i].addEventListener('click', () => {
    experienceContents[i].classList.toggle('show');
  });
}

function selectItem(value) {
  var label = document.querySelector('.dropdown-label');
  label.textContent = value; // Use textContent to update label text
}

