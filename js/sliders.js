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





