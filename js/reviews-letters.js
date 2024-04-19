// Отображение отзывов
function showReviews(id) {
    var reviewsLetter = document.getElementById(id);
    reviewsLetter.classList.remove('hidden');
  }

// Скрытие отзывов
  function hideReviews(id) {
    var reviewsLetter = document.getElementById(id);
    reviewsLetter.classList.add('hidden');
  }

  document.getElementById('show-reviews1').addEventListener('click', function() {
    showReviews('reviews-letter1');
  });

  document.getElementById('show-reviews2').addEventListener('click', function() {
    showReviews('reviews-letter2');
  });
  document.getElementById('show-reviews3').addEventListener('click', function() {
    showReviews('reviews-letter3');
  });
  document.getElementById('show-reviews4').addEventListener('click', function() {
    showReviews('reviews-letter4');
  });

var closeButtons = document.querySelectorAll('.close-letter');

  closeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var reviewsLetterId = this.getAttribute('data-reviews-letter-id');
      hideReviews(reviewsLetterId);
    });
});