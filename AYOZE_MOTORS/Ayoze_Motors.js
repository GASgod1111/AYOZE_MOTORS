const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });
    burger.classList.toggle('toggle');
  });
};
navSlide();
const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const searchInput = document.querySelector('#searchForm input[type="text"]');
  const searchTerm = searchInput.value.trim();
  alert(`Searching for: ${searchTerm}`);
  const carUrls = {
    car1: 'https://www.google.com/search?q=a+url+for+all+the+car+pictures&tbm=isch&source=univ&fir=3iZwWmoB3rEbzM%252Ch5o2H4lFM28KrM%252C_%253BhNGnpn7DHIRAMM%252CkNN78RcoLWbQbM%252C_%253B2TNTMoX_sf-_AM%252CpexCxKQSr2TtXM%252C_%253BdOK_9868VDFQmM%252CTj56F7qBhckKYM%252C_%253BUjXWUGRI3A09IM%252CTj56F7qBhckKYM%252C_%253Br116koXHr_H--M%252C9_3ihlq4gNzOHM%252C_%253BI2nYZDlsg9dAtM%252CboalEM1-wV3GtM%252C_%253BK0tDf-G_URDZmM%252CSAT7jSghFpqMMM%252C_%253BOPB8COLm9oFRnM%252C9_3ihlq4gNzOHM%252C_%253B81RI3iZkirwWUM%252CTj56F7qBhckKYM%252C_&usg=AI4_-kSj7S9cXAhnONiOgyqr6ojjONgRFA&sa=X&ved=2ahUKEwiUotPl3P__AhXki_0HHQbGDYAQjJkEegQIHxAC&biw=960&bih=941&dpr=1',
    car2: 'https://www.google.com/'
  };
  if (searchTerm in carUrls) {
    window.location.href = carUrls[searchTerm];
  } else {
    alert('Car not found. Please try again.');
  }
  searchInput.value = '';
});
const contactButtons = document.querySelectorAll('.contact-btn');
contactButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const carTitle = this.previousElementSibling.textContent;
    const sellerEmail = 'reagan.peter@student';
    window.location.href = `mailto:${sellerEmail}?subject=Inquiry%20for%20${carTitle}`;
  });
});
const priceElement = document.getElementById("price");
const transmissionElement = document.getElementById("transmission-details");
const horsepowerElement = document.getElementById("horsepower-details");
const torqueElement = document.getElementById("torque-details");
const updateButton = document.getElementById("update-button");
updateButton.addEventListener("click", () => {
  priceElement.textContent = "$141,990";
  transmissionElement.textContent = "7-speed Dual-clutch transmission";
  horsepowerElement.textContent = "600 hp @7,000 rpm";
  torqueElement.textContent = "481 lb-ft @4,000-6,000 rpm";
});
