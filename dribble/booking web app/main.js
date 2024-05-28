document.addEventListener("DOMContentLoaded", () => {
  const houseContainer = document.querySelector(".house-container");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const scrollAmount = 300; // Ajusta esto según la cantidad de desplazamiento deseada

  prevButton.addEventListener("click", () => {
    houseContainer.scrollBy({
      top: 0,
      left: -scrollAmount,
      behavior: "smooth",
    });
  });

  nextButton.addEventListener("click", () => {
    houseContainer.scrollBy({
      top: 0,
      left: scrollAmount,
      behavior: "smooth",
    });
  });
});
