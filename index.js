document.addEventListener("DOMContentLoaded", () => {
    let index = 0;
    const slides = document.querySelectorAll(".slider .slide");
    const sliderContainer = document.querySelector(".slides");
    const totalSlides = slides.length;

    const updateSlide = () => {
        index = (index + 1) % totalSlides;
        sliderContainer?.style.setProperty("transform", `translateX(-${index * 100}%)`);
    };

    if (totalSlides > 1) {
        setInterval(updateSlide, 4000);
    }

    // Intersection Observer pro sekci pizzy
    const pizzaSections = document.querySelectorAll(".pizza-section");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add("in-view");
            });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    pizzaSections.forEach((section) => observer.observe(section));

    // Správa cookie banneru
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

    acceptAllCookies?.addEventListener("click", () => {
        localStorage.setItem("cookiesConsent", "all");
        cookieBanner.style.display = "none";
    });

    rejectAllCookies?.addEventListener("click", () => {
        localStorage.setItem("cookiesConsent", "none");
        cookieBanner.style.display = "none";
    });

    cookieSettings?.addEventListener("click", () => {
        cookieSettingsModal.style.display = "block";
    });

    saveCookies?.addEventListener("click", () => {
        const analytics = document.getElementById("analyticsCookies")?.checked || false;
        const marketing = document.getElementById("marketingCookies")?.checked || false;
        localStorage.setItem("cookiesConsent", JSON.stringify({ analytics, marketing }));
        cookieSettingsModal.style.display = "none";
        cookieBanner.style.display = "none";
    });

    closeSettings?.addEventListener("click", () => {
        cookieSettingsModal.style.display = "none";
    });

    // Zvýraznění aktuálního dne v otevírací době
    const today = new Date().getDay();
    document.querySelectorAll(".opening-hours .day").forEach((day) => {
        if (parseInt(day.dataset.day) === today) {
            day.classList.add("highlight");
        }
    });

    // Skrytí loga při scrollování
    const logo = document.querySelector(".logo");
    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;
        if (currentScroll > 250 && currentScroll > lastScrollTop) {
            logo?.classList.add("hidden");
        } else if (currentScroll <= 200) {
            logo?.classList.remove("hidden");
        }
        lastScrollTop = Math.max(0, currentScroll);
    });

    // Nastavení emailového odkazu
    const email = "sanmarino@pizzakladno.cz";
    const emailLink = document.getElementById("emailLink");
    if (emailLink) {
        emailLink.href = `mailto:${email}`;
        emailLink.textContent = email;
    }
});
