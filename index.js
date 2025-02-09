// Nastavení pro automatický posuv slidu (Slider)
let currentSlide = 0;
const slides = document.querySelectorAll(".slider .slide");
const slidesContainer = document.querySelector(".slides");
const totalSlides = slides.length;

/**
 * Posunutí na další slide
 */
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides; // Cyklování přes slidy
  updateSliderPosition();
}

/**
 * Funkce pro aktualizaci pozice slidu
 */
function updateSliderPosition() {
  slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Automatické posouvání slidu každé 4 sekundy
setInterval(nextSlide, 4000);

// Navigační lišta a efekt ztmavnutí při scrollování
const header = document.querySelector("header");

/**
 * Funkce pro kontrolu pozice scrollu a přidání efektu ztmavnutí
 */
function handleScroll() {
  if (window.scrollY > 250) {
    // Ztmavnutí až po posunutí o 250px
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

// Připojení funkce ke scroll události
window.addEventListener("scroll", handleScroll);
