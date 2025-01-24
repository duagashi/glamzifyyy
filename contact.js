
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.dg-gallery-item');
    const slider = document.querySelector('.dg-gallery-slider');
    const totalSlides = slides.length;

    
    if (index >= totalSlides) currentSlide = 0;
    else if (index < 0) currentSlide = totalSlides - 1;
    else currentSlide = index;

   
    const offset = -currentSlide * 100; 
    slider.style.transform = `translateX(${offset}%)`;
}

function prevImage() {
    showSlide(currentSlide - 1);
}

function nextImage() {
    showSlide(currentSlide + 1);
}


document.addEventListener('DOMContentLoaded', () => showSlide(currentSlide));

