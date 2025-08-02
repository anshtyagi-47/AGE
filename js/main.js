// Collapsible functionality for other sections
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    // Close all other collapsibles before opening the new one
    collapsibles.forEach((innerItem) => {
      if (innerItem !== this) {
        innerItem.classList.remove("collapsible--expanded");
      }
    });
    // Toggle the clicked collapsible
    this.classList.toggle("collapsible--expanded");
  })
);

// Hamburger menu functionality
const toggler = document.querySelector(".nav__toggler");
const navList = document.querySelector("#nav-list");

// Add click event to the hamburger menu
toggler.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent event bubbling
  navList.classList.toggle("show");
  toggler.classList.toggle("active");
});

// Close menu when clicking outside
window.addEventListener("click", (e) => {
  if (!e.target.closest(".nav") && navList.classList.contains("show")) {
    navList.classList.remove("show");
    toggler.classList.remove("active");
  }
});
const togglerIcon = document.querySelector(".fa-bars");
togglerIcon.addEventListener("click", function () {
  this.classList.toggle("rotated");
});
