//подключение карусели секции skills
const cards = document.querySelector('.carousel-line1');
const prevButton = document.querySelector('.carousel__arrow-prev');
const nextButton = document.querySelector('.carousel__arrow-next');
let position = 0;

const cardWidthWithGap = 430 + 80; // Width of each card plus the gap

const nextSlide = () => {
  const maxPosition = (cards.children.length - 1) * cardWidthWithGap;
  if (position < maxPosition) {
    position += cardWidthWithGap;
  } else {
    position = 0;
  }  
  cards.style.left = -position + 'px';
};

const prevSlide = () => {
  if (position > 0) {
    position -= cardWidthWithGap;
  } else {
    position = (cards.children.length - 1) * cardWidthWithGap;
  }
  cards.style.left = -position + 'px';
};

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

//подключение карусели end



//подключение карусели Rewiews
const carouselLine2 = document.querySelector('.slider-line');
const prevButtonCarousel2 = document.querySelector('.button-prev');
const nextButtonCarousel2 = document.querySelector('.button-next');
const dots = document.querySelectorAll('.dot');
const slideWidth = 420; // Ширина слайда
let positionCarouselRev = 0;
let dotIndex = 0;

const updateActiveDot = () => {
  dots.forEach((dot, index) => {
    if (index === dotIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
};

const nextCarouselRev = () => {
  if (positionCarouselRev < (dots.length - 1) * slideWidth) {
    positionCarouselRev += slideWidth;
    dotIndex++;
  } else {
    positionCarouselRev = (dots.length - 1) * slideWidth;
    dotIndex = dots.length - 1;
  }
  carouselLine2.style.left = -positionCarouselRev + 'px';
  updateActiveDot();
  updateButtonState();
};

const prevCarouselRev = () => {
  if (positionCarouselRev > 0) {
    positionCarouselRev -= slideWidth;
    dotIndex--;
  } else {
    positionCarouselRev = 0;
    dotIndex = 0;
  }
  carouselLine2.style.left = -positionCarouselRev + 'px';
  updateActiveDot();
  updateButtonState();
};

const updateButtonState = () => {
  if (positionCarouselRev === 0) {
    prevButtonCarousel2.classList.add('disabled');
  } else {
    prevButtonCarousel2.classList.remove('disabled');
  }

  if (positionCarouselRev === (dots.length - 1) * slideWidth) {
    nextButtonCarousel2.classList.add('disabled');
  } else {
    nextButtonCarousel2.classList.remove('disabled');
  }
};

nextButtonCarousel2.addEventListener('click', () => {
  nextCarouselRev();
});

prevButtonCarousel2.addEventListener('click', () => {
  prevCarouselRev();
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    positionCarouselRev = index * slideWidth;
    dotIndex = index;
    carouselLine2.style.left = -positionCarouselRev + 'px';
    updateActiveDot();
    updateButtonState();
  });
});

updateButtonState();