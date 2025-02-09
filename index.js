document.addEventListener("DOMContentLoaded",function(){let currentSlide=0,slides=document.querySelectorAll(".slider .slide"),slidesContainer=document.querySelector(".slides"),totalSlides=slides.length;function nextSlide(){currentSlide=(currentSlide+1)%totalSlides;updateSliderPosition()}function updateSliderPosition(){slidesContainer&&(slidesContainer.style.transform=`translateX(-${currentSlide*100}%)`)}totalSlides>1&&setInterval(nextSlide,4000);const header=document.querySelector("header");function handleScroll(){header&&(window.scrollY>250?header.classList.add("scrolled"):header.classList.remove("scrolled"))}window.addEventListener("scroll",handleScroll);const sections=document.querySelectorAll(".text-container"),observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{entry.isIntersecting&&(entry.target.classList.add("section-visible"),observer.unobserve(entry.target))})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});sections.forEach(section=>observer.observe(section));const scrollToTopButton=document.getElementById("scrollToTop");if(scrollToTopButton){window.addEventListener("scroll",()=>{scrollToTopButton.style.display=window.scrollY>20?"block":"none"});scrollToTopButton.addEventListener("click",()=>{scrollToTopButton.style.transform="scale(1.2)",scrollToTopButton.style.transition="transform 0.5s",window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{scrollToTopButton.style.transform="scale(1)"},500)})}const cookieBanner=document.getElementById("cookieBanner"),cookieSettingsModal=document.getElementById("cookieSettingsModal"),acceptAllCookies=document.getElementById("acceptAllCookies"),rejectAllCookies=document.getElementById("rejectAllCookies"),cookieSettings=document.getElementById("cookieSettings"),saveCookies=document.getElementById("saveCookies"),closeSettings=document.getElementById("closeSettings");cookieBanner&&!localStorage.getItem("cookiesConsent")&&(cookieBanner.style.display="block");acceptAllCookies&&acceptAllCookies.addEventListener("click",function(){localStorage.setItem("cookiesConsent","all"),cookieBanner.style.display="none"});rejectAllCookies&&rejectAllCookies.addEventListener("click",function(){localStorage.setItem("cookiesConsent","none"),cookieBanner.style.display="none"});cookieSettings&&cookieSettingsModal&&cookieSettings.addEventListener("click",function(){cookieSettingsModal.style.display="block"});saveCookies&&saveCookies.addEventListener("click",function(){const analytics=document.getElementById("analyticsCookies")?.checked||!1,marketing=document.getElementById("marketingCookies")?.checked||!1;localStorage.setItem("cookiesConsent",JSON.stringify({analytics,marketing})),cookieSettingsModal.style.display="none",cookieBanner.style.display="none"});closeSettings&&closeSettings.addEventListener("click",function(){cookieSettingsModal.style.display="none"}})}),document.addEventListener("DOMContentLoaded",function(){let today=new Date().getDay(),days=document.querySelectorAll(".opening-hours .day");days.forEach(day=>{parseInt(day.dataset.day)===today&&day.classList.add("highlight")})}),document.addEventListener("DOMContentLoaded",function(){const logo=document.querySelector(".logo");let lastScrollTop=0;window.addEventListener("scroll",function(){let currentScroll=window.pageYOffset||document.documentElement.scrollTop;currentScroll>250&&currentScroll>lastScrollTop?logo.classList.add("hidden"):currentScroll<=200&&logo.classList.remove("hidden"),lastScrollTop=currentScroll<=0?0:currentScroll})});
