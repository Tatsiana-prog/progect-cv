





//


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

//открытие окна experience__content  
  document.addEventListener('DOMContentLoaded', function() {
    const questionIcons = document.querySelectorAll('.question__icon');
    let activeWindow = null;

    // Функция для переключения окон
    function toggleWindow(experienceContent) {
        if (activeWindow && activeWindow !== experienceContent) {
            activeWindow.classList.remove('show');
            const correspondingElem1 = activeWindow.parentElement.querySelector('.box-element1');
            const correspondingElem2 = activeWindow.parentElement.querySelector('.box-element2');
            if (correspondingElem1) {
                correspondingElem1.classList.remove('accent-element');
            }
            if (correspondingElem2) {
                correspondingElem2.style.display = 'none';
            }
        }
        experienceContent.classList.toggle('show');
        activeWindow = experienceContent.classList.contains('show') ? experienceContent : null;

        const correspondingElem1 = experienceContent.parentElement.querySelector('.box-element1');
        const correspondingElem2 = experienceContent.parentElement.querySelector('.box-element2');
        if (correspondingElem1) {
            correspondingElem1.classList.toggle('accent-element', experienceContent.classList.contains('show'));
        }
        if (correspondingElem2) {
            correspondingElem2.style.display = experienceContent.classList.contains('show') ? 'block' : 'none';
        }
    }

    // Добавляем обработчики клика для всех иконок вопросов
    questionIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const experienceContent = icon.nextElementSibling;
            toggleWindow(experienceContent);
        });
    });

    // Открываем последнее окно при загрузке страницы
    const lastExperienceContent = document.querySelector('.experience__column-wrapper').lastElementChild.querySelector('.experience__content');
    toggleWindow(lastExperienceContent);
});



// Получаем все ссылки с классом "document"
var links = document.querySelectorAll('.document');

// Добавляем обработчик события клика для каждой ссылки
links.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение ссылки
    window.open(this.href, '_blank', 'width=800,height=600'); // Открываем PDF в новом окне с заданными размерами
  });
});