// Start Carousel Sliders on Each Card
const swiper = new Swiper('.mini-slider', {
    loop: true,
    pagination: { el: '.swiper-pagination', clickable: true },
});

// Mobile Menu Toggle Script
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Simple Visual Category Filtering Layout Logic
function filterCategory(category) {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}
