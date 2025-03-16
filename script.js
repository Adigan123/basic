let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    
    if (index >= slides.length) {
        currentSlide = 0; // Kembali ke slide pertama
    } else if (index < 0) {
        currentSlide = slides.length - 1; // Kembali ke slide terakhir
    } else {
        currentSlide = index; // Tetap di slide yang sesuai
    }

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });
}

// Fungsi untuk mengubah slide
function changeSlide(direction) {
    showSlide(currentSlide + direction);
}
