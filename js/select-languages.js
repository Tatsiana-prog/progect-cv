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

    // Скрыть выбранный элемент по умолчанию ("RU") из списка
    if (country === "RU") {
      option.style.display = "none";
      option.classList.add("selected");
    }

    option.addEventListener("click", function() {
      const selectedCountryData = this.textContent;

      if (selectedCountryData) {
        selectedCountryName.textContent = selectedCountryData;
        optionsList.style.display = "none";

        // Показать предыдущий выбранный элемент и скрыть текущий выбранный элемент
        const prevSelectedOption = optionsList.querySelector(".selected");
        if (prevSelectedOption) {
          prevSelectedOption.style.display = "block";
          prevSelectedOption.classList.remove("selected");
          iconSelect.style.transform = "rotate(90deg)";
          iconSelect.style.color = "black"; // Сбросить поворот на 0 градусов и вернуть черный цвет
        }
        this.style.display = "none";
        this.classList.add("selected");
        iconSelect.style.color = "black"; // Установить цвет иконки на черный
      }
    });

    optionsList.appendChild(option);
  });

  const defaultCountry = "RU"; // Выбранная страна по умолчанию

  selectedCountryName.textContent = defaultCountry;

  selectedCountry.addEventListener("click", function(event) {
    event.stopPropagation();
    if (optionsList.style.display === "block") {
      optionsList.style.display = "none";
      iconSelect.style.transform = "rotate(90deg)"; // Сбросить поворот на 0 градусов
      iconSelect.style.color = "black"; // Сбросить цвет на черный
    } else {
      optionsList.style.display = "block";
      iconSelect.style.transform = "rotate(270deg)"; // Повернуть иконку на 90 градусов
      iconSelect.style.color = "#FF5C31"; // Изменить цвет на красный
    }
  });

  document.addEventListener("click", function(event) {
    if (!event.target.closest(".custom-select")) {
      optionsList.style.display = "none";
    }
  });
});
