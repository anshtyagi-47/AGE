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