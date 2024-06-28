
//const carouselDiv =  document.querySelector(".carousel");
export function moveSlides(){
    const slide1 = document.querySelector(".carouselContainer .slide1");
    const slide2 = document.querySelector(".carouselContainer .slide2");
    const slide3 = document.querySelector(".carouselContainer .slide3");

    const slides = [slide1, slide2];

    if(slide3) {
        slides.push(slide3);
    }
    


    let currentIndex = 0;

    const carouselContainer = document.querySelector('.carouselContainer');

    function updateCarousel() {
        const offset = -currentIndex * 100;
        if(carouselContainer) {
            carouselContainer.style.transform = `translateX(${offset}%)`;
        }
    }

    function moveToNextSlide() {
        
        currentIndex = (currentIndex < slides.length-1) ? currentIndex + 1 : 0;
        updateCarousel();

    }

    setInterval(moveToNextSlide, 4000);
    }
