const carouselDiv =  document.querySelector(".carousel");

const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
const slide3 = document.querySelector(".slide3");

const slides = [slide1, slide2, slide3];

let currentIndex = 0;

const carouselContainer = document.querySelector('.carousel-container');

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

function moveToNextSlide() {
    
    currentIndex = (currentIndex < slides.length-1) ? currentIndex + 1 : 0;
    updateCarousel();

}

setInterval(moveToNextSlide, 3000);

