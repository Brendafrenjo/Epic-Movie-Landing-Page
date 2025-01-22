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

//Movie Scrolling Logic
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

// Attach event listeners
prevButton.addEventListener("click", scrollLeft);
nextButton.addEventListener("click", scrollRight);

//Series Scrolling Logic
const scrollingContainer = document.getElementById("series-container");
const previousButton = document.getElementById("prev-button");
const nextingButtonSeries = document.getElementById("next-button");

// Function to scroll left
const scrollLeftSeries = () => {
  scrollingContainer.scrollBy({
    left: -200, // Adjust the scroll distance as needed
    behavior: "smooth",
  });
};

// Function to scroll right
const scrollRightSeries = () => {
  scrollingContainer.scrollBy({
    left: 200, // Adjust the scroll distance as needed
    behavior: "smooth",
  });
};

// Attach event listeners
previousButton.addEventListener("click", scrollLeftSeries);
nextingButtonSeries.addEventListener("click", scrollRightSeries);

//Gallery Section
const photoFolder = 'gallery/'; 
    const photos = [
      { src: `${photoFolder}Photo 1.jpg`, title: "Photo 1" },
      { src: `${photoFolder}Photo 2.jpg`, title: "Photo 2" },
      { src: `${photoFolder}Photo 3.jpg`, title: "Photo 3" },
      { src: `${photoFolder}Photo 4.jpg`, title: "Photo 4" },
      { src: `${photoFolder}Photo 5.jpg`, title: "Photo 5" },
      { src: `${photoFolder}Photo 6.jpg`, title: "Photo 6" },
      { src: `${photoFolder}Photo 7.jpg`, title: "Photo 7" },
      { src: `${photoFolder}Photo 8.jpg`, title: "Photo 8" },
      { src: `${photoFolder}Photo 9.jpg`, title: "Photo 9" },
      { src: `${photoFolder}Photo 10.jpg`, title: "Photo 10" },
      { src: `${photoFolder}Photo 11.jpg`, title: "Photo 11" },
      { src: `${photoFolder}Photo 12.jpg`, title: "Photo 12" },
      { src: `${photoFolder}Photo 13.jpg`, title: "Photo 13" },
      { src: `${photoFolder}Photo 14.jpg`, title: "Photo 14" },
    ];

    const gallery = document.getElementById('gallery');

    photos.forEach(photo => {
      const item = document.createElement('div');
      item.classList.add('gallery-item');

      const img = document.createElement('img');
      img.src = photo.src;
      img.alt = photo.title;

      const caption = document.createElement('div');
      caption.classList.add('caption');
      caption.textContent = photo.title;

      item.appendChild(img);
      item.appendChild(caption);
      gallery.appendChild(item);
    });
