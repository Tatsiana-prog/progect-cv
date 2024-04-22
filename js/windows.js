/*WINDOW-OUTSORCING */

// Получаем кнопку открытия модального окна
const openBtn = document.querySelector('.btn-out');

// Получаем модальное окно
const modalWindow = document.querySelector('.window-outsourcing');

// Получаем кнопку закрытия модального окна
const closeBtn = document.querySelector('.window-close');

// Функция для открытия модального окна
function openModal() {
  modalWindow.style.display = 'block';
}

// Функция для закрытия модального окна
function closeModal() {
  modalWindow.style.display = 'none';
}

// Добавляем обработчик события клика на кнопку открытия модального окна
openBtn.addEventListener('click', openModal);

// Добавляем обработчик события клика на кнопку закрытия модального окна
closeBtn.addEventListener('click', closeModal);



/*WINDOW-COUNTRIES */

// Получаем кнопку открытия модального окна
const openBtnCountries = document.querySelector('.btn-countries');

// Получаем модальное окно
const modalWindowCountries  = document.querySelector('.window-countries');

// Получаем кнопку закрытия модального окна
const closeBtnCountries  = document.querySelector('.btn-close');

// Функция для открытия модального окна
function openModalCountries () {
  modalWindowCountries.style.display = 'block';
}

// Функция для закрытия модального окна
function closeModalCountries () {
  modalWindowCountries.style.display = 'none';
}

// Добавляем обработчик события клика на кнопку открытия модального окна
openBtnCountries .addEventListener('click', openModalCountries);

// Добавляем обработчик события клика на кнопку закрытия модального окна
closeBtnCountries .addEventListener('click', closeModalCountries);


document.addEventListener("DOMContentLoaded", function() {
  // Находим элементы
  const footerSecq = document.querySelector(".footer__secq");
  const windowSecq = document.querySelector(".window-secq");
  const modalClose = document.getElementById("modal-close");

  // Показываем модальное окно при клике на кнопку
  footerSecq.addEventListener("click", function() {
      windowSecq.style.display = "block";
  });

  // Закрываем модальное окно при клике на кнопку "Закрыть"
  modalClose.addEventListener("click", function() {
      windowSecq.style.display = "none";
  });
});
