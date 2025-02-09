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

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".text-container");
  const scrollToTopButton = document.getElementById("scrollToTop");

  const options = {
    root: null,
    threshold: 0.1, // Aktivuje se, když 10% sekce je viditelných
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("section-visible"); // Přidá třídu pro zobrazení
        observer.unobserve(entry.target); // Přestane sledovat
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  sections.forEach((section) => {
    observer.observe(section); // Sleduje sekce
  });

  // Scroll to top button functionality
  window.addEventListener("scroll", () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });

  scrollToTopButton.addEventListener("click", () => {
    scrollToTopButton.style.transform = "scale(1.0)"; // Resetování scale pro kliknutí
    scrollToTopButton.style.transition = "transform 0.5s"; // Přechod na tlačítku
    scrollToTopButton.style.transform = "scale(1.2)"; // Zvětšení při kliknutí

    // Plynulý pohyb nahoru
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Plynulý scroll
    });
  });
});
