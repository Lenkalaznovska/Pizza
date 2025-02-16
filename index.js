document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0,
    slides = document.querySelectorAll(".slider .slide"),
    slidesContainer = document.querySelector(".slides"),
    totalSlides = slides.length;
  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSliderPosition();
  }
  function updateSliderPosition() {
    slidesContainer &&
      (slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`);
  }
  totalSlides > 1 && setInterval(nextSlide, 4000);
  const header = document.querySelector("header");
  function handleScroll() {
    header &&
      (window.scrollY > 250
        ? header.classList.add("scrolled")
        : header.classList.remove("scrolled"));
  }
  window.addEventListener("scroll", handleScroll);
  const sections = document.querySelectorAll(".text-container"),
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.isIntersecting &&
            (entry.target.classList.add("section-visible"),
            observer.unobserve(entry.target));
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
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
});
document.addEventListener("DOMContentLoaded", function () {
  let today = new Date().getDay(),
    days = document.querySelectorAll(".opening-hours .day");
  days.forEach((day) => {
    if (parseInt(day.dataset.day) === today) {
      day.classList.add("highlight");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector(".logo");
  let lastScrollTop = 0;
  window.addEventListener("scroll", function () {
    let currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    currentScroll > 250 && currentScroll > lastScrollTop
      ? logo.classList.add("hidden")
      : currentScroll <= 200 && logo.classList.remove("hidden");
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
});
function animateNumbers(element, start, end, duration) {
  let range = end - start,
    current = start,
    increment = range / (duration / 20),
    timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current) + "+";
    }, 20);
}
function isElementInViewport(el) {
  let rect = el.getBoundingClientRect();
  return (
    rect.top < window.innerHeight &&
    rect.bottom > 0 &&
    rect.left < window.innerWidth &&
    rect.right > 0
  );
}
function checkAndAnimate() {
  let onasSection = document.getElementById("onas");
  if (isElementInViewport(onasSection)) {
    animateNumbers(document.getElementById("foodora-reviews"), 0, 1000, 2000);
    animateNumbers(document.getElementById("google-reviews"), 0, 500, 2000);
    window.removeEventListener("scroll", checkAndAnimate);
    window.removeEventListener("resize", checkAndAnimate);
  }
}
window.addEventListener("scroll", checkAndAnimate);
window.addEventListener("resize", checkAndAnimate);

if (window.location.href == "https://speedlo.cz/app/sanmarino/kladno/wp/home") {
  window.location.replace("https://www.pizzakladno.cz/objednani");
}
