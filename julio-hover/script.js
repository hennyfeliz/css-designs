const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    navLinks.forEach((otherLink) => {
      if (otherLink !== link) {
        otherLink.style.opacity = "0.4";
      }
    });
    link.style.opacity = "1";
  });

  link.addEventListener("mouseout", () => {
    navLinks.forEach((otherLink) => {
      otherLink.style.opacity = "1";
    });
  });
});
