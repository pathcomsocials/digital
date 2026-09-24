//javascript
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. INITIALIZE MASTER HERO SLIDESHOW
    const heroSwiper = new Swiper('.hero-swiper', {
        loop: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.hero-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.hero-next',
            prevEl: '.hero-prev',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    });

    // 2. INITIALIZE INDEPENDENT CARD MINI IMAGES CAROUSELS
    const cardSliders = document.querySelectorAll('.mini-slider');
    cardSliders.forEach((sliderElement) => {
        new Swiper(sliderElement, {
            loop: true,
            pagination: {
                el: sliderElement.querySelector('.swiper-pagination'),
                clickable: true,
            },
        });
    });

    // 3. WORKING HAMBURGER TOGGLE LOGIC
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenuLinks = document.getElementById('nav-menu');

    if (mobileMenuBtn && navMenuLinks) {
        mobileMenuBtn.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevents instant closing triggers
            navMenuLinks.classList.toggle('active');
        });

        // Close navigation menu automatically when any clean target hyperlink is selected
        const navLinks = navMenuLinks.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenuLinks.classList.remove('active');
            });
        });

        // Close mobile dropdown if user clicks completely outside navigation zones
        document.addEventListener('click', () => {
            navMenuLinks.classList.remove('active');
        });
    }
});

// 4. BROWSE BY CATEGORIES FILTER ENGINE
function filterCategory(category, activeCardElement) {
    // Switch active structural display highlights inside classifications container row
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => card.classList.remove('active'));
    
    if (activeCardElement) {
        activeCardElement.classList.add('active');
    }

    // Process live product layout card transformations smoothly
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        const productCategory = card.getAttribute('data-category');
        if (category === 'all' || productCategory === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}
