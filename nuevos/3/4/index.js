document.addEventListener("DOMContentLoaded", async function () {
  const countries = await fetch("countries.json").then((response) =>
    response.json()
  );

  const input = document.getElementById("autocomplete-input");
  const list = document.getElementById("autocomplete-list");

  input.addEventListener("focus", function () {
    displaySuggestions(countries);
  });

  input.addEventListener("input", function () {
    const val = this.value;
    if (val) {
      const filteredCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(val.toLowerCase())
      );
      displaySuggestions(filteredCountries);
    } else {
      closeAllLists();
    }
  });

  input.addEventListener("keydown", function (e) {
    let items = list.getElementsByTagName("div");
    if (e.keyCode == 40) {
      // Down key
      currentFocus++;
      addActive(items);
    } else if (e.keyCode == 38) {
      // Up key
      currentFocus--;
      addActive(items);
    } else if (e.keyCode == 13) {
      // Enter key
      e.preventDefault();
      if (currentFocus > -1) {
        if (items) items[currentFocus].click();
      }
    }
  });

  let currentFocus = -1;

  function displaySuggestions(suggestions) {
    closeAllLists();
    for (let i = 0; i < suggestions.length; i++) {
      const item = document.createElement("div");
      item.innerHTML =
        `<img src="images/svg/${suggestions[
          i
        ].alpha3.toLowerCase()}.svg" alt="${suggestions[i].name}">` +
        `<strong>${suggestions[i].name.substr(
          0,
          input.value.length
        )}</strong>` +
        suggestions[i].name.substr(input.value.length);
      item.innerHTML += `<input type='hidden' value='${suggestions[i].name}'>`;

      item.addEventListener("click", function () {
        input.value = this.getElementsByTagName("input")[0].value;
        closeAllLists();
      });

      list.appendChild(item);
    }
  }

  function addActive(items) {
    if (!items) return false;
    removeActive(items);
    if (currentFocus >= items.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = items.length - 1;
    items[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(items) {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists(elmnt) {
    const items = document.getElementsByClassName("autocomplete-items");
    for (let i = 0; i < items.length; i++) {
      while (items[i].firstChild) {
        items[i].removeChild(items[i].firstChild);
      }
    }
  }

  document.addEventListener("click", function (e) {
    if (e.target !== input) {
      closeAllLists(e.target);
    }
  });
});
