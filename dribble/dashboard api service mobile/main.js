document.addEventListener("DOMContentLoaded", async function () {
  const response = await fetch("staging-sections.json");
  const sections = await response.json();

  const dropdownIcon = document.getElementById("dropdown-icon");
  const dropdownList = document.getElementById("staging-section-list");
  const dropdownLabel = document.getElementById("staging-section-label");

  // Populate the dropdown list
  sections.forEach((section) => {
    const item = document.createElement("div");
    item.textContent = section.name;
    item.addEventListener("click", function () {
      dropdownLabel.textContent = `Staging: ${section.name}`;
      dropdownList.style.display = "none";
    });
    dropdownList.appendChild(item);
  });

  // Toggle the dropdown
  dropdownIcon.addEventListener("click", function () {
    dropdownList.style.display =
      dropdownList.style.display === "block" ? "none" : "block";
  });

  // Close the dropdown when clicking outside of it
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".staging-section")) {
      dropdownList.style.display = "none";
    }
  });
});
