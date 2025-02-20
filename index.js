document.addEventListener("DOMContentLoaded", function() {
    // Přesměrování z /gdpr.html na http://www.pizza.pizzakladno.cz/gdpr
    if (window.location.pathname === '/gdpr.html') {
        window.location.replace('http://www.pizza.pizzakladno.cz/gdpr');
    }

    // Přesměrování z /obchodni-podminky.html na http://www.pizza.pizzakladno.cz/obchodni-podminky
    if (window.location.pathname === '/obchodni-podminky.html') {
        window.location.replace('http://www.pizza.pizzakladno.cz/obchodni-podminky');
    }
});

let e = 0, 
        t = document.querySelectorAll(".slider .slide"),
        o = document.querySelector(".slides"),
        n = t.length;

    function c() {
        e = (e + 1) % n;
        o && (o.style.transform = `translateX(-${e * 100}%)`);
    }

    if (n > 1) setInterval(c, 4000);

    let i = document.querySelectorAll(".pizza-section"),
        s = new IntersectionObserver(e => {
            e.forEach(e => {
                if (e.isIntersecting) e.target.classList.add("in-view");
            });
        }, { threshold: .1, rootMargin: "0px 0px -50px 0px" });

    i.forEach(e => s.observe(e));

    let l = document.getElementById("cookieBanner"),
        d = document.getElementById("cookieSettingsModal"),
        r = document.getElementById("acceptAllCookies"),
        a = document.getElementById("rejectAllCookies"),
        m = document.getElementById("cookieSettings"),
        u = document.getElementById("saveCookies"),
        y = document.getElementById("closeSettings");

    if (l && !localStorage.getItem("cookiesConsent")) {
        l.style.display = "block";
    }

    r && r.addEventListener("click", function() {
        localStorage.setItem("cookiesConsent", "all");
        l.style.display = "none";
    });

    a && a.addEventListener("click", function() {
        localStorage.setItem("cookiesConsent", "none");
        l.style.display = "none";
    });

    m && d && m.addEventListener("click", function() {
        d.style.display = "block";
    });

    u && u.addEventListener("click", function() {
        let e = document.getElementById("analyticsCookies")?.checked || false,
            t = document.getElementById("marketingCookies")?.checked || false;
        localStorage.setItem("cookiesConsent", JSON.stringify({ analytics: e, marketing: t }));
        d.style.display = "none";
        l.style.display = "none";
    });

    y && y.addEventListener("click", function() {
        d.style.display = "none";
    });

    let v = new Date().getDay(),
        g = document.querySelectorAll(".opening-hours .day");

    g.forEach(e => {
        if (parseInt(e.dataset.day) === v) e.classList.add("highlight");
    });

    let p = document.querySelector(".logo"),
        f = 0;

    window.addEventListener("scroll", function() {
        let e = window.pageYOffset || document.documentElement.scrollTop;
        if (e > 250 && e > f) p.classList.add("hidden");
        else if (e <= 200) p.classList.remove("hidden");
        f = e <= 0 ? 0 : e;
    });

    let h = "sanmarino@pizzakladno.cz",
        k = document.getElementById("emailLink");

    k && (k.href = `mailto:${h}`, k.textContent = h);
});
