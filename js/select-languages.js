document.addEventListener("DOMContentLoaded", function() {
  const selectedCountry = document.getElementById("selected-language");
  const selectedCountryName = document.getElementById("selected-language-name");
  const optionsList = document.querySelector(".options-list");
  const headerLanguages = document.querySelector(".header__languages");
  const iconSelect = document.querySelector(".icon-select");

  const countries = ["RU", "EN", "DE"]; // Список стран

  countries.forEach(function(country) {
    const option = document.createElement("li");
    option.textContent = country;

    option.addEventListener("click", function() {
      const selectedCountryData = this.textContent;

      if (selectedCountryData) {
        selectedCountryName.textContent = selectedCountryData;
        optionsList.style.display = "none";

        console.log(selectedCountryData);
      }
    });

    optionsList.appendChild(option);
  });

  const defaultCountry = "RU"; // Страна по умолчанию

  selectedCountryName.textContent = defaultCountry;

  headerLanguages.addEventListener("click", function(event) {
    event.stopPropagation();
    if (optionsList.style.display === "block") {
      optionsList.style.display = "none";
      iconSelect.style.transform = "rotate(90deg)"; // Сбросить поворот на 0 градусов
      selectedCountryName.style.color = ""; // Сбросить цвет текста
      selectedCountryName.style.textDecoration = ""; // Сбросить подчеркивание текста
      iconSelect.style.color = "";
    } else {
      optionsList.style.display = "block";
      iconSelect.style.color = "#FF5C31";
      iconSelect.style.transform = "rotate(270deg)"; // Повернуть иконку на 180 градусов
      selectedCountryName.style.color = "#FF5C31"; // Изменить цвет текста на красный
      selectedCountryName.style.textDecoration = "underline"; // Добавить подчеркивание текста
    }
  });

  window.addEventListener("click", function(event) {
    if (!event.target.closest(".custom-select")) {
      optionsList.style.display = "none";
      iconSelect.style.transform = "rotate(-90deg)"; // Сбросить поворот на 0 градусов
      selectedCountryName.style.color = ""; // Сбросить цвет текста
      selectedCountryName.style.textDecoration = ""; // Сбросить подчеркивание текста
    }
  });
});