
const dropdownButton = document.getElementById("dropdown-button");
const dropdownMenu = document.getElementById("dropdown-menu");

dropdownButton.addEventListener("click", function(event) {
    event.stopPropagation(); // Prevent event propagation
    if (dropdownMenu.classList.contains("hidden")) {
        dropdownMenu.classList.remove("hidden");
    } else {
        dropdownMenu.classList.add("hidden");
    }
});

// Close the dropdown if the user clicks outside of it
document.addEventListener("click", function(event) {
    if (event.target !== dropdownButton && event.target !== dropdownMenu) {
        dropdownMenu.classList.add("hidden");
    }
});

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuButton.addEventListener("click", function () {
    console.log("clicked")
      mobileMenu.classList.toggle("hidden");
  });
});
