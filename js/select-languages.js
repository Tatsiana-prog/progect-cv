document.addEventListener("DOMContentLoaded", function() {
  const selectedCountry = document.getElementById("selected-language");
  const selectedCountryName = document.getElementById("selected-language-name");
  const optionsList = document.querySelector(".options-list");
  const headerLanguages = document.querySelector(".header__languages");
  const iconSelect = document.querySelector(".icon-select");

  const countries = [
    { name: "RU", page: "ru_page.html" },
    { name: "EN", page: "en_page.html" },
    { name: "DE", page: "de_page.html" }
  ]; // List of countries with corresponding page URLs

  countries.forEach(function(country) {
    const option = document.createElement("li");
    const link = document.createElement("a"); // Create a new anchor element

    link.href = country.page; // Set the href attribute to the corresponding page URL
    link.textContent = country.name; // Set the link text to the country name

    option.appendChild(link); // Append the link to the <li> element

    // Hide the default selected element ("RU") from the list
    if (country.name === "RU") {
      option.style.display = "none";
      option.classList.add("selected");
    }

    option.addEventListener("click", function() {
      const selectedCountryData = this.textContent;

      if (selectedCountryData) {
        selectedCountryName.textContent = selectedCountryData;
        optionsList.style.display = "none";

        // Show the previously selected option and hide the current selected option
        const prevSelectedOption = optionsList.querySelector(".selected");
        if (prevSelectedOption) {
          prevSelectedOption.style.display = "block";
          prevSelectedOption.classList.remove("selected");
          iconSelect.style.transform = "rotate(90deg)";
          iconSelect.style.color = "black"; // Reset rotation to 0 degrees and set color to black
        }
        this.style.display = "none";
        this.classList.add("selected");
        iconSelect.style.color = "black"; // Set icon color to black
      }
    });

    optionsList.appendChild(option);
  });

  const defaultCountry = "RU"; // Default selected country

  selectedCountryName.textContent = defaultCountry;

  selectedCountry.addEventListener("click", function(event) {
    event.stopPropagation();
    if (optionsList.style.display === "block") {
      optionsList.style.display = "none";
      iconSelect.style.transform = "rotate(90deg)"; // Reset rotation to 0 degrees
      iconSelect.style.color = "black"; // Reset color to black
    } else {
      optionsList.style.display = "block";
      iconSelect.style.transform = "rotate(270deg)"; // Rotate icon by 90 degrees
      iconSelect.style.color = "#FF5C31"; // Change color to red
      selectedCountryName.style.color =  "#FF5C31";
    }
  });

  document.addEventListener("click", function(event) {
    if (!event.target.closest(".custom-select")) {
      optionsList.style.display = "none";
    }
  });
});
