// ==========================================
// LIGHTBOX GALLERY
// ==========================================

const galleryItems = document.querySelectorAll(".gallery-item img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector("img");

let currentImage = 0;

// Abrir imagem
galleryItems.forEach((img, index) => {

    img.addEventListener("click", () => {

        currentImage = index;

        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;

        lightbox.classList.add("open");

        document.body.style.overflow = "hidden";

    });

});

// Fechar
function closeLightbox(){

    lightbox.classList.remove("open");

    document.body.style.overflow = "";

}

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        closeLightbox();

    }

});

// ESC

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeLightbox();

    }

});

// ==========================================
// IMAGEM SEGUINTE
// ==========================================

function nextImage(){

    currentImage++;

    if(currentImage>=galleryItems.length){

        currentImage=0;

    }

    lightboxImg.src=galleryItems[currentImage].src;
    lightboxImg.alt=galleryItems[currentImage].alt;

}

// ==========================================
// IMAGEM ANTERIOR
// ==========================================

function prevImage(){

    currentImage--;

    if(currentImage<0){

        currentImage=galleryItems.length-1;

    }

    lightboxImg.src=galleryItems[currentImage].src;
    lightboxImg.alt=galleryItems[currentImage].alt;

}

// ==========================================
// TECLADO
// ==========================================

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("open")) return;

    if(e.key==="ArrowRight"){

        nextImage();

    }

    if(e.key==="ArrowLeft"){

        prevImage();

    }

});

// ==========================================
// TOUCH (Swipe)
// ==========================================

let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener("touchstart",(e)=>{

    touchStartX=e.changedTouches[0].screenX;

});

lightbox.addEventListener("touchend",(e)=>{

    touchEndX=e.changedTouches[0].screenX;

    if(touchEndX-touchStartX>50){

        prevImage();

    }

    if(touchStartX-touchEndX>50){

        nextImage();

    }

});

// ==========================================
// DUPLO CLIQUE = FECHAR
// ==========================================

lightboxImg.addEventListener("dblclick",()=>{

    closeLightbox();

});