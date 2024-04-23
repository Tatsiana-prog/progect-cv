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
    if (event.target === headerLanguages || event.target === selectedCountryName) {
      event.stopPropagation();
      if (optionsList.style.display === "block") {
        optionsList.style.display = "none";
        iconSelect.style.transform = "rotate(-90deg)"; // Reset rotation to 0 degrees
      } else {
        optionsList.style.display = "block";
        iconSelect.style.transform = "rotate(90deg)";
        iconSelect.style.color = "#FF5C31"; // Rotate the icon by 90 degrees
      }
      selectedCountryName.style.color = "#FF5C31"; // Change text color to red
      selectedCountryName.style.textDecoration = "underline"; // Add underline to the text
    } else {
      optionsList.style.display = "none";
      iconSelect.style.transform = "rotate(-90deg)";
      iconSelect.style.color = "$color-black";// Reset rotation to 0 degrees
    }
  });

  window.addEventListener("click", function(event) {
    if (!event.target.closest(".custom-select")) {
      optionsList.style.display = "none";
      iconSelect.style.transform = "rotate(90deg)"; // Reset rotation to 0 degrees
    }
  });
});