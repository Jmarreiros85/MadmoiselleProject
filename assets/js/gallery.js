// ==========================
// GALLERY LIGHTBOX
// ==========================

const images = document.querySelectorAll(".gallery-img");

// Criar lightbox
const lightbox = document.createElement("div");
lightbox.className = "lightbox";

const lightboxImage = document.createElement("img");

lightbox.appendChild(lightboxImage);

document.body.appendChild(lightbox);

// Abrir imagem
images.forEach(image => {

    image.addEventListener("click", () => {

        lightboxImage.src = image.src;

        lightbox.classList.add("open");

    });

});

// Fechar ao clicar fora
lightbox.addEventListener("click", (e) => {

    if (e.target !== lightboxImage) {

        lightbox.classList.remove("open");

    }

});

// Fechar com ESC
document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        lightbox.classList.remove("open");

    }

});