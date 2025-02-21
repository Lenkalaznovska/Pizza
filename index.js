document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const slider = document.querySelector(".slides");
  let currentIndex = 0;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function updateSliderPosition() {
    if (slidesContainer) {
      slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }

  setInterval(nextSlide, 4000); // Každé 4 sekundy přepne na další snímek
});

  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    // Kód pro zatmavování je odstraněn
  });

  const sections = document.querySelectorAll(".pizza-section"),
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

  sections.forEach((section) => observer.observe(section));

  const cookieBanner = document.getElementById("cookieBanner"),
    cookieSettingsModal = document.getElementById("cookieSettingsModal"),
    acceptAllCookies = document.getElementById("acceptAllCookies"),
    rejectAllCookies = document.getElementById("rejectAllCookies"),
    cookieSettings = document.getElementById("cookieSettings"),
    saveCookies = document.getElementById("saveCookies"),
    closeSettings = document.getElementById("closeSettings");

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
          document.getElementById("analyticsCookies")?.checked || false,
        marketing =
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

  let today = new Date().getDay(),
    days = document.querySelectorAll(".opening-hours .day");
  days.forEach((day) => {
    if (parseInt(day.dataset.day) === today) {
      day.classList.add("highlight");
    }
  });

  const logo = document.querySelector(".logo");
  let lastScrollTop = 0;
  window.addEventListener("scroll", function () {
    let currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > 250 && currentScroll > lastScrollTop) {
      logo.classList.add("hidden");
    } else if (currentScroll <= 200) {
      logo.classList.remove("hidden");
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });

  const email = "sanmarino@pizzakladno.cz",
    emailLink = document.getElementById("emailLink");
  if (emailLink) {
    emailLink.href = `mailto:${email}`;
    emailLink.textContent = email;
  }
});
