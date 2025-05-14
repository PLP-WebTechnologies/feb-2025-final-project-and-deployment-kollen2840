// Simple carousel functionality
const carousel = document.querySelector('.carousel');
let scrollAmount = 0;

setInterval(() => {
    scrollAmount += 200;
    if (scrollAmount >= carousel.scrollWidth) {
        scrollAmount = 0;
    }
    carousel.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}, 3000);