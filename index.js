document.addEventListener("DOMContentLoaded", function () {
  /*** SLIDER ***/
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slider .slide");
  const slidesContainer = document.querySelector(".slides");
  const totalSlides = slides.length;

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSliderPosition();
  }

  function updateSliderPosition() {
    if (slidesContainer) {
      slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }

  if (totalSlides > 1) {
    setInterval(nextSlide, 4000);
  }

  /*** HLAVIČKA PŘI SCROLLU ***/
  const header = document.querySelector("header");

  function handleScroll() {
    if (header) {
      if (window.scrollY > 250) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  }

  window.addEventListener("scroll", handleScroll);

  /*** ANIMACE SEKCÍ ***/
  const sections = document.querySelectorAll(".text-container");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("section-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  sections.forEach((section) => observer.observe(section));

  /*** TLAČÍTKO PRO NÁVRAT NAHORU ***/
  const scrollToTopButton = document.getElementById("scrollToTop");

  if (scrollToTopButton) {
    window.addEventListener("scroll", () => {
      scrollToTopButton.style.display = window.scrollY > 20 ? "block" : "none";
    });

    scrollToTopButton.addEventListener("click", () => {
      scrollToTopButton.style.transform = "scale(1.2)";
      scrollToTopButton.style.transition = "transform 0.5s";
      window.scrollTo({ top: 0, behavior: "smooth" });

      setTimeout(() => {
        scrollToTopButton.style.transform = "scale(1)";
      }, 500);
    });
  }

  /*** COOKIE BANNER ***/
  const cookieBanner = document.getElementById("cookieBanner");
  const cookieSettingsModal = document.getElementById("cookieSettingsModal");
  const acceptAllCookies = document.getElementById("acceptAllCookies");
  const rejectAllCookies = document.getElementById("rejectAllCookies");
  const cookieSettings = document.getElementById("cookieSettings");
  const saveCookies = document.getElementById("saveCookies");
  const closeSettings = document.getElementById("closeSettings");

  if (cookieBanner && !localStorage.getItem("cookiesConsent")) {
    cookieBanner.style.display = "block";
  }

  if (acceptAllCookies) {
    acceptAllCookies.addEventListener("click", function () {
      localStorage.setItem("cookiesConsent", "all");
      cookieBanner.style.display = "none";
    });
  }

  if (rejectAllCookies) {
    rejectAllCookies.addEventListener("click", function () {
      localStorage.setItem("cookiesConsent", "none");
      cookieBanner.style.display = "none";
    });
  }

  if (cookieSettings && cookieSettingsModal) {
    cookieSettings.addEventListener("click", function () {
      cookieSettingsModal.style.display = "block";
    });
  }

  if (saveCookies) {
    saveCookies.addEventListener("click", function () {
      const analytics =
        document.getElementById("analyticsCookies")?.checked || false;
      const marketing =
        document.getElementById("marketingCookies")?.checked || false;
      localStorage.setItem(
        "cookiesConsent",
        JSON.stringify({ analytics, marketing })
      );
      cookieSettingsModal.style.display = "none";
      cookieBanner.style.display = "none";
    });
  }

  if (closeSettings) {
    closeSettings.addEventListener("click", function () {
      cookieSettingsModal.style.display = "none";
    });
  }
});
