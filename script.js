document.addEventListener('DOMContentLoaded', () => {
    // Initialize Home Page Hero Slideshow
    const heroSwiper = new Swiper('.hero-swiper', {
        loop: true,
        autoplay: { delay: 4000, disableOnInteraction: false },
        pagination: { el: '.hero-pagination', clickable: true },
        navigation: { nextEl: '.hero-next', prevEl: '.hero-prev' },
    });

    // Initialize Card Mini Image Sliders
    document.querySelectorAll('.mini-slider').forEach((slider) => {
        new Swiper(slider, {
            loop: true,
            pagination: { el: slider.querySelector('.swiper-pagination'), clickable: true },
        });
    });

    // Mobile Hamburger Menu Click Actions
    const menuBtn = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-menu');
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
        });
        document.addEventListener('click', () => navLinks.classList.remove('active'));
    }
});

// Category Filtering Engine Layout
function filterCategory(category, element) {
    document.querySelectorAll('.category-card').forEach(card => card.classList.remove('active'));
    if (element) element.classList.add('active');
    
    document.querySelectorAll('.product-card').forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}
