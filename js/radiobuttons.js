// Получаем радиокнопки по их id
const generalButton = document.getElementById('general');
const programsButton = document.getElementById('programs');

// Функция для скрытия блока
function hideBlock(blockId) {
  document.getElementById(blockId).style.display = 'none';
}

// Функция для показа блока с анимацией
function showBlock(blockId) {
  var block = document.getElementById(blockId);
  block.style.display = 'block';
  block.classList.add('fade-in');
}

// Показываем блок general-list при загрузке страницы
showBlock('general-list');
// Скрываем блок programmes-list при загрузке страницы
hideBlock('programmes-list');

// Добавляем обработчики событий для изменения состояния кнопок
generalButton.addEventListener('change', function() {
  if (generalButton.checked) {
    showBlock('general-list');
    hideBlock('programmes-list');
  }
});

programsButton.addEventListener('change', function() {
  if (programsButton.checked) {
    showBlock('programmes-list');
    hideBlock('general-list');
  }
});