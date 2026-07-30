// ==========================================
// MENU MOBILE
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("show");

    menuBtn.innerHTML = nav.classList.contains("show")
        ? "✕"
        : "☰";

});

// Fecha o menu ao clicar num link

document.querySelectorAll("#nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("show");

        menuBtn.innerHTML = "☰";

    });

});

// ==========================================
// HEADER AO FAZER SCROLL
// ==========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(255,248,250,.98)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    } else {

        header.style.background = "rgba(255,248,250,.90)";
        header.style.boxShadow = "none";

    }

});

// ==========================================
// SCROLL SUAVE
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior:"smooth",
            block:"start"

        });

    });

});

// ==========================================
// ANIMAÇÕES AO SCROLL
// ==========================================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},{

    threshold:0.15

});

document.querySelectorAll(".hidden").forEach(section=>{

    observer.observe(section);

});

// ==========================================
// HOVER DOS CARDS
// ==========================================

document.querySelectorAll(".project-card, .service-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0)";

    });

});

// ==========================================
// BOTÃO BACK TO TOP
// ==========================================

const topButton=document.createElement("button");

topButton.className="top-button";

topButton.innerHTML="↑";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topButton.classList.add("show");

    }else{

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

// ==========================================
// EFEITO PARALLAX HERO
// ==========================================

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    const offset=window.pageYOffset;

    hero.style.backgroundPositionY=offset*0.5+"px";

});

// ==========================================
// BOTÕES
// ==========================================

document.querySelectorAll(".btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-4px) scale(1.03)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0) scale(1)";

    });

});

// ==========================================
// FORMULÁRIO
// ==========================================

const form=document.querySelector("form");

if(form){

    form.addEventListener("submit",(e)=>{

        e.preventDefault();

        alert("Mensagem enviada com sucesso!");

        form.reset();

    });

}

// ==========================================
// ANO AUTOMÁTICO NO FOOTER
// ==========================================

const footer=document.querySelector(".footer-bottom");

if(footer){

    footer.innerHTML=`© ${new Date().getFullYear()} Mademoiselle Diary. Todos os direitos reservados.`;

}