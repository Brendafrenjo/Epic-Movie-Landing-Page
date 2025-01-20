// Mobile Navbar Toggle
const navbarToggle = document.getElementById("navbar-toggle");
const navbarLinks = document.getElementById("navbar-links");
navbarToggle.addEventListener("click", () => {
  navbarLinks.classList.toggle("hidden");
});

// Mobile Dropdown Toggle
const mobileDropdownToggle = document.getElementById("mobile-dropdown-toggle");
const mobileDropdownMenu = document.getElementById("mobile-dropdown-menu");
mobileDropdownToggle.addEventListener("click", () => {
  mobileDropdownMenu.classList.toggle("hidden");
});

// Desktop Dropdown Toggle
const desktopDropdownButton = document.querySelector(
  ".hidden.lg\\:flex .relative button"
);
const desktopDropdownMenu = document.querySelector(
  ".hidden.lg\\:flex .relative .absolute"
);
desktopDropdownButton.addEventListener("click", () => {
  desktopDropdownMenu.classList.toggle("hidden");
});

const scrollContainer = document.getElementById("movie-container");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Function to scroll left
const scrollLeft = () => {
  scrollContainer.scrollBy({
    left: -200, // Adjust the scroll distance as needed
    behavior: "smooth",
  });
};

// Function to scroll right
const scrollRight = () => {
  scrollContainer.scrollBy({
    left: 200, // Adjust the scroll distance as needed
    behavior: "smooth",
  });
};

prevButton.addEventListener("click", scrollLeft);
nextButton.addEventListener("click", scrollRight);
