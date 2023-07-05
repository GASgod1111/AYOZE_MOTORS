// script.js

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
  
    // Toggle nav
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
  
      // Animate links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      });
  
      // Burger animation
      burger.classList.toggle('toggle');
    });
  };
  
  navSlide();
  // JavaScript code for the search functionality
const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const searchInput = document.querySelector('#searchForm input[type="text"]');
  const searchTerm = searchInput.value.trim();

  // Perform search logic here

  // Clear the search input field
  searchInput.value = '';
});

// JavaScript code for the contact button
const contactButtons = document.querySelectorAll('.contact-btn');
contactButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const carTitle = this.previousElementSibling.textContent;
    const sellerEmail = 'reagan.peter@student';

    // Send email logic here using sellerEmail and carTitle
    // You can use the mailto: protocol to open the user's default email client
    window.location.href = `mailto:${sellerEmail}?subject=Inquiry%20for%20${carTitle}`;
  });
});
