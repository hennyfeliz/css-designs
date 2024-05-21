document
  .querySelectorAll(".dropdown > ul > li > .item-container")
  .forEach((container) => {
    container.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevents the click event from bubbling up
      const arrow = container.querySelector(".arrow");
      const submenu = container.nextElementSibling;

      arrow.classList.toggle("arrow-rotate");
      submenu.classList.toggle("submenu-active");
    });
  });

// Add this to prevent submenu items from closing the menu
document.querySelectorAll(".submenu > li").forEach((submenuItem) => {
  submenuItem.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevents the click event from bubbling up
  });
});

document.addEventListener("click", () => {
  document.querySelectorAll(".submenu-active").forEach((submenu) => {
    submenu.classList.remove("submenu-active");
  });
  document.querySelectorAll(".arrow-rotate").forEach((arrow) => {
    arrow.classList.remove("arrow-rotate");
  });
});
