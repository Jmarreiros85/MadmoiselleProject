// ==========================
// MENU MOBILE
// ==========================

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {

    menuBtn.addEventListener("click", () => {

        menu.classList.toggle("show");

    });

}

// ==========================
// HEADER AO FAZER SCROLL
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(255,255,255,.98)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    } else {

        header.style.background = "rgba(255,255,255,.92)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.05)";

    }

});

// ==========================
// SCROLL SUAVE PARA LINKS
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

        menu.classList.remove("show");

    });

});

// ==========================
// ANIMAÇÃO AO FAZER SCROLL
// ==========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// ==========================
// EFEITO NOS CARDS
// ==========================

document.querySelectorAll(".projects article, .service").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});

// ==========================
// BOTÃO "BACK TO TOP"
// ==========================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "top-button";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});